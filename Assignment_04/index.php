<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple PHP MySQL Connection</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .form-container { background: #f5f5f5; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
        input, button { padding: 10px; margin: 5px 0; width: 100%; }
        button { background: #4CAF50; color: white; border: none; cursor: pointer; }
        .response { background: #e9ecef; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .user-card { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; }
    </style>
</head>
<body>
    <h1>Simple PHP MySQL Connection</h1>
    
    <div class="form-container">
        <h2>Add User (POST Request)</h2>
        <form method="POST">
            <input type="text" name="name" placeholder="Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="number" name="age" placeholder="Age" required>
            <button type="submit">Add User</button>
        </form>
    </div>
    
    <div class="form-container">
        <h2>Search Users (GET Request)</h2>
        <form method="GET">
            <input type="text" name="search" placeholder="Search by name">
            <button type="submit">Search Users</button>
            <button type="button" onclick="window.location.href='?'">Show All Users</button>
        </form>
    </div>

    <?php
    $host = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'test_db';

    $conn = new mysqli($host, $username, $password);

    if ($conn->connect_error) {
        die("<div class='response'>Connection failed: " . $conn->connect_error . "</div>");
    }

    // Create database if it doesn't exist
    $conn->query("CREATE DATABASE IF NOT EXISTS $database");
    $conn->select_db($database);

    // Create users table if it doesn't exist
    $conn->query("CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        age INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )");

    // Handle POST request (Add User)
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = trim($_POST['name']);
        $email = trim($_POST['email']);
        $age = intval($_POST['age']);
        
        if (!empty($name) && !empty($email) && $age > 0) {
            $stmt = $conn->prepare("INSERT INTO users (name, email, age) VALUES (?, ?, ?)");
            $stmt->bind_param("ssi", $name, $email, $age);
            
            if ($stmt->execute()) {
                echo "<div class='response'>User added successfully!</div>";
            } else {
                echo "<div class='response'>Error: " . $conn->error . "</div>";
            }
            
            $stmt->close();
        } else {
            echo "<div class='response'>Please fill all fields with valid data.</div>";
        }
    }

    // Handle GET request (Search Users)
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $search = isset($_GET['search']) ? trim($_GET['search']) : '';
        
        if (!empty($search)) {
            $stmt = $conn->prepare("SELECT * FROM users WHERE name LIKE ?");
            $searchParam = "%" . $search . "%";
            $stmt->bind_param("s", $searchParam);
            $stmt->execute();
            $result = $stmt->get_result();
        } else {
            $result = $conn->query("SELECT * FROM users");
        }
        
        if ($result->num_rows > 0) {
            echo "<div class='response'><h2>Users Found:</h2>";
            while($row = $result->fetch_assoc()) {
                echo "<div class='user-card'>
                    <strong>ID:</strong> {$row['id']}<br>
                    <strong>Name:</strong> {$row['name']}<br>
                    <strong>Email:</strong> {$row['email']}<br>
                    <strong>Age:</strong> {$row['age']}<br>
                    <strong>Created:</strong> {$row['created_at']}
                </div>";
            }
            echo "</div>";
        } else {
            echo "<div class='response'>No users found.</div>";
        }
        
        if (!empty($search)) {
            $stmt->close();
        }
    }

    $conn->close();
    ?>
</body>
</html>