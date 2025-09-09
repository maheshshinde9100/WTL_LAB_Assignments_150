<?php
include "connection.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['name'])) {
    http_response_code(400);
    die(json_encode(["error" => "Name is required"]));
}

$name = $data['name'];

$stmt = $conn->prepare("DELETE FROM student WHERE name = ?");
$stmt->bind_param("s", $name);

if ($stmt->execute()) {
    if ($stmt->affected_rows > 0) {
        echo json_encode(["success" => true, "message" => "Record deleted successfully"]);
    } else {
        echo json_encode(["success" => true, "message" => "No records deleted"]);
    }
} else {
    http_response_code(500);
    echo json_encode(["error" => "Error deleting record: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>