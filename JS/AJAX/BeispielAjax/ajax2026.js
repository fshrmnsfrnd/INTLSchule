function startAjax(zeit) {
    // Request Objekt erzeugen
    console.log("Start Request");
    let httpreq = new XMLHttpRequest();
    if (httpreq) {

        // Callbackmethode erstellen
        // Wird aufgerufen, wenn der Server antwortet
        httpreq.onreadystatechange = function  () {
            console.log("onreadystatechange:  readystate = "+httpreq.readyState);
            //Prüfen, ob die Antwort vollständig vorliegt (readyState == 4)
            if (httpreq.readyState == 4) {
                // Textantwort des Servers in eine Variable kopieren
                var text = httpreq.responseText;
                 //z.B. Als Meldung ausgeben … da kann natürlich noch viel mehr passieren
                document.getElementById("ergebnis").innerHTML = text;
               
            
            }
        }
        

        // HTTP-Request formulieren; z.B. GET-REquest
        // URL mit Parametern zusammenstellen z.B.:
        let url = "ajax2026.php"; 
        // Wenn eine Zeit übergeben wurde, wird sie als get-Parameter zur URL 		 
        // hinzugefügt
        zeit = document.getElementById("zeit").value;
        if (zeit){
            url = url + "?zeit=" + zeit;
        } 

        // Request absenden
        httpreq.open("get", url);
        // Den Conttent Type festlegen
        httpreq.setRequestHeader("Content-Type",
            "application/x-www-form-urlencoded");
        // Und den Request absenden
        httpreq.send(null);
        console.log("Ende Request");
    }
}



