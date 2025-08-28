<?php
    $data = [
            ["id"=>1, "name"=>"mahesh", "dept"=>"comp"],
            ["id"=>2, "name"=>"ayush", "dept"=>"comp"],
            ["id"=>3, "name"=>"prasad", "dept"=>"comp"],
            ["id"=>4, "name"=>"abc", "dept"=>"xyz"],
            ["id"=>5, "name"=>"siddharth", "dept"=>"IT"]
        ];
                     
    if ($_GET['id'] >0) {
        $req = $_GET['id'];
        $found = false;         
        foreach($data as $user) {
         if ($user['id'] == $req) {
                    $found = true;
                    echo $user['name']," : ",$user['id']," : ",$user['dept'];
                    break;
                }
            }
                    
            if(!$found) {
                echo 'DUMMY';
                echo 'ID: DUMMY';
                echo 'Department: DUMMY';
            }
        } else {
            echo 'Enter a user ID to search';
        }
    ?>
