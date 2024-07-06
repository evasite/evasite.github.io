<?php
   $servername="localhost";
   $username="root";
   $password="";
   $dbname="evaadventures";
   $conn=mysqli_connect($servername,$username,$password,$dbname);
   if(!$conn)
   echo "connection failed"
?>