---
title: Getting started
sidebar_position: 2
---

_DungeonsXL_ is, after all, a relatively complex plugin. In order to understand it, you should go on step by step, try out the features you're interested in and get a feeling for them.

First of all, make sure [ItemsXL](https://www.spigotmc.org/resources/itemsxl.14472/) is installed on your server. You also might want to check out the [soft dependencies and incompatibilities](plugin-integration) of DXL. Even though DungeonsXL will work perfectly fine without anything else but IXL, specialized plugins may be useful additions.

Especially if you're using Minecraft 1.8.x, you should read the [legacy support page](legacy-support) to avoid confusion as some features might not work with old versions.

# The first dungeon
## Creation
Let's start by creating a first dungeon map.

Every dungeon map is a fully functional dungeon by itself (single floor dungeon), but it can also be used in the context of another multi floor dungeon, where each floor is a separate map.

The command _/dxl create {map name}_ will create a new flat world where you can build the structures you desire to be inside your dungeon. The player who created the new map will instantly be teleported to the map spawn.

You can always leave a dungeon map (or, precisely: A dungeon player group) with _/dxl leave_. A player who leaves a dungeon gets his old inventory, potion effects, levels, game mode etc. back.

### Importing maps
Of course, you can use an already built map as well. Just copy any map you want as a DXL map to _DungeonsXL/maps/_; DungeonsXL will find and recognize it.

You can also easily import a map from the world container of the server (the world container of CraftBukkit is the main directory) with _/dxl import {map name}_.

### Editing the map
If you want to work on an existing map, just type in _/dxl edit {map name}_. You can see a list of all existing maps with _/dxl list_. If a player edits a map, he gets creative mode, the inventory is saved and cleared and all commands are denied unless the player has the permission node _dxl.bypass_. Therefore, a player who is editing a dungeon map is **unable to interact with the main worlds of the server**. This is quite useful if you want to provide a possibility to build in creative mode without the need to grant dangerous permissions.

A player is allowed to edit a map if he has the permission node _dxl.edit_ or if he is explicitely invited to work on a map. To invite a player, run the command _/dxl invite {player name} {map}_.

## Setting up the details of the game
### Signs

![Sign concept](http://feuerstern.bplaced.net/ressourcen/DXLSigns/SignConcept.png)

Block structures are not the only thing to prepare in the edit mode. You can also setup the details of the game experience, like where the players spawn, checkpoints, enemy spawn points and so on. This can be done with signs with special codes. Dungeon signs will disappear when players play the game, so you do not need to worry about hiding them. A list of all sign codes is available [here](signs).

Dungeon signs define...

**...what happens...**

The first line of the sign defines the type of the sign. The second and the third line contain information to handle the details of "what happens".

**...where...**

The position where you place the sign is the position where the actions defined by the sign will happen.

**...under which circumstances.**

The fourth line of each sign contains one or more triggers. A trigger is a condition which must be fulfilled before the action defined in the first three lines happens. Common examples are distance triggers that trigger their sign if a player walks more or less close to it or mob triggers that require PvE kills. A list of all triggers is available [here](signs#triggers).

## Setting up the game rules
The game mechanics of DungeonsXL are customized through game rules. They determine for example the requirements a player needs to fulfill to be allowed to enter the dungeon, if players may use their own items in the dungeon or kits, or whether friendly fire is prevented. [This article](game-rules) contains a list of all rules, but reading the [simple example dungeon setup](simple-dungeon) first for a practical example is advised.

## Entering the dungeon
A dungeon can be entered through multiple different ways. The principle is always the same, though:

1. The players form a group. This may be skipped if one player plays the dungeon alone.
2. Multiple groups are added to the game. This may be skipped if one group plays the dungeon without competition.
3. The group(s) enter the dungeon lobby.
4. There, they choose a class and their equipment. If this is done, they enter the actual game area.
5. The game starts.

### Sign and portal
Players can setup their groups with a [group](signs#group) sign in one of the main worlds. Group leaders may use the [game] sign to add their groups to a game with multiple groups. You should also add a [leave](signs#leave) sign, just in case that a player doesn't know the _dxl leave_ command or for reasons of comfort.

The portal does not need any link to the dungeon as this is defined by the signs; just create it with _/dxl portal_ and DungeonsXL will handle the rest.

If you'd like to, you can specify other materials than the portal block through the command, for example through _/dxl portal WATER_. Portal blocks are recommended because they obviously are the block that is intended to be a portal. They are explicitly supported, while other materials are not handled specifically and might not work as intended or break upon new Minecraft versions if their physics change.

A correct sign / portal setup should look similar to this:

![Enter with a portal](http://feuerstern.bplaced.net/ressourcen/DXLSigns/EnterPortal.png)

**To remove a portal or global sign, use _/dxl break_.**

### Command
A game can also be started with the _/dxl play_ command. This is the easiest way to test your dungeons. Groups can be set up with the _/dxl group_ command. Make sure to give players the correct permissions if you want to use this feature - by default, they are disabled.

### Announcer
A global announcer repeatingly continually invites all players or all players who are on a specific map to join a game. Read more [here](scripts#announcements) for details.

### Testing without reward
You can test a dungeon without rewards by using the test game type. A test game can be started with _/dxl test_ while the command sender is in a dungeon lobby.

## Multi floor dungeons (MFDs)
As mentioned above, dungeons can also consist of multiple instances that are linked together. Creating a multi floor dungeon is as simple as creating a [dungeon configuration](dungeon-configuration). You can then join an MFD with _/dxl play {script name}_.
