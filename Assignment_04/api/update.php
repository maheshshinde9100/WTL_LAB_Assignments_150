<?php
include "connection.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['name']) || !isset($data['marks'])) {
    http_response_code(400);
    die(json_encode(["error" => "Name and marks are required"]));
}

$name = $data['name'];
$marks = intval($data['marks']);

$stmt = $conn->prepare("UPDATE student SET marks = ? WHERE name = ?");
$stmt->bind_param("is", $marks, $name);

if ($stmt->execute()) {
    if ($stmt->affected_rows > 0) {
        echo json_encode(["success" => true, "message" => "Record updated successfully"]);
    } else {
        echo json_encode(["success" => true, "message" => "No records updated"]);
    }
} else {
    http_response_code(500);
    echo json_encode(["error" => "Error updating record: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>