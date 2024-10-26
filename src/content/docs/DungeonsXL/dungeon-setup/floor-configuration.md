---
title: Placeholders
sidebar_position: 4
---

Note that this is an **EXAMPLE FILE**. You can't just grab it and assume that it works as is.

This file is to be named _config.yml_ and should be placed in the _DungeonsXL/maps/%mapName%_ directory.

Some tips:
* For clearness, better create a new file and **add just the values you need.** Most of them behave like you expect them to by default (see: [game-rules#rules](game-rules#rules)) and can be left out.
* In case you're confused because you do not find a config.yml file in your map folder: This is intended because a map does not necessarily need a config file. The values can also be fetched from the "dungeon configuration":dungeon-configuration, which is more convenient if a dungeon has multiple floors with the same rules, or from the "main configuration":main-configuration, which might be more convenient if the game is very simple or for testing / building purposes.
* (Ignore this if you do not work with multi floor dungeons) The value priority of floor configuration game rules is relatively high. default values from the dungeon script will be overriden, but override values from the dungeon script will override the floor configuration values.
* Use http://yamllint.com to ensure your config is syntactically correct. Take care of indents.

## Map specific settings
These values are map specific settings. They don't work as game rules, can't be used in [dungeon configurations](dungeon-configuration) or the main config and thus aren't inherited.

```
#########################
# MAP SPECIFIC SETTINGS #
#########################

# Defines the map environment, as this is not saved in the map itself.
# May be set to either THE_END, NETHER or NORMAL.
# If this setting is left out (or if no floor config is used at all), NORMAL will be used.
# NORMAL stores region files in {map}/regions,
# NETHER in {map}/DIM-1/regions and
# THE_END in {map}/DIM1/regions.
# CraftBukkit usually splits dimensions into separate world folders,
# but keeps this folder structure.
worldEnvironment: THE_END

# Players who can edit the dungeon (/dxl invite)
# You my add both UUIDs and names.
invitedPlayers:
  - sataniel
```
## Game rules
```
##############
# GAME RULES #
##############

# Time until a player is kicked from this dungeon after going offline (in seconds)
# -1 = never / 0 = immediately
timeUntilKickOfflinePlayer: 10000

# Time until a player can get loot for another time
timeToNextLoot: 12

# Time until a new mob waves begins when enough mobs are killed.
timeToNextWave: 10

# See https://github.com/DRE2N/DungeonsXL/wiki/game-goal for more information.
gameGoal:
  type: END
  # Dungeons can be played with a timer.
  # If the group has no time left, the players get kicked.
  timeToFinish: 240

# The game mode, SURVIVAL if nothing
gameMode: ADVENTURE

# If players may fly.
fly: false

# PvP
playerVersusPlayer: true
# Friendly fire refers just to members of the same group
friendlyFire: false

# These commands can be used by all players if they are in the dungeon.
# DXL commands like /dxl leave are included by default.
gameCommandWhitelist:
  - version
  - f list
  - f show
  - ch global

# Max time in hours after the last finish of one of the Dungeons above
timeLastPlayed: 336

# Where the player respawns when he leaves the dungeon without finishing the game.
escapeLocation: "spawnworld,49.5,65.0,598.5,29.0,-84.4"
# Where the player respawns when he finishs the game.
finishLocation: "spawnworld,49.5,65.0,598.5"

# A list of requirements
# Note that requirements will be ignored if the player has the
# dxl.ignorerequirements permission node.
requirements:
  # Dungeon can only be played on a friday and from sunday to tuesday respectively at 15-16 o'clock.
  # Note that the week in the Java Calendar API begins with sunday, so SATURDAY-SUNDAY does not work.
  timeframe:
    - "FRIDAY"
    - "SUNDAY-TUESDAY"
    - "15-16"
  # Time in hours until a player can play this dungeon again
  # This prevents players from playing the dungeon again if they started the dungeon,
  # no matter if they finished, left it or got kicked.
  timeSinceStart: 0.05 # 3 minutes
  # This only prevents players from playing the dungeon again if they finished it correctly.
  # If they leave it or get kicked, players can always retry a dungeon.
  timeSinceFinish: 24.0
  # Players must have finished all of the following dungeons at least once:
  finishedDungeons:
    - Test1       # Test1
    - Test2/Test3 # AND EITHER Test2 and Test3
    - 7:Test4     # and Test4 within the last 7 hours
    - 0.05:Test5  # and Test5 within the last 3 minutes
  feeMoney: 7.5
  feeLevel: 2
  # If the group has too many or not enough members, the players will not be allowed to use the ready sign.
  groupSize:
    minimum: 1
    maximum: 2
  # Players must have these permission nodes to enter the dungeon:
  permission:
    - my.custom.node
    - yet.another.node
  # Items that may not be taken into the dungeon
  forbiddenItems:
    - IRON_SWORD
    - MY_CUSTOM_ITEM
  # Items the player must have to play the dungeon
  keyItems:
    - GOLD_INGOT
    - MY_CUSTOM_ITEM

# Shall players play the dungeon with their own items or do you want to use classes?
keepInventoryOnEnter: false
# Shall players lose their items when they die (do not mix up this with "onEscape"!)?
keepInventoryOnDeath: false
# Shall players keep their inventory when they finish the dungeon?
keepInventoryOnFinish: false
# Shall players keep their inventory when they leave the dungeon without succeeding?
keepInventoryOnEscape: false

# If players can destroy blocks in this world.
# (The following rule can be either a boolean, "placed" or a whitelist of blocks to break.)
breakBlocks: false
# OR: Players may break blocks they placed themselves, but no other blocks.
breakBlocks: placed
# OR: A whitelist of breakable blocks.
breakBlocks:
  # A material value and a list of all tools that can destroy this block
  SPONGE: ["IRON_PICKAXE", "STICK"]
  # Dirt blocks can be destroyed with any tool
  DIRT: []

# A list of all entity types that shall be protected from damage.
# If this is left out AND if breakBlocks is false, armor stands, paintings
# and item frames will be protected by default.
# If this is left out and if breakBlocks is true, nothing will be protected by default.
damageProtectedEntities:
  - SLIME
  - PAINTING
# A list of all entity types 
# If this is left out AND if breakBlocks is false, armor stands
# and item frames will be protected by default.
# If this is left out and if breakBlocks is true, nothing will be protected by default.
interactionProtectedEntities:
  - ARMOR_STAND

# If blocks may be placed.
# (The following rule can be either a boolean or a whitelist of blocks to place.)
placeBlocks: true
# OR: A whitelist of placeable blocks.
placeBlocks:
  - SPONGE

# = Vanilla doFireTick
fireTick: false

# Blocks that don't fade away.
blockFadeDisabled:
  - ICE
  - OAK_LEAVES

# Enables EXP drops of all mobs.
mobExpDrops: true
# Or alternatively, a whitelist of mob types that may drop EXP can be used:
mobExpDrops:
  - COW
  - SHEEP
# The item drop rule works the same way:
mobItemDrops: true
# or:
mobItemDrops:
  - COW
  - SHEEP

# Amount of lives a player initially has when he enters a dungeon
initialLives: 3
# Alternatively, you can use group lives.
initialGroupLives: 5

# Messages also to be created with /dxl msg
messages:
  '1': Welcome to this dungeon!
  '2': Another message

# Items you cannot drop or destroy
secureObjects:
  - 69

# A list of permissions players get while they play the game.
# The permissions get removed as soon as the player leaves the game.
# Requires Vault and a permissions plugin like PermissionsEx.
gamePermissions:
  - dxl.reload
  - another.node

# Use this to replace the default ready / new floor message.
# This is fully compatible with the override system.
# If titles are deactivated in the main config, this is not going to work.
title:
  title: "&4Title"
  subtitle: "&6Subtitle"
  actionBar: "&aA C T I O N B A R"
  chat: "&bCentered chat message"
  # How long shall the title be visible (seconds)?
  # The title works without these three options.
  fadeIn: 1.0
  show: 3.0
  fadeOut: 1.0

# If it should rain permanently in the dungeon
# true = permanent rain
# false = permanent sun
# leaving this out = random weather like in vanilla Minecraft
rain: true

# Same principle as above but for thunderstorms
thunder: true

# The time ticks (to be used like in the vanilla /time command)
time: 20000

```
