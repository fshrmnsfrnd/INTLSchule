<?php
$ergebnis = [];

if (isset($_GET['id'])) {
$personen = JSON_decode(file_get_contents('daten/personen1.json'), true);

$id = $_GET['id'];
    $length = strlen((string)$id);

    foreach ($personen as $person) {
        if ($person['id'] % (10 ** $length) == $id) {
            $ergebnis = $person;
        }
    }
}


if (isset($_GET['name'])) {
    $personen = JSON_decode(file_get_contents('daten/personen1.json'), true);

    $name = $_GET['name'];

    foreach ($personen as $person) {
        if (stripos($person['name'], $name) !== false) {
            $idUndName['id'] = $person['id'];
            $idUndName['name'] = $person['name'].", ".$person['vorname'];
            $ergebnis[] = $idUndName;
        }
    }
}

if (isset($_GET['terminid'])) {
    $termine = JSON_decode(file_get_contents('daten/termine.json'), true);

    $terminid = $_GET['terminid'];

    foreach ($termine as $termin) {
        if ($termin['id'] == $terminid) {
            $ergebnis[] = $termin;
        }
    }
}


header('Content-Type: application/json');
echo json_encode($ergebnis);