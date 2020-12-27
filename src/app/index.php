<?php 
require "./lib/dbCon.php";
?>
<?php
// header('Access-Control-Allow-Origin: *');
//  $servername = "localhost";
//  $username   = "id15746656_dinhliemthalotech";
//  $password   = "Phamkhanhthi@662012";
//  $dbname     = "id15746656_dbdtonline";
 
//  // Create connection
//  $conn = new mysqli($servername, $username, $password, $dbname);
//  //$conn -> set_charset("utf8");
// // mysqli_set_charset($conn,"utf8");
//  $conn->query("SET NAMES 'utf8'");
 
//  // Check connection
//  if ($conn->connect_error) {
//      die("Connection failed: " . $conn->connect_error);
//  } 
 
   //echo "Connected successfully";
 $sql = "SELECT * FROM BACDAOTAO";
 $result = mysqli_query($conn,$sql); 
 $myArray = array();
 if ($result->num_rows > 0) {
 // output data of each row
     while($row = $result->fetch_assoc()) {
         $myArray[] = $row;
     }
     print json_encode($myArray);
 } 
 else 
 {
     echo "0 results";
 }