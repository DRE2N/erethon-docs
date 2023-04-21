---
title: Conditions
sidebar_position: 3
---

## Active Quest
``active_quest``

Überprüft ob der Spieler eine bestimmte Quest aktiv hat.

* **id:** Die ID der Quest

## Completed Quest
``completed_quest``

Überprüft ob der Spieler eine bestimmte Quest abgeschlossen hat.

* **id:** Die ID der Quest

## Event State
``event_state``

Überprüft den Status eines Events.

* **id:** Die ID des Events
* **state:** Der Status des Events. ``ACTIVE``, ``COMPLETED``, ``NOT_STARTED``, ``DISABLED``

## Global Score
``global_score``

Überprüft den Wert eines globalen Scores.

* **score:** Die ID des Scores
* **value:** Der Wert des Scores. Default: 1

## Group Size
``group_size``

Überprüft die Gruppengröße des Spielers.

* **min:** Die minimale Gruppengröße.
* **max:** Die maximale Gruppengröße.

## Inventory
:::caution Nicht implementiert
ItemsXL ist noch nicht so weit :/
:::
``inventory``

## Inverted
``inverted``

Invertiert die Bedingung.

* **InvertedConditions:** Die Bedingungen. Keine Kurzschreibweise möglich.

## Job Level
``job_level``

Überprüft das Level eines Berufs.

* **job:** Der Name des Berufs
* **level:** Das Minimallevel des Berufs

## Level
``level``
Überprüft das Level des Spielers.

* **level:** Das Minimallevel des Spielers

## Location
``location``

Überprüft ob der Spieler oder das Event sich an einer bestimmten Position befinden.

* **QLocation**
* **range:** Maximaldistanz zur Location

## Looking at
``looking_at``

Überprüft ob der Spieler auf eine bestimmte Position oder einen Block schaut.

* **block:** Der Block auf den der Spieler schaut. Optional.
* **QLocation** Nur wenn kein Block angegeben ist.
* **accuracy:** Maximaldistanz zur Location. Nur wenn kein Block angegeben ist.

## Permission
``permission``

Überprüft ob der Spieler eine bestimmte Permission hat.

* **permission:** Die Permission-Node

## Player Score
``player_score``

Überprüft den Wert eines Spieler-Scores.

* **score:** Die ID des Scores
* **value:** Der Wert des Scores.

## Region
``region``

Überprüft ob der Spieler oder das Event sich in einer bestimmten Region befinden.

* **region:** Die ID der Region

## Time
``time``

Überprüft die (echte) Zeit.

* **minHour:** Die minimale Stunde.
* **minMinute:** Die minimale Minute.
* **maxHour:** Die maximale Stunde.
* **maxMinute:** Die maximale Minute.
* **timeZone:** Die Zeitzone. Default: ``ECT``