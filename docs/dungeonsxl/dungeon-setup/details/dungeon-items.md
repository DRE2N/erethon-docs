---
title: Dungeon Items
sidebar_position: 2
---

**Dungeon items** are items that cannot be taken out of a dungeon, even if keepInventoryOnFinish or -OnEscape are set to true. "Normal" items that respect the keepInventory [game rules](game-rules) are referred to as "global items" in this context. Dungeon items look like any other item as they are defined by internal NBT data.

An item can be checked and modified with /dxl dungeonItem or /dxl di by all players (by default only operators) who have the dxl.dungeonitem permission node.

* /dxl dungeonItem - Shows if the item in your hand is a dungeon or global item
* /dxl dungeonItem true - Makes the item in your hand a dungeon item
* /dxl dungeonItem false - Makes the item in your hand a global item
