console.log('\n========== [Beispiel: 3] =========='); 
function ausgabe(vorname) {
    console.log('JavaScript-Tutorial für '+ vorname +' - jetzt "JavaScript" lernen');
    return(vorname);        // return gibt an, was die Function beim Abrufen zurückgeben soll
}

var nachname = 'Sonjachen';                                                     // definieren 'nachname'
var laenge = nachname.length;                                                   // definieren Länge von 'nachname' als laenge
var vorname = ausgabe(nachname);                                                // definieren 'vorname' über function(ausgabe) inklusive String
console.info('Anzahl Buchstaben in Sonja: ', laenge);                          // Ausgabe Länge von 'nachname' in der Console
console.log('Inhalt der Variable außerhalb der Funktion: ' + nachname)          // Ausgabe 'nachname' direkt ausserhalb der function
console.log('Inhalt der Variable vorname außerhalb der Funktion: '+ vorname)    // Ausgabe 'nachname' über function(ausgabe)