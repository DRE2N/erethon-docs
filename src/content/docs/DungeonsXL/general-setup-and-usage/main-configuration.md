---
title: Main Configuration
sidebar_position: 3
---

```
# Main configuration of DungeonsXL (config.yml in DungeonsXL folder)

# Don't edit this one.
configVersion: 15

# Languagefile that can be found in DungeonsXL/languages folder
language: english

# If the economy integration shall get enabled
enableEconomy: true

chatEnabled: true
chatFormat:
    edit: "&2[Edit] &r%player_name%: "
    game: "&2[Game] %group_color%%player_name%: &r"
    group: "&2%group_color%[%group_name%] %player_name%: &r"
    spy: "&2[Chat Spy] %player_name%: &r"

# Options for the tutorial
tutorial:
    # If this function should be used
    activated: true

    # Name of the Dungeon that serves as tutorial
    dungeon: tutorial

    # The permission group the player gets when he enters the tutorial
    startgroup: default

    # The permission group the player receives after the tutorial
    endgroup: player

# DungeonsXL allows you to create basic integrations with any custom mob plugin.
# You can register a provider tag and the spawn command to use here.
# The custom external mob providers should work with the mob sign and the M trigger.
# The mobs spawned by a custom external mob provider should be recognized by the kill counter (/dxl game).
externalMobProviders:
    # The value to the left of the ":" is the shortcut to put on the sign,
    # like e.g. "MM" for MythicMobs, which is built in.
    # The value to the right of the ":" is the command the plugin uses to spawn mobs.
    # "%%"indicate placeholders.
    XY: custommobplugin spawnmob %mob% %world% %x% %y% %z%
    # Some mob plugins for some reason forbid decimals. 
    # In such a case, use the block coordinate placeholders instead.
    YZ: otherplugincommand summon %mob% %world% %block_x% %block_y% %block_z%

# Resource pack registry for resource pack signs.
resourcePacks:
    PackID: "https://example.com/Pack.zip"

# The maximum amount of games that may run at once.
# Useful to prevent overloading.
maxInstances: 10

# Note that this is not at all guaranteed to work, completely unsupported and prone to errors.
# Enables a few unsafe performance tweaks, such as:
# Asynchronous world loading 
# Asynchronous file copying
# Copying a pre generated flat world instead of generating an actual new one
tweaksEnabled: false

# The secure mode offers better protection to seperate edit / game worlds and your main worlds.
# Crashs or even minor setup clashs maybe lead to possibilities to abuse the Creative mode in edit worlds,
# to get dungeon items in the main world or other ways to cheat. The secure mode enables some additional
# checks to prevent this. It might influence the performance a bit.
# It can be bypassed with the dxl.insecure node.
secureMode:
    enabled: true

    # The check interval in seconds. The secure mode task checks if a player is in a game or edit world
    # even though he is not in the correct mode and teleports him to the spawn if an error is found.
    checkInterval: 5.0

    # If players may open container inventories in edit mode. The Creative inventory is not influenced.
    openInventories: false

    # If players may drop items in edit mode.
    dropItems: false

    # A list of commands that may be used while in edit mode. /dxl commands can always be used.
    editCommandWhitelist:
      - help
      - version

# If backups of the map should be saved to DungeonsXL/backups/.
# Valid values are:
# "ON_DISABLE": Creates backups when the server shuts down.
# "ON_SAVE": Creates backups when a player uses /dxl save.
# "ON_DISABLE_AND_SAVE": Both.
# "NEVER": Disables the backup system.
backupMode: ON_DISABLE_AND_SAVE

# A list of permissions players get while they edit a map.
# The permissions get removed as soon as the player leaves the edit mode.
# Requires Vault and a permissions plugin like PermissionsEx.
editPermissions:
  - worldedit.clipboard.*
  - worldedit.history.*

# These colors will be used to identify groups for example in the announcement GUI.
# Make sure to add enough values for your maximum group count!
groupColorPriority:
- DARK_BLUE
- LIGHT_RED
- YELLOW
- LIGHT_GREEN
- PURPLE
- ORANGE
- BLACK
- LIGHT_BLUE
- DARK_GREEN
- DARK_RED
- LIGHT_GRAY
- CYAN
- MAGENTA
- DARK_GRAY
- PINK

# If death messages should be sent globally
globalDeathMessagesDisabled: false

# Default configuration values for floors
# If a value in the config.yml of an individual floor or dungeon is missing, the value of this section is used.
# Take care of indents! You'll have to add two spaces to comply with the YAML syntax.
default:
```