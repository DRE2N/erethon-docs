---
title: Simple Dungeon
sidebar_position: 1
---

This tutorial is supposed to explain the creation and setup of a most basic PvE single floor dungeon. It is assumed that you have read and understood "[Getting started](getting-started)". Enter the edit mode (/dxl edit SimpleDungeon).

***

1. [The lobby](#the-lobby)
2. [The game](#the-game)
3. [Settings](#settings)
4. [Download](#download)

***

## The lobby
First of all, a dungeon needs a lobby where the players can gather and start it all at once. In the lobby, most, but not all signs including [mob](signs#mob) spawners are by design not yet instantiated.

The lobby spawn position is marked with a [lobby](signs#lobby) sign. The sign which starts the game is [ready](signs#ready). In most cases, a ready sign does not need to specify a game type. It also generates its own interact trigger, so everything but the identifying first line can be left empty.

_TODO: IMAGE_

## The game
Now that our lobby is created, let us focus on the game part. The game part is where the players actually play whatever you have built. When all players click the ready sign, they are teleported to the position of the [start](signs#start) sign and all remaining signs - like mob spawners - get initialized. The game part finishs with an [end](signs#end) sign that has its own built-in interact trigger if nothing is specified just like the ready sign.

_TODO: IMAGE_

## Settings
Naturally, not all assumptions DungeonsXL makes about how a server admin would like their dungeon to work match their needs. A common problem is that by default, players get their status reset upon joining and restored upon leaving a dungeon; admins however would often like them to use the equipment players collected in the main world. The solution to this is the [game rule system](game-rules). Changing them requires access to the server files.

In most cases, game rules are to be set in the [floor configuration](floor-configuration). To do so, _manually_ create a file called _config.yml_ at _plugins/DungeonsXL/maps/SimpleDungeon/config.yml_. DungeonsXL will not create it automatically because it is fully optional.

Add the values you need - _and only the ones you need!_ - save the file and reload DungeonsXL through _/dxl reload_.

```
keepInventoryOnEnter: true
keepInventoryOnFinish: true
keepInventoryOnEscape: true
```

Alternatively if you feel that you need a non-default setting in most, if not all of your dungeons, you can avoid the need to set the values again and again in each single floor config by setting it to the default section of the [main configuration](main-configuration):

```
default:
  keepInventoryOnEnter: true
  keepInventoryOnFinish: true
  keepInventoryOnEscape: true
```

These values will be used in all dungeons unless their respective floor config overrides them. Take care of the indentation. Values that are not indented into the default section cannot be read.

## Download
https://cdn.discordapp.com/attachments/627633469014409256/698629381547098153/Test_1.15.2.zip