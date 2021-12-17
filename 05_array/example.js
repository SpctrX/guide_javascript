console.log('\n========== [Beispiel: 5] ==========');

let players = ['Player1', 'Player2', 'Player3'];    // Array definieren 'players'
console.info('Ausgabe Array: \t\t', players);

players.push("Player4");        // Neuen Eintrag am Ende vom Array
console.info('Eintrag am Ende: \t', players);

players.unshift("newPlayer");   // Neuen Eintrag am Anfang vm Array
console.info('Eintrag am Anfang: \t', players);

/*
Ausgabe Anzahl Elemente
die letzte Eingabe war .unshift() = 5 Einträge
*/
console.info('Anzahl Arrayelemente: \t', players.length);