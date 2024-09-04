---
title: Spell-Configdateien
sidebar_position: 1
---
## Grundlagen
Unsere Spells, Traits und Effekte lassen sich über Konfigurationsdateien verändern und balancen. Diese Dateien liegen wie gewohnt im [Erethon-Repository](https://github.com/DRE2N/Erethon). Die Spell-Konfiguration für alle Spell - inklusive der für Mobs - findet sich dabei im Ordner `Spellbook`.
Dinge die Spielercharaktere betreffen, wie Traitlines, Levelling und Klassen, finden sich im Ordner `Hecate`.

Das Repository wird mit `/q sync` mit dem Server synchronisiert. Daraufhin können mit `/h reload` sämtliche Spells, Traits, Effekte, Traitlines und Klassen neugeladen werden.
:::note Geduld!
Das Neuladen von Spellbook kann einige Sekunden dauern. 
:::

Jeder Spell hat dabei eine eigene Datei. Der Name der Datei entsprecht der ID des Spells. Die Dateien können in beliebige Unterordner abgelegt werden. Bitte haltet sie nach Klassen & Mobs sortiert.

## Kampfsystem
Spellbook ändert das gesamte Minecraft-Kampfsystem. Statt einfach nur "Schaden" gibt es sieben verschiedene Schadenstypen: `pure, physical, magical, air, earth, fire, water`. Zusätzlich gibt es kein reguläres Blocken - das steht nur dem Krieger zur Verfügung und wird ebenfalls mit Attributen erreicht - sowie eine generelle starke Reduzierung des Rückstoßes. 

`pure` ist dabei für natürliche Schadensquellen wie Lava, Fallschaden etc vorgesehen.

**Die Element-Schadenstypen werden nur von Mobs verwendet. Im PvP sind nur physischer und magischer Schaden relevant.**

Für jeden Schadenstyp hat jeder Spieler und jeder Mob eine Resistenz (`resistance`) sowie einen Schadenswert (`advantage`). Zusätzlich gibt es noch Penetration (`penetration`), die Resistenzen reduziert.
Elementschaden nutzt dabei `penetration.magical`.

### Formel für Schadensberechnung
Die Schadensberechnung selbst ist recht einfach:
```
finalDmg = advantage - (resistance - penetration)
```

Reguläre Angriffe (Linksklick) sowie einige Fähigkeiten können zusätzlich kritischen Schaden hinzufügen. Kritischer Schaden ist dabei ein fester Wert und *nicht* prozentual.

Spellbook selbst fügt Angriffen eine zufallsbasierte Varianz hinzu. So macht ein Angriff z.B. nicht immer exakt 50 Schaden, sondern mal 49, mal 51 und so weiter. Dies dient hauptsächlich dazu, es visuell interessanter zu machen - die Werte sind zu klein, um tatsächlich Auswirkungen aufs Gameplay zu haben.

## Attribute
Spellbook fügt eine Reihe neuer Attribute zu Minecraft hinzu. Diese lassen sich ingame über den `/attribute`-Befehl wie gewohnt bearbeiten.
Leider gibt es, da der Client die Attribute nicht kennt, keine Tabcompletion für unsere Attribute. Zusätzlich stehen natürlich alle [Vanilla-Attribute ](https://minecraft.wiki/w/Attribute) zur Verfügung.

### Liste der neuen Attribute
Spellbook fügt folgende Attribute hinzu:
:::info
In den Konfigurationsdateien nutzen die Attribute Unterstriche `_` statt Punkte `.` für die Namen.
:::
```yaml
advantage.pure # Für natürliche Schadensquellen. Nicht für Rüstungen etc.
advantage.physical
advantage.magical
advantage.air
advantage.earth
advantage.fire
advantage.water

resistance.pure # Nicht nutzen. Existiert nur aus technischen Gründen.
resistance.physical
resistance.magical
resistance.air
resistance.earth
resistance.fire
resistance.water

penetration.magical # Reduziert die Resistenz gegen magischen/elementaren Schaden des Gegners. 
penetration.physical # Reduziert die Resistenz gegen physischen Schaden des Gegners. 

stat.crit.chance # Sollte zwischen 0 und 100 liegen
stat.crit.damage # Kritischer Schaden. Nicht prozentual. stat.crit.damage=200 -> ein Crit macht 200 Bonusschaden
stat.attackspeed # Beinflusst auch, wie schnell Mobs angreifen. z.B. die Schussrate von Skeletten.
stat.cooldownreduction # Mobs ignorieren aktuell Cooldowns, diese müssen über Aether konfiguriert werden.
stat.healthregen # Automatische Regeneration
stat.energyregen # Automatische Regeneration
stat.energy # Wird auch als Mana genutzt. 
stat.healingpower # Kann bestimmte Spell-Effekte verstärken
stat.tenacity # Kann bestimmte Spell-Effekte verstärken
combat.hurtinvul # Zeit zwischen zwei Angriffen, die ein Gegner unverwundbar ist.

```
### Balancing / Coefficients
Grundsätzlich lassen sich die gleichen Spells sowohl von Spielern als auch Mobs nutzen. Ebenfalls lassen sich Spells sowohl gegen Mobs als auch gegen Spieler anwenden.
Um unterschiedliches Balancing für PvE und PvP zu ermöglichen, nutzt Spellbook ein "Coefficient"-System.
Schaden, Effektdauer und so weiter von Spells werden von den Attributen des Casters bestimmt. So machen viele Angriffe des Kriegers zum Beispiel Schaden basierend auf dem `advantage.physical`-Attribut. 
Wieviel Schaden lässt sich in der Spell-Konfigurationsdatei dann einstellen, jenachdem ob das Ziel des Angriffes ein Spieler oder ein Mob ist. Dazu gibt es folgende Sektion:
```yaml
coefficients:
  players:
    resistance_physical: 1.0
    resistance_magical: 1.0
  entities:
    resistance_physical: 0.5
    resistance_magical: 0.5
```
In diesem Beispiel wird beispielsweise für diesen Spell das `resistance_physical`-Attribut um 50% reduziert, wenn das Ziel des Spells ein Mob (Entity) ist.

# Spell-Beschreibungen
Den Spielern wird ingame eine Beschreibung für jeden Spell angezeigt. Diese kann ebenfalls in der Konfigurationsdatei eingestellt werden.
Achtet dabei darauf, das die Beschreibung als Item-Tooltip sichtbar ist. Einzelne Zeilen sollten daher nicht allzu lang sein.

Die Beschreibung kann Platzhalter beinhalten, die dynamisch ersetzt werden. So zeigt sie z.B. den tatsächlich korrekten Schadenswert für jeden
Spieler individuell an, wobei auch Attributänderungen (z.B. ein aktueller positiver Buff) mit einbezogen werden.

Da die Platzhalter sich von Spell zu Spell unterscheiden, gibt es in jeder Datei eine Liste mit `availablePlaceholder`. Diese listet in korrekter Reihenfolge alle für diesen Spell zur
Verfügung stehenden Platzhalter.
Mit `<arg:IndexDesPlatzhalter>` kann ein Platzhalter in die Beschreibung eingefügt werden. So würde `<arg:3>` z.B. den dritten Platzhalter aus der Liste einfügen.

:::caution Cooldown-Platzhalter
Der Platzhalter für den Cooldown ist aus technischen Gründen **immer** `<arg:0>`, allerdings _nicht_ der erste in der Liste. Die Platzhalter beginnen bei 1. 
:::

## Beispiel-Datei
Hier einmal die Spell-Datei für den Spell `Assassination`. Sie ist als `Assassination.yml` im Ordner `Spellbook/spells/assassin/` abgelegt.
```yaml
class: assassin.Assassination # Interne Java-Klasse für diesen Spell
energyCost: 80 # Kosten
duration: 10 # Dauer des Spells
critAmount: 30 # Verschiedene Spell-spezifische Werte. 
critChance: 50
resistances: -10
# Dieser Spell besitzt aktuell keine Coefficients. 
# Entsprechend ist das Verhalten bei Spieler und bei Mobs exakt gleich.
name: # Der Name des Spells
  de: Attentat # de -> deutsch
  en: Assassination # en -> englisch
description: # Die Beschreibung des Spells wird ingame angezeigt.
  de: # Auch hier wieder eine Sektion für en/de. 
  - <!i><#757575>Fernangriff | Zielgerichtet
  - ' '
  - <#94958B>Erhöht kurzzeitig die Crit-Chance um <arg:1>%<#94958B> und
  - <#94958B>senkt die Verteidigung um <arg:3>%.
  - ' '
  - '<!i><yellow>⌛ <#94958B>Dauer: <arg:6> Sekunden'
  - '<!i><yellow>⚡ <#94958B>Skillkosten: <arg:5> Energie'
  en:
  - <!i><#757575>Ranged Attack | Targeted
  - ' '
  - <#94958B>Increases your Crit-Chance by <arg:1>%<#94958B> and decreases
  - <#94958B>the target's resistance by <arg:3>%.
  - ' '
  - '<!i><yellow>⌛ <#94958B>Duration: <arg:6> seconds'
  - '<!i><yellow>⚡ <#94958B>Energy Cost: <arg:5> Energy'
# In dieser Liste finden sich sämtliche Platzhalter, die dieser Spell unterstützt.
# Platzhalter werden mit <arg:IDDesPlatzhalters> eingefügt. z.B. <arg:1> würde
# hier den Platzhalter für critChance einfügen. <arg:2> wiederum critAmount. 
# Achtung: Der cooldown-Platzhalter ist immer <arg:0>, da er global existiert.  
# Die Liste selbst hat keine Bedeutung und dient nur der Referenz. Wenn ihr sie löscht wird
# sie automatisch neu erstellt.
availablePlaceholders:
- critChance
- critAmount
- resistance
- range
- energyCost
- duration
- cooldown
```