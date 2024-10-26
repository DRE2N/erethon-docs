---
title: Global Structures
sidebar_position: 6
---

**Global signs** are used to create entry points for dungeons in the main world. They are technically different from [dungeon signs](signs) that set up game mechanics in dungeons. None of these are supposed to work in dungeons. When a global structure is created, players cannot break it unless they use `/dxl break`. The global signs that currently exist listen to being touched and perform the action that is described below.

***
1. [Group](#group)
2. [Game](#game)
3. [Leave](#leave)
4. [Portal](#portal)
***

## Group
Adds players to a group of players that play the dungeon together.

| Line | Input                     | Example    |
|------|---------------------------|------------|
| 1st  | [DXL]                     | [DXL]      |
| 2nd  | Group                     | Group      |
| 3rd  | {Dungeon name}            | OldMansion |
| 4th  | {max players}(,{group name}(,{amount to autostart})) | 4,TeamA,2 |

If an autostart option is specified, the dungeon will be instantiated without a portal as soon as two players have joined the group.

## Game
Adds groups to one game. If group signs without a game sign are used, each group sign will create a new instance when players enter the portal. Game signs add groups to a common game which means multiple groups can enter one instance.

| Line | Input                     | Example    |
|------|---------------------------|------------|
| 1st  | [DXL]                     | [DXL]      |
| 2nd  | Game                      | Game       |
| 3rd  | {Dungeon name}            | OldMansion |
| 4th  | {max players}(,{amount to autostart}) | 4,2 |

## Leave
Allows the player to leave his group. This is the same as the `/dxl leave` command.

| Line | Input | Example |
|------|-------|---------|
| 1st  | [DXL] | [DXL]   |
| 2nd  | Leave | Leave   |
| 3rd  | N/A   |         |
| 4th  | N/A   |         |

## Portal
Portals teleport players into their instance. The `/dxl portal ({material})` command gives the user a tool to mark the edges where the portal is supposed to appear. Even if any material technically works, blocks must allow for players to stand inside them (so portal blocks, cobwebs and air work fine, cobblestone does not). Portals are not linked to specific dungeons. Instead, the dungeon a group remembers as the next one from the group / game sign is used.