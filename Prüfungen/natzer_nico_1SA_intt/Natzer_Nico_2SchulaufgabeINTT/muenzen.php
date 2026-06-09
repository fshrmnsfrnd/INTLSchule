<?php


$material = ['Bronze','Silber','Messing'];

if (isset($_GET['material'])) {
    print muenzen_material($_GET['material']);
}
else if (isset ($_GET['nummer']))
{
    print muenze($_GET['nummer']);
}
else
    print json_encode($material);


function muenzen_material($material) {
    $json =$json = file_get_contents("daten/daten.json");
    $alleMuenzen = json_decode($json,true);
    
    $muenzen = [];
    $i= 0;
    foreach( $alleMuenzen as $eineMuenze) {
        if ($eineMuenze['Material'] == $material){
            $m = [];
            $m['BildV'] = $eineMuenze['BildV'];
            $m['Nummer'] = $eineMuenze['Nummer'];
            $muenzen [] = $m;
            $i++;
            if ($i==20)
                break;
        }
    }
    return json_encode( $muenzen );
}

function muenze($id) {
    $json = file_get_contents("daten/daten.json");
    $alleMuenzen = json_decode($json,true);
    
    $eineKlasse = [];
    foreach( $alleMuenzen as $eineMuenze) {
        if ($eineMuenze['Nummer'] == $id){
            return json_encode($eineMuenze);
        }
    }
    
}
