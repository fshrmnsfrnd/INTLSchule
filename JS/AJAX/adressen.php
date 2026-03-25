<?php

$dbHost = "localhost";
$dbDatabase = "adressen";
$dbTable = "adressen";
$dbUser = "adressen";
$dbPasswort = "kennwort1";

//$db1 = mysqli_connect($dbHost, $dbUser, $dbPasswort, $dbDatabase, 3306);
$db1 = mysqli_connect($dbHost, 'root', null, $dbDatabase, 3306);
if (mysqli_connect_errno()){
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

if (isset($_GET['suche'])){
    $suchstring = $db1->real_escape_string($_GET['suche']);
    $query = "select * from $dbTable where name like '$suchstring%'";
    
    if (!($result1 = $db1->query($query)))
        print "Fehlermeldung $query: ".$db1->error."<br> " ;

    $namensliste = Array();
    while ($selectergebnis = $result1->fetch_assoc()){
        $namensliste[] = $selectergebnis;
    }

    print json_encode($namensliste);
}else if(isset($_GET['details'])){
    $suchstring = $db1->real_escape_string($_GET['details']);
    $query = "select * from $dbTable where id = $suchstring";
    
    if (!($result1 = $db1->query($query)))
        print "Fehlermeldung $query: ".$db1->error."<br> " ;

    print json_encode($result1->fetch_assoc());
}else{
    print "No Searchterm";
}