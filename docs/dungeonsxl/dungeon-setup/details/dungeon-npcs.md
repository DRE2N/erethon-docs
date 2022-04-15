---
title: Dungeon NPCs
sidebar_position: 1
---

This article explains how NPCs can be spawned in dungeons.


***
1. [Goals](#goals)
2. [Providers](#providers)
3. [Mob signs](#mob-signs)
4. [Citizens](#citizens)
5. [Triggers](#triggers)
6. [Waves](#waves)
***

## Goals
The mob system of DungeonsXL does not only aim to make any kind of mob spawnable in a dungeon game, but also to track them in order to integrate them into the features of the plugin. These include triggers that are fired when a mob dies, kill counters and waves of hostile mobs.

## Providers
There are hundreds of Bukkit plugins that allow for some kind of customization of NPCs. Most of them have advantages that others do not, and it is neither the goal of DungeonsXL to make a decision for the user nor to throw its hat in the ring.

![](https://airsource.co.uk/blog//images/standards-xkcd.png)

DXL does have an internal system that allows to use Vanilla mobs and mobs registered in Caliburn / ItemsXL natively, but most users will rightfully want to use the plugin they are used to using or that suits their use-case best.

This is accounted for by the external mob plugin system. Instead of hooking into every single mob plugin out there, it covers almost all mob plugins abstractly by using their commands to spawn mobs just like a user or a command block would. DungeonsXL then searchs for whatever has been spawned at the given position to do the tracking.

Mob plugins can be registered in the main configuration file (plugins/DungeonsXL/config.yml).

```
externalMobProviders: {}
```

[The configuration value is a map of String keys that identify the mob provider in-game and the command the plugin uses to spawn mobs through command blocks.](data-structure-guide) The following example shows how MythicMobs would be registered in the externalMobProviders map, even though this plugin is registered by default and thus **does not need to be added**:

First of all, look for the **console / command block** command to spawn mobs that includes parameters for the world and coordinates. Commands that are supposed to be used by players don't work.

> /mm mobs spawn -s [mob_name]:&lt;level&gt; &lt;amount&gt; &lt;world,x,y,z&gt; * Silently spawns the mob in- no console text.
> - [MythicMobs manual](https://www.mythicmobs.net/manual/doku.php/commands)

Paste the command in the map and assign an identifier (in this case "MM"):

```
externalMobProviders:
  MM: "mm mobs spawn -s [mob_name]:<level> <amount> <world,x,y,z>"
```

Make sure to replace the placeholders with the ones DungeonsXL knows...

```
externalMobProviders:
  MM: "mm mobs spawn -s %mob%:<level> <amount> %world%,%x%,%y%,%z%"
```

...and fill in the parameters that DXL cannot use:

```
externalMobProviders:
  MM: "mm mobs spawn -s %mob%:1 1 %world%,%x%,%y%,%z%"
```

Note that you can register any plugin as often as you want, for example, you can register the command spawning MythicMobs NPCs at level 1 under "MM1", level 2 under "MM2" and so on. The amount should always be 1.

If your plugin for whatever reason does not like decimals in the coordinates, use %block_x%, "%block_y%" and "%block_z%" instead.

## Mob signs
![Mob sign](http://feuerstern.bplaced.net/ressourcen/DXLSigns/Mob.png)

Mob signs are the one and only supported way to get NPCs into a dungeon. They are initialized when the game starts (= when the ready sign is triggered).

If a mob is spawned without a mob sign, it is not going to be recognized by mob triggers, kill counters etc. It is however fine to spawn some background NPCs directly in edit mode, like fish, farm animals or villagers.

The second line is the Vanilla mob ID or whatever the external plugin accepts in its command to spawn the mob. The third line determines the delay in seconds between each spawned mob and the amount of mobs to spawn. If an external mob plugin is used, add its identifier as a third argument in the third line. Our example plugin MythicMobs uses "MM":

> 0,1,MM

Mob signs spawn their mobs every time anew when they are triggered. That means you'll most likely want to use the distance trigger (D) that fires _once_ when a player gets close to it instead of the presence trigger (P) that fires _every time_ a player gets close to it.

Built-in custom mob plugin IDs:

<table>
  <tr>
    <th>Plugin</th>
    <th>External mob provider tag</th>
  </tr>
  <tr>
    <td>Citizens</td>
    <td>CI</td>
  </tr>
  <tr>
    <td>CustomMobs</td>
    <td>CM</td>
  </tr>
  <tr>
    <td>InsaneMobs</td>
    <td>IM</td>
  </tr>
  <tr>
    <td>MythicMobs</td>
    <td>MM</td>
  </tr>
</table>

## Citizens

_Note that Citizens uses the plugin ID "CI" and the numeric IDs of its mobs (see /npc list)._

The Citizens plugin is in many regards an exception. Unlike other plugins, it does not focus so much on templates for hostile mobs that may be spawned and killed infinitely, but on unique NPCs with one unique instance. This leads to a difficulty: Changes that are done to the unique NPC instance by players in the dungeon cannot easily be reverted, and the NPC can hardly be shared between multiple instances of the same dungeon that may exist at the same time. To fix this, DXL copies Citizens NPCs to a separate registry, which means they don't have an ID and may not be recognized by addons that do not save their data through the Citizens trait API. If you have issues with addons, consider using the **unsupported** `useNativeCitizensRegistry: true` game rule that copies the NPCs into Citizens' internal registry instead. Note that this increases your Citizens IDs and does not guarantee either that other plugins can handle copies correctly.

## Triggers

## Waves
(Improved) mob triggers and waves are features that are scheduled for DungeonsXL Beta v0.19. Discussions and thoughts may be shared [here](../issues/383).
