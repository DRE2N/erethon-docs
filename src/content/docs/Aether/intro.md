---
title: Allgemein
sidebar_position: 1
---

Genau wie Quests werden Mobs über unser [GitHub-Repository](https://github.com/DRE2N/Erethon) konfiguriert. Um Änderungen aus dem Repository auf den Testserver zu bringen, nutze `/q sync`. Nachdem die Synchronisierung abgeschlossen ist, ist es notwendig die Mobs mit `/ae reload` neu zu laden. Der erstellte Mob kann dann einfach mit `/ae spawn <id>` getestet werden.
### Dateien
Jeder Mob-Typ hat eine Konfigurationsdatei. Diese befindet sich in `Aether/creatures/` und ist eine YAML-Datei (Dateiendung `.yml`). Der Name der Datei ist die ID des Mobs, die dann ingame oder in QXL genutzt wird.
Wenn der Name der Datei `disabled` beinhaltet, wird der Mob nicht geladen.

### Spawner
Anstatt über QXL können Mobs auch mit einem Spawner gespawnt werden. Um einen Spawner zu erstellen, erstelle eine Config in `Aether/spawners`. 
#### Spawner-Config
```yaml
# ID des Spawners. Eine Config kann mehrere Spawner beinhalten.
test:
  # ID des Mobs
  id: example
  # Position des Spawners in der Welt
  loc:
    world: world
    x: 5
    y: 100
    z: 17
  # Ob dieser Spawner ticken soll, also regelmäßig spawnen. Deaktivieren wenn z.B. von Quest getriggert.
  isTicking: true 
  # Radius, in dem die Mobs spawnen
  radius: 10
  # Y-Radius, in dem die Mobs spawnen
  radiusY: 5
  # Mobs per Spawn-Zyklus
  mobsPerSpawn: 2 
  # Chance einen Mob zu spawnen
  chance: 100.0 
  # Maximale Mobs. Der Spawner hört auf, wenn diese Zahl erreicht ist.
  maxMobs: 10 
  # Entfernung in Blöcken, in der Mobs gezählt werden. 
  # Sollte größer als Spawn-Radius sein, da Mobs laufen (:O )
  maxMobsRange: 32
  # Cooldown zwischen Spawn-Versuchen. In Sekunden.
  cooldown: 30 
  # Entfernung in Blöcken, ab der der Spawner aktiv wird. 
  # Idealerweise aus Performance-Gründen nicht zu hoch stellen.
  activationRange: 32 
```

### Models
:::caution Resourcepack-Generierung ist noch nicht automatisiert. 
Daher bitte aktuell noch nicht nutzen.
::: 
Aether unterstützt Models und Animationen im Blockbench-Format (`.bbmodel`). Diese müssen im Ordner `Aether/models/` platziert werden.

### Befehle
* **/ae reload** - Lädt alle Mobs neu aus ihren Konfigurationsdateien.
* **/ae spawn <ID\> [count]** Spawnt einen Mob. 
* **/ae test model <ID\>** Spawnt ein Model an einer fixen Position. Debugging-Befehl.

### Beispiel Mob-Config
```yaml
# Required. What gets displayed to the players
displayType: vindicator
# Optional. The name of the NPC, displayed above the NPC
displayname: ExampleNPC
# Optional. If you change this, all NPCs of this type will recreate themselves on the next load. 
#Required to be changed when changing attributes or equipment, as the changes will not be applied otherwise
version: 0 
# Optional. Can be used to specify a different class for the NPC. Currently unused, as we don't have bosses yet
#class:
# Optional. A list of skins to use. The NPC will randomly choose one when spawned 
skins: 
  - "https://minesk.in/03ca0fa19c644e71810e1f6fc29eefd4"
# Alternatively, you can use just `skin: "https://minesk.in/03ca0fa19c644e71810e1f6fc29eefd4" for a single skin
# Optional. The model of the NPC. If not specified, no model will be used
model: redstone_monstrosity
# Optional. The team the NPC is on. NPCs of the same team will not attack each other. 
# NPCs of different teams can be set to attack each other
team: blablah
ai:
# See https://erethon.de/docs/aether/ai_goals
  goals:
   - 0;avoid_target;1.0;2.0;20;pig
   - "goal2"
  targets:
   - ""
   - ""
# All values here are optional.
config: 
  invulnerable: false # If true, the NPC will not take damage
  collision: true # If true, the NPC will collide with players and other entities
  persistent: true # If false, the NPC will not be saved
  glowing: false # If true, the NPC will glow
  gravity: true # If true, the NPC will be affected by gravity
  nametagVisible: true # If true, the NPC's name will be visible
  maximumAir: 300 # Maximum air the NPC can have
# Optional. Spells to cast. There are 5 types of triggers: onAttack, onDamaged, onDeath, onTarget, onTimer
spells:
  onAttack:
    Backstab: # Spellbook spell name
      chance: 20 # Chance this spell is triggered
# Optional. The attributes the NPC should have. Supports all Minecraft and Spellbook attributes
# Currently formatted this way as . are not valid in config sections. Due to change in 1.21.2 as attribute names
# will no longer contain dots. 
attributes:
  0:
    id: "generic.max_health"
    value: 20
  1:
    id: "generic.movement_speed"
    value: 0.4
  2:
    id: "advantage.physical"
    value: 50
  3:
    id: "generic.attack_damage"
    value: 20
# Optional. Equipment to wear. Hephaestus IDs
equipment:
  hand: "minecraft:diamond_sword"
  helmet: "minecraft:diamond_helmet"
  chest: "minecraft:diamond_chestplate"
  leggings: "minecraft:diamond_leggings"
  boots: "minecraft:diamond_boots"
# Optional. Interaction options
interaction:
  messages: # Messages to say when a player is nearby. They appear above the NPC
    - "Test message"
    - "Another test message"
  randomTalker: true # If true, the NPC will randomly say one of the messages when a player is nearby
  sounds: # Sounds to play
    attack: entity.vindicator.celebrate
    ambient: entity.vindicator.celebrate
    shoot: entity.vindicator.celebrate
    death: entity.vindicator.celebrate
    hurt: entity.vindicator.celebrate
loot: # Optional. Loot to drop
  xp: 200 # XP to drop
  items: # Items to drop. Hephaestus IDs
    - "erethon:theanor_mud"
```
