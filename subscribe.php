<?php
include 'connection.php'; 
$emailid=$_POST['emailid'];
$query="insert into subscribetable values(' ','$emailid')";
$query_run = mysqli_query($conn, $query);
if($query_run)
{
    header("Location: blog.html");
    echo "<script>alert('Message send successfully');</script>";
}
?>