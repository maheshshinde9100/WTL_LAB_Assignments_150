<?php
$conn = new mysqli("localhost", "root", "", "student_db");
if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}
?>