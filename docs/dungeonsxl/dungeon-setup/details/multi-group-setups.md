---
title: Multi Group Setups
sidebar_position: 6
---

This article explains how a dungeon with multiple groups can be set up and what that may be good for.

DungeonsXL can be used for a variety of different kinds of games in instances, and some of them are competitive. Groups make players work together against other groups. Players in one group share their rewards, lives (if group lives instead of player lives are used) and score. See [game rules](game-rules) to see how to configure the specific settings of the dungeon, including PvP and friendly fire.

## Step by step

### Main world

This tutorial begins in the server's main world, where players create their groups and set up the game to play to include these groups. Our example will realize a simple scenario with two groups in one game that may be played once at a time.

A lobby may look like this:

![](https://erethon.de/resources/dxl/mgs/mgs01.png)

The group signs allow for the creation of one group respectively:

![](https://erethon.de/resources/dxl/mgs/mgs02.png) ![](https://erethon.de/resources/dxl/mgs/mgs03.png)

For convenience, we'll add a leave sign sothat players may leave their group without the need to know the /dxl leave command:

![](https://erethon.de/resources/dxl/mgs/mgs04.png)

The groups are grouped together into one single game through the game sign. If no game sign is used, each group starts a separate game on their own.

![](https://erethon.de/resources/dxl/mgs/mgs05.png)

After the creation of a portal (/dxl portal), the result should look like this:

![](https://erethon.de/resources/dxl/mgs/mgs06.png)

### Dungeon
The dungeon itself is set up as usual - with one lobby and one ready sign. Optionally, one start sign per group can be created to make them start at different locations. Which group starts where is determined by the number in the second line, counting from zero, which leaving the number out defaults to:

![](https://erethon.de/resources/dxl/mgs/mgs07.png) ![](https://erethon.de/resources/dxl/mgs/mgs08.png) ![](https://erethon.de/resources/dxl/mgs/mgs09.png)

By the way: The colors that represent the groups can be changed in the [main configuration](main-configuration) under "groupColorPriority" (by default, 0=dark blue, 1=light red, 2=yellow, 3=light green etc.)