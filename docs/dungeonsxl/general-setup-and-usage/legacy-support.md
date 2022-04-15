---
title: Legacy Support
sidebar_position: 10
---

## Outdated Minecraft versions
If you use DungeonsXL with an older version than the latest, note that these features might not work:

* These things are not saved or modified by DungeonsXL in 1.8.x:
    * Health
    * Collidability
    * Invulnerability

Players who obtain or lose these states in a dungeon / the main world will not get the old state back upon leaving / entering the dungeon.

* Other containers can only be reward or dungeon chests in Minecraft 1.12.1 and higher.
* The fireTick gamerule works only in Minecraft 1.13 and higher.
* [Dungeon items](dungeon-items) require Minecraft 1.16.5 or higher

DungeonsXL is programmed with older versions in mind, but only tested with the latest version of Spigot. If you encounter any issues running an older version, please report them.

## Updating
As DungeonsXL is still in Beta, it is possible that some aspects of it change during the ongoing development. This is a list of features that have been removed or replaced:

| Type | Removed / deprecated feature | Replacement | Still working |
|---|---|---|---|
| Game rule | build | Several new game rules including breakBlocks and placeBlocks | No |
| Game rule | keepInventory | keepInventoryOnEnter, -OnEscape, -OnFinish, -OnDeath | Yes |
| Dungeon sign | Chest | RewardChest | Yes |
| Dungeon sign | MythicMobs | Merged with mob sign (with "MM" as a built-in external mob provider tag) | No |
| Dungeon sign | ExternalMob | Merged with mob sign | Yes |
| Dungeon sign | Floor | Merged with end sign | Yes |