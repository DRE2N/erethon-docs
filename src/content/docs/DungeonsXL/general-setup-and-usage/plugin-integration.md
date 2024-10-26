---
title: Plugin Integration
sidebar_position: 7
---

***

1. [Which plugins are not going to work with DungeonsXL?](#which-plugins-are-not-going-to-work-with-dungeonsxl)
2. [Integrations](#integrations)
3. [Incompatibilites](#incompatibilities)

***

## Which plugins are not going to work with DungeonsXL?
To instantiate the same world multiple times, DungeonsXL copies the "resource" worlds from _DungeonsXL/maps/_ to the server's world container. The drawback of this system is that plugins that use the world names to make their features persistent, such as custom mob, world border or block protection plugins, are not going to work as intended in instance worlds.

## Integrations
However, it is in many cases possible to create workarounds. The API is designed to be powerful enough to allow developers to integrate with DXL to get their plugins working; DungeonsXL includes support for a good bit of the most popular plugins natively and good pull requests are in general gladly accepted.

List of natively supported plugins:
* [Citizens](signs#externalmob): Highly advanced custom mob plugin.
* [MythicMobs](signs#externalmob): Recommended plugin for NPC enemies.
* [InsaneMobs](signs#externalmob): Alternative custom mob plugin.
* [CustomMobs](signs#externalmob): Alternative custom mob plugin.
* [Any other custom mob plugin](signs#externalmob) that has a spawn command with mob type, world and position parameters can be added to the [main config](main-configuration).
* [ItemsXL](https://www.spigotmc.org/resources/itemsxl.14472/): Custom item and mob manager. All custom item IDs from IXL can be used anywhere where item IDs can be entered (work in progress!)
* [Any permission plugin](main-configuration) that supports Vault. Required for tutorial groups and instance permissions.
* [Any economy plugin](main-configuration) that supports Vault. Required for - well, for all economy features.

### Custom mob plugins
The custom mob system of DungeonsXL is command based and thus works with any external plugin that provides a spawn command out of the box. Simply add the command to this main config section:

```
# You can register a provider tag and the spawn command to use here.
# The custom external mob providers should work with the mob sign and the M trigger.
# The mobs spawned by a custom external mob provider should be recognized by the kill counter (/dxl game).
externalMobProviders:
    # providerTag: spawn command
    # "%%"indicate placeholders
    XY: custommobplugin spawnmob %mob% %world% %x% %y% %z%
    # Some mob plugins for some reason forbid decimals. 
    # In such a case, use the block placeholders instead.
    YZ: othermobplugin summon %mob% %world% %block_x% %block_y% %block_z%
```

### [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
As of v0.17.6, DungeonsXL supports the following placeholders:

%dxl_**placeholder**%

* group_members: A list of the player's group's members
* group_name
* group_name_raw: The player's group's name but without color formattings
* group_player_count
* game_player_count
* floor_player_count
* dungeon_name
* global_dungeon_count
* global_floor_count
* global_instance_count

## Incompatibilities
These plugins are not compatible with DungeonsXL:

* Corpses
* PerWorldInventory
* Multiverse-Inventories
* [Plugins that allow to edit signs without breaking them](../issues/475)

In many cases, the issues can be resolved by limiting these plugins to the worlds where you need them with [PerWorldPlugins](http://dev.bukkit.org/bukkit-plugins/perworldplugins/).