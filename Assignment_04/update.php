<?php
include "connection.php";

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die(json_encode(["error" => "Method not allowed. Use POST."]));
}

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['id']) || !isset($data['name']) || !isset($data['marks'])) {
    http_response_code(400);
    die(json_encode(["error" => "ID, name and marks are required"]));
}

$id = intval($data['id']);
$name = $data['name'];
$marks = intval($data['marks']);

$stmt = $conn->prepare("UPDATE student SET name = ?, marks = ? WHERE id = ?");
$stmt->bind_param("sii", $name, $marks, $id);

if ($stmt->execute()) {
    if ($stmt->affected_rows > 0) {
        echo json_encode(["success" => true, "message" => "Record updated successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "No records updated - ID not found"]);
    }
} else {
    http_response_code(500);
    echo json_encode(["error" => "Error updating record: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>