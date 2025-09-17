<?php
include "connection.php";

if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    $stmt = $conn->prepare("SELECT * FROM student WHERE id = ?");
    $stmt->bind_param("i", $id);
} elseif (isset($_GET['name'])) {
    $name = $_GET['name'];
    $stmt = $conn->prepare("SELECT * FROM student WHERE name = ?");
    $stmt->bind_param("s", $name);
} else {
    $stmt = $conn->prepare("SELECT * FROM student");
}

$stmt->execute();
$result = $stmt->get_result();

$students = [];
while ($row = $result->fetch_assoc()) {
    $students[] = $row;
}

if (empty($students)) {
    http_response_code(404);
    echo json_encode(["message" => "No students found"]);
} else {
    // If searching by ID, return single object, otherwise return array
    if (isset($_GET['id']) && count($students) == 1) {
        echo json_encode($students[0]);
    } else {
        echo json_encode($students);
    }
}

$stmt->close();
$conn->close();
?>