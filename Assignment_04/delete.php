<?php
include "connection.php";

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die(json_encode(["error" => "Method not allowed. Use POST."]));
}

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['id'])) {
    http_response_code(400);
    die(json_encode(["error" => "ID is required"]));
}

$id = intval($data['id']);

$stmt = $conn->prepare("DELETE FROM student WHERE id = ?");
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    if ($stmt->affected_rows > 0) {
        echo json_encode(["success" => true, "message" => "Record deleted successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "No records deleted - ID not found"]);
    }
} else {
    http_response_code(500);
    echo json_encode(["error" => "Error deleting record: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>