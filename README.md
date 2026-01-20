# Militärische Hierarchie Visualisierung

Dieses Projekt stellt die militärische Hierarchie des serbischen Militärs mithilfe von Node.js, PostgreSQL und OrgChart.js dar.

## Vorraussetzungen

- Node.js (mindestens Version 14.x)
- PostgreSQL (mit einer funktionierenden Datenbank)
- Zugriff auf das Internet für externe Bibliotheken (z.B. OrgChart.js)

## Installation und Ausführung

1. **Projekt herunterladen und entpacken**:
   Wenn du das ZIP-Archiv hochgeladen bekommst, entpacke es und gehe in den Ordner.

2. **Abhängigkeiten installieren**:

   Stelle sicher, dass du in deinem Projektordner bist und führe dann diesen Befehl aus, um die Abhängigkeiten zu installieren:

   ```bash
   npm install

3. **.env bearbeiten**

    Füge deine Postgres Daten ein, damit die Daten von der Datenbank abgerufen werden können.

4. **Datenbank einrichten**:

    Öffne die PostgreSQL-Konsole (z.B. pgAdmin oder psql) und führe das Skript schema.sql aus, um die Datenbank und die Tabelle zu erstellen.

    Das Skript schema.sql enthält die Struktur der Tabelle und die Einfügedaten.

5. **Server starten**:

    ```bash
    node server.js

    Der Server läuft jetzt unter http://localhost:3000.

6. **Website aufrufen**:
    Öffne im Browser die Datei index.html und du solltest die Hierarchie des serbischen Militärs als Diagramm sehen.

## Datenbankstruktur

Die Tabelle rolle enthält die folgenden Spalten:

id: Die eindeutige ID der Hierarchieebene.
name: Der Name des Ranges.
parent_id: Die ID des übergeordneten Ranges (oder   NULL, wenn es keinen übergeordneten Rang gibt).

## Zu verwendende Technologien

Backend: Node.js, Express, PostgreSQL

Frontend: OrgChart.js für die Visualisierung der Hierarchie

Datenbank: PostgreSQL

## Fehlerbehebung

Wenn die Seite nicht geladen wird, stelle sicher, dass der Node.js-Server läuft und PostgreSQL korrekt eingerichtet ist.
