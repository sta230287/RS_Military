const express = require('express');
const cors = require('cors');  // CORS-Paket importieren
const { Client } = require('pg');
const app = express();
const port = 3100;

app.use(express.static('public'));

// CORS aktivieren
app.use(cors());  // CORS für alle Routen aktivieren

require('dotenv').config();  // Lade die Umgebungsvariablen

// PostgreSQL-Datenbankverbindung
const client = new Client({
    user: process.env.DB_USER,       // Benutzername aus der .env-Datei
    host: process.env.DB_HOST,       // Hostname aus der .env-Datei
    database: process.env.DB_NAME,   // Datenbankname aus der .env-Datei
    password: process.env.DB_PASSWORD, // Passwort aus der .env-Datei
    port: process.env.DB_PORT,        // Port aus der .env-Datei
});

// Verbindung zur DB herstellen
client.connect()
    .then(() => {
        console.log('Datenbankverbindung erfolgreich hergestellt.');
    })
    .catch(err => {
        console.error('Fehler beim Verbinden mit der Datenbank:', err);
    });

// Logge alle Anfragen (für Debugging)
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] Anfrage: ${req.method} ${req.url}`);
    next();
});

// Endpunkt für die Hierarchie
app.get('/hierarchy', async (req, res) => {
    console.log('Verarbeite Anfrage für Hierarchie...');

    try {
        const result = await client.query(`
            WITH RECURSIVE hierarchy AS (
                SELECT id, name, parent_id
                FROM rolle
                WHERE parent_id IS NULL
                UNION ALL
                SELECT r.id, r.name, r.parent_id
                FROM rolle r
                JOIN hierarchy h ON r.parent_id = h.id
            )
            SELECT * FROM hierarchy ORDER BY parent_id, id;
        `);
        
        if (result.rows.length === 0) {
            console.warn('Keine Hierarchiedaten gefunden.');
        } else {
            console.log(`Daten für ${result.rows.length} Hierarchie-Einträge gefunden.`);
        }

        res.json(result.rows);  // Die Daten als JSON zurückgeben
    } catch (err) {
        console.error('Fehler beim Abrufen der Hierarchiedaten:', err);
        res.status(500).send('Server Error');
    }
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft unter http://localhost:${port}`);
});
