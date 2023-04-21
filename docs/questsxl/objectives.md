---
title: Objectives
sidebar_position: 4
---

## Craft
:::caution Nicht implementiert
ItemsXL ist noch nicht so weit :/
:::
``craft``

Ein Item herstellen. Sowohl Vanilla als auch JobsXL-Crafting.

* **id:** ID des Items.
* **amount:** Menge 

## Enter Region
``enter_region``

Eine Region betreten.

* **id:** ID der Region.

## Entity Interact
``entity_interact``

Mit einer Entity interagieren (Rechtsklick).

* **id:** Die Entity. Wenn hier ein Vanilla-Typ angegeben wird, zählt *jede* Vanilla-Entity dieses Typs. Ansonsten versucht QXL, einen Aether-NPC mit dieser ID zu finden.

## Escort NPC
:::caution Nicht implementiert
:::
``escort_npc``

Einen NPC bewachen.

## Experience
:::caution Nicht implementiert
:::
``experience``

## Impossible

Dieses Objective ist unmöglich und wird niemals erfüllt. Kann für Stages nützlich sein.

## Instant

Dieses Objective ist sofort erfüllt. Kann für Stages nützlich sein.

## Item Pickup
:::caution Nicht implementiert
ItemsXL ist noch nicht so weit :/
:::
``item_pickup``

Ein Item aufsammeln.

* **id:** ID des Items.
* **amount:** Menge 

## Job Experience
``job_exp``

In einem Beruf eine bestimmte Menge Erfahrung erreichen.

* **amount:** Menge
* **reason:** ``command``, ``crafting``, ``dungeon``, ``item``, ``mob``, ``quest``, ``unknown``

## Kill Player
``kill_player``

Einen oder mehrere Spieler töten.

* **amount:** Menge der Spieler. Aktuell zählt der gleiche Spieler mehrmals (TODO).

## Leave Region
``leave_region``

Eine Region verlassen.

* **id:** Die ID der Region.

## Location
``location``

Eine Position erreichen.

* **distance:** Maximaldistanz zur Location
* **QLocation**

## Mob
``mob``

Einen Mob töten. Funktioniert aktuell nur für mit Aether gespawnte Mobs.

* **id:** ID des Mobs.
* **amount:** Menge.

## Server Command
``server_command``

/q command (Identifier) wurde ausgeführt. Nützlich zur Integration mit Commandblocks.

* **identifier:** Der Identifier.

## Use Item
:::caution Nicht implementiert
ItemsXL ist noch nicht so weit :/
:::
``use_item``

Ein Item nutzen.

## Wait
:::note Single-Line-Configs
Das Wait-Objective unterstützt keine Single-Line-Configs.
:::

Warten.

* **duration:** Wartezeit
* **range:** Entfernung von der Warte-Location.
* **QLocation**
