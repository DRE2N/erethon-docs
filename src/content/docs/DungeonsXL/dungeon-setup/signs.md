---
title: Signs
sidebar_position: 1
---

**The old article about dungeon signs is available [here](signs-legacy). Note that this new article might not contain all information from the old one yet.**

This article explains the **[dungeon sign](signs) system** that will be added to the 0.18 update of DungeonsXL.

The new sign systems aims to make the actions of signs more predictable and standardized as well as to create a stable, supported API to easily create new ones through addons.

***
1. [Groups](#groups)
* 1. [Button](#button)
* 2. [Passive](#passive)
* 3. [Rocker](#rocker)
* 4. [Windup](#windup)
2. [List of signs by their group](#list-of-signs-by-their-group)
3. [Triggers](#triggers)
***

## Groups
API note: Each group is represented by an abstract class in the  de.erethon.dungeonsxl.api.sign package. The method DungeonSign#trigger(Player) is defined for every group, but may refer to different actions depending on the sign.

### Button
A sign that performs a specific action every time it is triggered. For example, a [classes sign](signs#classes) with the default [interact trigger](signs#interact-1) sets your class every time you punch it.

Operations:
```
public void trigger(Player) - =push(Player)
public void push() - When the button is pushed.
public void push(Player) - When the button is pushed (player-sensitive).
```


### Passive
_Passive signs_ don't do anything on their own. Their function is mostly to mark locations or blocks, like [lobby](signs#lobby) or [bed signs](signs#bed).

As the name says, passive signs don't have any operations.
```
public void trigger(Player) - Overridden with an empty method.
```

### Rocker
A sign that has a _deactivated_ and an _activated state_ and can switch between these two is called a _rocker_. For example, if a [door sign](signs#open-door) is activated, the door opens - if it is deactivated, the door closes. The state may be set for the whole game world or for the player who triggered the sign depending on the context.

Operations:
```
public void trigger(Player) - Activates the sign if it is not yet activated;
                              deactivates it if it is already activated.
public void activate() - Activates the sign for the game world.
public boolean activate(Player) - Activates the sign for the player.
                                  Returns true if successful.
public boolean deactivate() - Deactivates the sign for the game world.
public boolean deactivate(Player) - Deactivates the sign for the player.
                                    Returns true if successful.
public boolean isActive() - Returns if the sign is activated for the game world.
public boolean isActive(Player player) - Returns if the sign is activated
                                         for the player.
```

### Windup
A _windup sign_ is a sign with an attached task that does actions in a set interval _n_ times, like a [mob sign](signs#mob) that spawns _n_ mobs. It is similar to a rocker as it expires (=is deactivated).

Additional operations:
```
public double getIntervalSeconds() - Returns the interval time in seconds
public long getIntervalTicks() - Returns the interval time in ticks (20/s)
```

## List of signs by their group

/ = or

() = Optional

{} = Nonterminal

{}* = Nonterminal may occur multiple times with "," as a separator, e.g. "{Item ID}*" -> "IRON_SWORD,APPLE,STICK"

everything else = Terminal

| Group   | Name                                     | 2nd line syntax         | 3rd line syntax         |
|---------|------------------------------------------|-------------------------|-------------------------|
| Button  | [ActionBar](DungeonSign-ActionBar)       | {MSG ID}                | N/A                     |
| Button  | [BossShop](DungeonSign-BossShop)         | {Shop name}             | N/A                     |
| Button  | [MSG](DungeonSign-MSG)                   | {MSG ID}                | N/A                     |
| Button  | [Checkpoint](DungeonSign-Checkpoint)     | N/A                     | N/A                     |
| Button  | [Classes](DungeonSign-Classes)           | {Class name}            | N/A                     |
| Button  | [End](DungeonSign-End)                   | {Floor in the dungeon}  | N/A                     |
| Button  | [Leave](DungeonSign-Leave)               | N/A                     | N/A                     |
| Button  | [Lives](DungeonSign-Lives)               | {Modifier}              | GAME/GROUP/PLAYER       |
| Button  | [Ready](DungeonSign-Ready)               | N/A                     | {Seconds to auto start} |
| Button  | [ResourcePack](DungeonSign-ResourcePack) | {ResourcePack ID}/reset | N/A                     |
| Button  | [SoundMSG](DungeonSign-SoundMessage)     | {Vanilla sound name}/{Sound enum value} | {Category},{volume},{pitch} |
| Button  | [Teleport](DungeonSign-Teleport)         | {x coordinate},{y},{z}  | {compass direction[1]}  |
| Button  | [Title](DungeonSign-Title)               | {MSG ID for the title}(,{subtitle})  | N/A        |
| Passive | [Bed](DungeonSign-Bed)                   | {Team ID}               | N/A                     |
| Passive | [DungeonChest](DungeonSign-DungeonChest) | N/A                     | ({Loottable name})      |
| Passive | [Flag](DungeonSign-Flag)                 | {Team ID}               | N/A                     |
| Passive | [Hologram](DungeonSign-Hologram)         | {MSG ID}                | {Height}                |
| Passive | [Interact](DungeonSign-Interact)         | {ID of fired I trigger} | _Line 3&4 contain the text that will be showed on line 2&3 of the clickable sign._ |
| Passive | [Lobby](DungeonSign-Lobby)               | N/A                     | N/A                     |
| Passive | [Note](DungeonSign-Note)                 | N/A                     | N/A                     |
| Passive | [Place](DungeonSign-Place)               | {Block ID}              | ({Rotation}\*,{fired sign triggers}\*) |
| Passive | [Protection](DungeonSign-Protection)     | N/A                     | N/A                     |
| Passive | [RewardChest](DungeonSign-RewardChest)   | ({Money reward, level reward}) | ({Loottable name}) |
| Passive | [Script](DungeonSign-Script)             | {Script name}           | N/A                     |
| Passive | [Start](DungeonSign-Start)               | ({Team ID})             | N/A                     |
| Rocker  | [Block](DungeonSign-Block)               | {Block ID}              | {Block ID}              |
| Rocker  | [Door](DungeonSign-Door)                 | N/A                     | N/A                     |
| Rocker  | [Trigger](DungeonSign-Trigger)           | {ID of fired T trigger} | N/A                     |
| Windup  | [Command](DungeonSign-Command)           | {Command script ID}     | {Delay in sec.},OP/CONSOLE/DEFAULT |
| Windup  | [Drop](DungeonSign-Drop)                 | {Item ID}               | {Stack size}(,{Drop rate})
| Windup  | [Mob](dungeon-npcs#mob-signs)            | {Mob ID = fired M trigger} | {Delay in sec.},{Amount}(,{external mob plugin tag}) |
| Windup  | [Redstone](DungeonSign-Redstone)         | {Delay in decisec.}     | ({Repeats}/0)           |

[1]: E.g. "N", "NE", "NNE", "E", "ENE"

## Triggers

| Symbol | Name     | Usage                 | Trigger condition                       | Annotation               |
|--------|----------|-----------------------|-----------------------------------------|--------------------------|
| D      | Distance | D{distance in blocks} | One time when one player is in distance | Use e.g. for mob signs   |
| F      | Fortune  | F{chance}             | On initialization by chance             | ".75" = 75%              |
| I      | Interact | I{ID}                 | The interaction block is clicked        |                          |
| M      | Mob      | M{spawn ID}           | A mob with the spawn ID has been killed | Mob needs to be spawned through a mob sign. Spawn ID is whatever was used there. |
| P      | Presence | P{distance in blocks} | Every time for each player in distance  | Use e.g. for checkpoints |
| R      | Redstone | R                     | Block is powered                        | For wall signs, the block to power is the block the sign is attached to |
| T      | Sign     | T{ID}                 | Generic ID trigger                      | See trigger sign         |
| U      | Use item | U{item ID}            | Click with item in hand                 |                          |