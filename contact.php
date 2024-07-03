<?php
include 'connection.php'; 
$email=$_POST['emailadress'];
$message=$_POST['message'];
$query="insert into evacontact values(' ','$email','$message')";
$query_run = mysqli_query($conn, $query);
if($query_run)
{
    header("Location: contact.html");
    echo "<script>alert('Message send successfully');</script>";
}
?>