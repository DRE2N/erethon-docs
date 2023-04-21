---
title: Actions
sidebar_position: 2
---

**Actions** können, wie alle anderen QXL-Funktionen, in einer Lang- und Kurzschreibweise geschrieben werden. Die Kurzschreibweise nutzt dabei nur eine Zeile.
Für einige komplexe Actions steht die Kurzschreibweise nicht zur Verfügung.

In dieser Dokumentation wird die Kurzschreibweise zu erst genannt und dann die Langschreibweise.

## Animation
``animation``

Spielt eine Animation ab.
* **name:** Der Name einer vorher erstellten Animation
* **instanced:** true/false - Ob die Animation nur für den Spieler (oder seine Gruppe) sichtbar ist (true) oder für alle (false). Default = true.
* **runAfter:** Actions, nachdem die Animation vollständig abgespielt wurde. 
## Command
``command``

Führt einen Befehl aus. 

* **command:** Der Befehl. Der Platzhalter `%player%` kann benutzt werden & wird durch den Namen des Spielers ersetzt.
* **op:** true/false -  Ob der Befehl als OP (mit *-Permissions) ausgeführt wird oder nicht. Sollte vorsichtig genutzt werden. Default = false.
* **console:** true/false - Ob der Befehl vom Server ausgeführt werden soll. Default = false.
## Cutscene
``cutscene``

Spielt eine vorher erstellte Cutscene ab.

* **name:** Der Name einer vorher ingame erstellten Cutscene
* **instanced:** true/false - Ob der Spieler nach Ende der Cutscene wieder an den Start zurückteleportiert wird (true), oder da bleibt wo die Cutscene endet (false). Default = false.
* **runAfter:** Nachdem die Cutscene fertig abgespielt wurde.
## Delay
``delay``

Führt eine oder mehrere Actions verzögert aus. Keine Kurzschreibweise möglich. 

* **delay:** Die Verzögerung, gemessen in Ticks. Eine Sekunde -> 20 Ticks. 
* **actions:** Eine Aufzählung der Actions, die nach dem Delay ausgeführt werden. Kurz- und Langform sind möglich.
* **runAfter:** Nach Ausführung der verzögerten Action.

## Dialogue
``dialogue``

Startet einen Dialog.

* **id:** Die ID des Dialogs.

## Give Item
``give_item``

Vergibt ein oder mehrere Items an den Spieler.

* **item:** Das Item. Kann ein Vanilla-Item-Name sein oder ein Custom-Item. 
* **amount:** Die Menge des Items. Default = 1.
* **chance:** Ein Wert von 0 bis 100, der die Chance angibt mit der dieses Item erhalten werden kann. Default = 100.

## Hide IBC
``hide_ibc``

Versteckt eine IBC.

* **id:** ID der IBC.

## Message
``message``

Sendet eine Nachricht an den Spieler. 

* **message:** Die Nachricht.
## Mob Follow
:::caution Nicht implementiert
:::
``mob_follow_player``

Lässt einen Mob/NPC einem Spieler folgen.

## Paste schematic
``paste_schematic``

Fügt eine Schematic in der Welt ein.

* **schematic:** Der Name der Schematic
* **time:** Optional. Zeit in Sekunden, nachdem die Schematic automatisch wieder entfernt wird (//undo)
* **location:** QLocation

## Permission
``permission``

Verändert die Permission oder Gruppen eines Spielers.

* **permission:** Die Permission oder der Gruppen-Name.
* **action:** `add`, `remove`, `add_group`, `remove_group` - Was passieren soll.
## Repeat
``repeat``

Wiederholt eine oder mehrere Actions.

* **delay:** Zeit zwischen einzelnen Wiederholungen, in Ticks (20 ticks -> 1 Sekunde)
* **repetitions:** Wie oft die Actions wiederholt werden.
* **actions:** Die Actions.

## Reset IBC
``reset_ibc``

Setzt eine IBC auf den Weltzustand zurück.

* **id:** Die ID der IBC

## Run as
``run_as``

Führt eine Action für bestimmte Spieler aus.

* **runMode:** ``event_in_range``, ``event_participants`` oder ``online``. Default: ``online``
* **runValue:** Nur wenn ``event_participants``: Mindestwert an Eventbeteiligung.

## Show Beam
:::caution Nicht implementiert in 1.19.3
:::
``show_beam``

Zeigt einen Marker-Lichtstrahl an.

## Show IBC 
``show_ibc``

Zeigt eine IBC an.

* **id:** Die ID der IBC

## Spawner
``spawner``

Triggered einen Spawner manuell.
* **id:** Die ID des Spawners.

## Spawn Mob
``stage``

Spawnt einen Mob oder NPC.

* **id:** Die ID des Mobs/NPCs.
* **location:** QLocation

## Stage change
``stage``

Ändert die Stage des Spielers oder des Events.

* **quest:** Quest-ID
* **id:** Stage-ID

## Start Event
``start_event``

Startet ein Event.

* **id:** ID des Events
* **skipConditions:** Ob Conditions für den Event-Start ignoriert werden sollen.

## Start Quest
``start_quest``

Startet eine Quest.

* **id:** ID der Quest

## Teleport
``teleport``

Teleportiert den Spieler. 

* QLocation

## Title
``title``

Sendet einen Titel an den Spieler.

* **title:** Wie Vanilla-Command
* **subtitle:** Wie Vanilla-Command
* **fadeIn:** Wie Vanilla-Command
* **stay:** Wie Vanilla-Command
* **fadeOut:** Wie Vanilla-Command
