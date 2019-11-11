<?php
$sel = $_GET['sT'];
if(isset($sel)){
    echo "bdshb";
    return "ddfdf";
}
$link = mysqli_connect("127.0.0.1", "root", "", "hairon");



if($sel == true){
    $nomes = [];   
    $sql = "SELECT * FROM 'time'";
    $res = mysqli_query($link, $sql);

    while($row = $mysqli_fetch_assoc($res)){
        array_push($nomes,$row['nome']);
    }
}
return $nomes;
?>