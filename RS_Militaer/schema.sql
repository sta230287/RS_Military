-- Erstelle die Tabelle 'rolle' mit den Spalten id, name und parent_id
CREATE TABLE rolle (
    id SERIAL PRIMARY KEY,  -- Die ID ist der Primärschlüssel und wird automatisch inkrementiert
    name VARCHAR(100) NOT NULL,  -- Der Name des Ranges (z.B. 'General Staff')
    parent_id INT,  -- Die ID des übergeordneten Ranges (NULL, wenn der Rang keine Eltern hat)
    CONSTRAINT fk_parent FOREIGN KEY (parent_id) REFERENCES rolle(id) ON DELETE CASCADE  -- Fremdschlüssel, der auf sich selbst verweist
);

-- Füge einige Daten zur Tabelle 'rolle' hinzu (z.B. militärische Hierarchie)
INSERT INTO rolle (name, parent_id) VALUES
    ('General Staff', NULL),  -- General Staff hat keinen übergeordneten Rang
    ('Field Army', 1),  -- Field Army ist der direkte Nachfolger von General Staff
    ('1st Division', 2),  -- 1st Division gehört zur Field Army
    ('2nd Division', 2),  -- 2nd Division gehört zur Field Army
    ('Brigade A', 3),  -- Brigade A gehört zur 1st Division
    ('Brigade B', 4),  -- Brigade B gehört zur 2nd Division
    ('Battalion 1', 5),  -- Battalion 1 gehört zu Brigade A
    ('Battalion 2', 6);  -- Battalion 2 gehört zu Brigade B
