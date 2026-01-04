---
title: Übersicht
sidebar_position: 1
---

# Übersicht des Wirtschaftssystems
Das System läuft in einem regelmäßigen Zyklus ab (oft als "Payday" bezeichnet). Ein Zyklus geschieht alle 24 Stunden, wahrscheinlich so um 18 Uhr.

1.  **Gebäude-Effekte & Produktion**
2.  **Ressourcenverbrauch der Bevölkerung**
3.  **Berechnung der Zufriedenheit**
4.  **Erhebung der Steuern**
5.  **Auf- und Abstieg der Bevölkerung**
6.  **Management von Unruhe & Aufständen**
7.  **Aufstieg der Fraktion**

Jede Fraktion besitzt eine Stufe. Pro Stufe stehen bestimmte Gebäude zur Verfügung. Gebäude sind zum einen notwendig für das Wirtschaftssystem selbst, bieten aber auch Boni für die Spieler, die Fraktionsmitglieder sind. 

---

## 1. Gebäude-Effekte & Ressourcenproduktion

Am Anfang jedes Zyklus werden alle Gebäude der Fraktion "aktiviert". Sie wenden ihre spezifischen Boni oder Mali an. Dies kann zum Beispiel die Produktionsrate bestimmter Ressourcen für diesen Zyklus erhöhen.

Direkt danach findet die eigentliche **Ressourcenproduktion** statt. Die Menge an produzierten Ressourcen wird durch die Basisproduktion der Gebäude und globale Modifikatoren der Fraktion bestimmt.

**Formel:**
```
Produzierte Menge = Basisproduktion der Gebäude * Globale Produktions-Modifikatoren
```

Produzierte Güter werden dem Fraktionslager (`FStorage`) hinzugefügt, während verbrauchte Güter abgezogen werden.
Es besteht dabei eine Reihenfolge, so dass Gebäude Ressourcen von anderen Gebäuden weiterverarbeiten können.

---

## 2. Ressourcenverbrauch der Bevölkerung

Jede Bevölkerungsstufe (Bettler, Bauern, Bürger etc.) hat spezifische Bedürfnisse. In dieser Phase wird berechnet, wie gut diese Bedürfnisse erfüllt werden.

Für jede Bevölkerungsstufe und jede benötigte Ressource wird folgendermaßen gerechnet:

1.  **Bedarf ermitteln:**
    ```
    Benötigte Menge = Anzahl der Einwohner dieser Stufe * Verbrauch pro Einwohner
    ```
2.  **Bedarfsdeckung berechnen:** Das System prüft, wie viel der benötigten Ressource im Fraktionslager verfügbar ist. Das Verhältnis von verfügbar zu benötigt ergibt die Bedarfsdeckung (ein Wert zwischen 0.0 und 1.0).
    ```
    Bedarfsdeckung (pro Ressource) = min(1.0, Verfügbare Menge / Benötigte Menge)
    ```
    *   Ein Wert von `1.0` bedeutet, der Bedarf wurde vollständig gedeckt (100%).
    *   Ein Wert von `0.5` bedeutet, es war nur die Hälfte der benötigten Menge verfügbar (50%).

3.  **Ressourcen verbrauchen:** Die tatsächlich verbrauchte Menge wird vom Lager abgezogen.

*Beispiel:* 100 Bauern benötigen jeweils 1 Getreide. Der Gesamtbedarf ist 100 Getreide. Sind nur 80 Getreide im Lager, ist die Bedarfsdeckung für Getreide `0.8` (80%), und 80 Getreide werden verbraucht.

---

## 3. Berechnung der Zufriedenheit

Die Zufriedenheit ist der zentrale Wert, der fast alles andere beeinflusst. Sie wird pro Bevölkerungsstufe berechnet und setzt sich aus mehreren Teilen zusammen:

#### a) Grundzufriedenheit

Dies ist der wichtigste Teil. Sie ist ein **gewichteter Durchschnitt** der Bedarfsdeckung aller Ressourcen. Das bedeutet, dass lebenswichtige Güter (z.B. Nahrung) einen größeren Einfluss auf die Zufriedenheit haben als Luxusgüter.

**Formel:**
```
Grundzufriedenheit = (Summe aller [Bedarfsdeckung * Gewichtung]) / (Summe aller Gewichtungen)
```
*Beispiel:* Ein Bauer hat eine Bedarfsdeckung von `1.0` bei Getreide (Gewicht 0.7) und `0.5` bei Fisch (Gewicht 0.7).
`Grundzufriedenheit = (1.0 * 0.7 + 0.5 * 0.7) / (0.7 + 0.7) = 1.05 / 1.4 = 0.75`

#### b) Vielfaltsbonus

Bürger werden zufriedener, wenn sie eine größere Auswahl an Gütern innerhalb einer Kategorie (z.B. verschiedene Nahrungs- oder Luxusgüter) erhalten. Für jede erfüllte Mindestvielfalt gibt es einen kleinen Bonus.

**Formel:**
```
Vielfaltsbonus (pro Kategorie) = (Anzahl gelieferter Sorten / Mindestvielfalt) * 0.01
```
Dieser Bonus wird auf die Zufriedenheit addiert.

#### c) Externe Modifikatoren

Gebäude (wie Kirchen, Parks) oder besondere Events können die Zufriedenheit direkt positiv oder negativ beeinflussen.

#### d) Malus durch Unruhe

Hohe Unruhe in der Fraktion wirkt sich negativ auf die Moral der Bürger aus und senkt ihre Zufriedenheit.
*   Dieser Malus beginnt erst ab einem Unruhe-Wert von `1.0` zu wirken.
*   Er skaliert linear bis zu einem Unruhe-Wert von `50.0`.
*   Der maximale Malus beträgt `-0.25` auf die Zufriedenheit.

#### Endgültige Zufriedenheit

Alle diese Faktoren werden addiert, und das Ergebnis wird auf einen Wert zwischen `0.0` (absolut unzufrieden) und `1.0` (vollkommen zufrieden) limitiert. Um starke Schwankungen zu vermeiden, wird der neue Wert nur langsam an den alten angenähert.

**Formel:**
```
Finale Zufriedenheit = Grundzufriedenheit + Vielfaltsbonus + Modifikatoren - Unruhe-Malus
```
```
Angezeigte Zufriedenheit = Alte Zufriedenheit + (Finale Zufriedenheit - Alte Zufriedenheit) * 0.25
```

---

## 4. Erhebung der Steuern

Die Steuereinnahmen hängen direkt von der Anzahl der Bürger und deren Zufriedenheit ab. Zufriedene Bürger zahlen mehr Steuern. Bürger höherer Stufen zahlen mehr Steuern.

**Formel:**
```
Steuereinnahmen (pro Stufe) = Einwohnerzahl * Steuereinnahmen-Faktor(0.0-1.0) * Finale Zufriedenheit(0.0-1.0)
```
Die Gesamtsumme aller Stufen wird dem Fraktionskonto gutgeschrieben.

---

## 5. Auf- und Abstieg der Bevölkerung

Basierend auf ihrer Zufriedenheit und den Lebensbedingungen können Bürger in eine höhere oder niedrigere Stufe auf- oder absteigen.

### Aufstieg (z.B. Bauer zu Bürger)

Damit Einwohner aufsteigen können, müssen mehrere Bedingungen erfüllt sein:
1.  **Wohnraum:** In der Ziel-Stufe muss genügend freier Wohnraum vorhanden sein.
2.  **Allgemeine Voraussetzungen:** Die aktuelle Stufe muss die definierten Aufstiegskriterien erfüllen (z.B. bestimmte Gebäude müssen existieren).
3.  **Ressourcen-Verfügbarkeit:** Es muss im Lager eine **Mindestmenge** an Ressourcen geben, die die Ziel-Stufe benötigt. Zusätzlich muss die **laufende Produktion** ausreichen, um die neu aufgestiegenen Bürger zumindest für einen Zyklus versorgen. Dies verhindert das Einwohner kurzfristig auf- und direkt wieder absteigen.

Die Anzahl der Aufsteiger wird durch den schwächsten dieser drei Faktoren limitiert. Ein Aufstieg **senkt** in der Regel die Unruhe, da die Bürger zufriedener sind.

### Abstieg (z.B. Bürger zu Bauer)

Ein Abstieg erfolgt, wenn die Zufriedenheit einer Bevölkerungsstufe sehr niedrig ist (unter `0.15`).
*   Je niedriger die Zufriedenheit, desto größer der prozentuale Anteil der Bevölkerung, der absteigt (jedoch maximal `10%` pro Zyklus).
*   Es steigt immer mindestens eine Person ab, wenn die Schwelle unterschritten wird.

Ein Abstieg **erhöht die Unruhe** signifikant, da er durch Unzufriedenheit verursacht wird. Pro abgestiegenem Bürger gibt es eine Straf-Unruhe von `+0.1`.

---

## 6. Management von Unruhe & Revolten

Unruhe ist ein Maß für die allgemeine Instabilität in der Fraktion. Sie wird durch unzufriedene oder absteigende Bürger erhöht und durch aufsteigende Bürger oder hohe Zufriedenheit gesenkt.

### Unruhe-Zerfall

Wenn die durchschnittliche Zufriedenheit aller Bürger über einem Schwellenwert von `0.6` liegt, beginnt die Unruhe von selbst zu sinken.
*   Die Sinkrate ist umso höher, je glücklicher die Bevölkerung ist.
*   **Basis-Sinkrate:** `5%` der aktuellen Unruhe.
*   **Bonus-Sinkrate:** Bis zu `8%` zusätzlich bei maximaler Zufriedenheit.

### Aufstände

Wenn die Unruhe einen kritischen Wert von `25.0` übersteigt, kann ein Aufstand ausbrechen.
*   Die Anzahl der spawnenenden Aufständischen skaliert mit der Höhe der Unruhe (`Unruhe * 1.2`).
*   Das System wählt einen zufälligen "Epizentrum"-Chunk im Kernland der Fraktion.
*   Aufständische spawnen in in einem kleinen Radius um dieses Epizentrum herum.
*   Solange ein Aufstand aktiv ist, kann kein zweiter Aufstand gestartet werden.
*   Das Töten eines Aufständischen senkt die Unruhe um `1.0`.
*   Aufständische töten Tiere, greifen Spieler an und zerstören wertvolle Blöcke. Sie sind mit Fackeln und Mistgabeln bewaffnet.
*   Während eines Aufstandes können keine Gebäude gebaut werden. Der Aufstand muss erst besiegt werden. 

---

## 7. Aufstieg der Fraktion

Zuletzt prüft das System, ob die Fraktion die Bedingungen für eine höhere Fraktionsstufe (`FactionLevel`) erfüllt. Dies hängt typischerweise von der Gesamtbevölkerung und dem Vorhandensein bestimmter Gebäude ab. Ist dies der Fall, steigt die Fraktion auf.
Die Stufen sind wie folgend: HAMLET, VILLAGE, TOWN, CITY, METROPOLIS. Zu Release stehen nur die ersten beiden Stufen samt ihrer Gebäude zur Verfügung. 