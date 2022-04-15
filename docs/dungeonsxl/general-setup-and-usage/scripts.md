---
title: Scripts
sidebar_position: 8
---

A *script* is a [YAML](https://en.wikipedia.org/wiki/YAML) file located at _plugins/DungeonsXL/scripts/[type]/[identifier].yml_.

***

1. [Classes](#classes)
2. [Mobs](#mobs)
3. [Signs](#signs)
4. [Loot tables](#loot-tables)
5. [Commands](#commands)

***

## Classes
If players should not play the dungeon with their own items but with a set inventory, class scripts are the way to go. Thanks to the [CaliburnAPI](https://github.com/DRE2N/CaliburnAPI) / [ItemsXL](https://github.com/DRE2N/ItemsXL) integration, DungeonsXL supports three different ways to store items in configuration files.

In a dungeon, a class can be selected with a [classes sign](signs#classes).
```
items:
# This is the simple way to store items.
# Valid input:
# The first value may be any ID (be it a Vanilla ID or an ID of an ItemsXL item),
# the second value is the amount
# and the third, optional value is the durability value.
  - 261,1
  - 262,64
  - 268,1
  - 298,1
  - 299,1
  - 300,1
  - 301,1
  - 364,3
  - 363,10
  - 261,1,16
# The Caliburn API also supports the usual Bukkit ItemStack deserialization format.
# If you don't know how to use this and have ItemsXL installed,
# put the item stack into your main hand and enter the "/ixl serialize" command.
# You will find a valid, automatically generated YAML representation of your item
# in the ItemsXL/serialized.yml file.
  - ==: org.bukkit.inventory.ItemStack
    type: IRON_SWORD
    damage: 55
    amount: 1

# Whether the class should have a dog as a pet.
dog: true
```

## Mobs
Besides support for multiple external custom mob plugins, _DungeonsXL_ also has its own custom mob system. Just create a script and the identifier can be used at a mob sign instead of the vanilla mob name.

As of build #1026, custom mobs are not stored in DungeonsXL's scripts folder anymore and use [a new format](https://github.com/DRE2N/CaliburnAPI/wiki/custom-mobs).

## Signs
Sometimes, it is hard to put all the triggers at one tiny line of a sign. And sometimes, there might not be enough space for multiple signs in a tiny room. The solution for this problem is called [script sign](signs#script). A script sign does everything that its script tells it to do.

```
0:
  - "[Mob]"
  - "Zombie"
  - "4,4"
  - "D 4"
1:
  - "[Mob]"
  - "Spider"
  - "0,1"
  - "D 4"
```

If you include signs that replace the block the sign like [block] signs, make sure to put this sign last sothat none of the other signs overrides the block change.

## Loot tables
Loot tables can be used to add chance values for items in [reward chests](signs#chest), mob drops, equipment and more.

As of build #1026, loot tables are not stored in DungeonsXL's scripts folder anymore and use [a new format](https://github.com/DRE2N/CaliburnAPI/wiki/loot-tables).

## Commands
### WARNING: Do not use this feature to spawn mobs. Use mob signs and the custom mob provider registry in the main config instead.

[Command signs](signs#command) use command scripts to link multiple commands together. The name of the file is the id used on the sign.
```
commands:
  - version
  - help
  - deop %player%
```