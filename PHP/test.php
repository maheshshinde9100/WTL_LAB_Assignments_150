<?php
    // $_GET  : stores the data in the form of associative array send using GET required
    // $_POST : stores content passed using POST request

    echo "<h3 style='text-align:center'>Method type : POST
    <h3>Hello ", $_POST['username'],"!!! </h3>
    <h3>Your Password : ",$_POST['password'], "</h3>";

    // Indexed Array
    $arr1 = array('item 1','item 2','item 3');
    $arr2 = ['element 1','element 2','element 3'];

    echo "Printing Array Elements :> <ul>";
    for($i=0;$i<count($arr1); $i++){
        echo "<li>",$arr1[$i],"</li> ";
    }
    echo "</ul>";

    echo "###Associative Array :>";

    $arr3 = ['id'=>1,'name'=>'abc','marks'=>89];
    // use this foreach loop for values from associative array
    echo "<br>##using foreach(array as value){...} for associative array :> <br>";
    echo "<ul>";
    foreach($arr3 as $value){
        echo "<li>",$value,"</li>";
    }
    echo "</ul>";

    // use this foreach loop for key and value from associative array
    echo "<br>##using foreach(array as key=>value){...} for associative array :> <br>";  
    echo "<ul>";
    foreach($arr3 as $key=>$value){
        echo "<li>",$key,'=>',$value,"</li>";
    }    
    echo "</ul>";

?>
