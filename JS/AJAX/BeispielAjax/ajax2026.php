<?php


if (isset($_GET['zeit'])) {
    print  "Übergebener Parameter: " . $_GET['zeit'] . " am " . date("d.m.Y H:i:s");
    sleep($_GET['zeit']);
    print  "<br>Fertig  am " . date("d.m.Y H:i:s");
} else {
    sleep(2);
    print " Keine Zeit übergeben: Wartezeit 1s";

}
