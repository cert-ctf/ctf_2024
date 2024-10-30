document.getElementById('c64Screen').addEventListener('click', function() {
    document.getElementById('userInput').focus();
});

// Die Reihenfolge der erwarteten Befehle
const commandSequence = ['LOAD "$",8', 'LIST', 'LOAD "OPENDOOR",8', 'RUN'];
let currentCommandIndex = 0;
let acceptedCommands = [];  // Speichert die akzeptierten Befehle
let crypt = "0728";

// Funktion zum Entfernen von Leerzeichen aus den Befehlen
function normalizeCommand(command) {
    return command.replace(/\s+/g, '').toUpperCase();
}

// Funktion, um den Output eines Befehls zu generieren
function generateOutput(command) {
    switch (command) {
        case 'LOAD"$",8':
            return 'SEARCHING FOR $\nLOADING\nREADY.\n';
        case 'LIST':
            return '0 "VIRTUAL DISK"     00  2A\n1 "OPENDOOR.PRG"      PRG\nREADY.\n';
        case 'LOAD"OPENDOOR",8':
            return 'SEARCHING FOR OPENDOOR\nLOADING\nREADY.\n';
            case 'LOAD"OPENDOOR.PRG",8':
                return 'SEARCHING FOR OPENDOOR\nLOADING\nREADY.\n';
        case 'RUN':
            return 'RUNNING OPENDOOR\nDER CODE IST: '+decrypt(crypt)+'\nREADY.\n';
        default:
            return '';
    }
}



document.getElementById('userInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const input = normalizeCommand(this.value);  // Entferne Leerzeichen und konvertiere in Großbuchstaben
        const output = document.getElementById('output');

        // Generiere den neuen Output basierend auf dem eingegebenen Text
        let newOutput = `READY.\n\n> ${this.value.trim()}\n`;  // Zeige die Originaleingabe an

        // Entferne Leerzeichen aus dem aktuellen erwarteten Befehl für den Vergleich
        const expectedCommand = normalizeCommand(commandSequence[currentCommandIndex]);

        // Überprüfe, ob der eingegebene Befehl gültig ist (egal ob er schon eingegeben wurde)
        if (input === expectedCommand || acceptedCommands.includes(input)) {
            // Generiere und füge den passenden Output basierend auf dem Befehl hinzu
            newOutput += generateOutput(input);

            // Füge den gültigen Befehl zu den akzeptierten hinzu, falls es der erwartete war
            if (!acceptedCommands.includes(input)) {
                acceptedCommands.push(input);
            }

            // Bewege zur nächsten erwarteten Befehlsposition, aber nur, wenn es der aktuelle erwartete Befehl war
            if (input === expectedCommand) {
                currentCommandIndex++;
            }

            // Wenn alle Befehle ausgeführt wurden, zurücksetzen
            if (currentCommandIndex >= commandSequence.length) {
                currentCommandIndex = 0;
                acceptedCommands = [];  // Liste zurücksetzen, da alle Befehle abgearbeitet wurden
            }
        } else {
            // Fehlermeldungen für unerwartete Eingaben
            if (input.startsWith('LOAD') && !input.startsWith('LOAD"$",8') && !input.startsWith('LOAD"OPENDOOR",8')) {
                newOutput += 'FILE NOT FOUND\nREADY.\n';
            } else if (input === 'RUN' && currentCommandIndex < commandSequence.length - 1) {
                newOutput += 'ILLEGAL QUANTITY\nREADY.\n';
            } else {
                newOutput += 'SYNTAX ERROR\nREADY.\n';
            }
        }

        // Überschreibe den bestehenden Output komplett mit der neuen Ausgabe
        output.textContent = newOutput.trim();  // Setze den neuen Output, überschreibe die vorherige Ausgabe

        this.value = '';  // Eingabefeld leeren
    }

    
});

function decrypt(input) {
    return input.replace(/[a-zA-Z0-9]/g, function(char) {
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode((char.charCodeAt(0) - 97 + 13) % 26 + 97);
        } else if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode((char.charCodeAt(0) - 65 + 13) % 26 + 65);
        } else if (char >= '0' && char <= '9') {
            return String.fromCharCode((char.charCodeAt(0) - 48 + 5) % 10 + 48);
        }
        return char;
    });
}