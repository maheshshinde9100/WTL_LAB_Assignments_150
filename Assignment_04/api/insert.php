<?php
include "connection.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['name']) || !isset($data['marks'])) {
    http_response_code(400);
    die(json_encode(["error" => "Name and marks are required"]));
}

$name = $data['name'];
$marks = intval($data['marks']);

$stmt = $conn->prepare("INSERT INTO student (name, marks) VALUES (?, ?)");
$stmt->bind_param("si", $name, $marks);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Record inserted successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Error inserting record: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>