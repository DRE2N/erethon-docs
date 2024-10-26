---
title: Game Rules
sidebar_position: 2
---

One of the most important things you need to understand in order to work effectively with DungeonsXL is the _game rule priority system_. _Game rules_ define the frame conditions of your DXL games.

![Where do I put my game rules?](https://erethon.de/resources/dxl/DXL-GameRules.png)

***

1. [Inheritance system](#inheritance-system)
2. [Rules](#rules)

***


## Inheritance system
Game rules follow a principle of subsidiarity and can be fetched from multiple sources. Thus, dungeon and floor configurations are by design not created automatically. In case of contradicting game rules, only one rule will finally affect the game. Which one is determinated by the inheritance system (first = overriding; last = subsidiary):

### 1. [Dungeon config](dungeon-configuration) override values

### 2. [Floor config](floor-configuration) values
Note that not all floor configuration values are game rules, like for example the list of invited players.

### 3. Dungeon config default values

### 4. [Main config](main-configuration) default values

### 5. Internal default values
If no values are set, DXL will use its internal default values.

## Players and permissions
| Name | Explanation | Possible values | Default value | Annotation |
|---|---|---|---|---|
| fly | If players who may normally fly may do so in the dungeon. | Boolean | false |   |
| timeUntilKickOfflinePlayer | The time in seconds until a player who left the game is kicked from the dungeon. | Integer | 0 (= instant) | -1 = never |
| gameCommandWhitelist | Commands that are not to be blocked. | List of commands | (empty) | The dxl.bypass permission still allows a player to perform commands. All /dxl commands are allowed by default. |
| gamePermissions | Permission nodes players have only in the dungeon. | List of permission nodes | empty list |   |
| groupTagEnabled | If group name tags are used. | Boolean | false | Requires HolographicDisplays |
| foodLevel | If food levels (hunger) are used. | Boolean | true |   |

### Messages
| Name | Explanation | Possible values | Default value | Annotation |
|---|---|---|---|---|
| messages | Messages that can be sent in the dungeon. | Map of ID Integers and message Strings | Empty map | This can be set in edit mode with /dxl msg |
| title | The title that shows when the game begins. | Title data | null (Strings) | If the game rule isn't used (=null), the name of the dungeon will be sent. |

Title data:
These values set the sent messages:
* title.title - String
* title.subtitle - String
* title.actionBar - String

These values set for how many ticks the title is showed:
* title.fadeIn - Integer (20)
* title.show - Integer (60)
* title.fadeOut - Integer (20)

### Requirements
| Name | Explanation | Possible values | Default value | Annotation |
|---|---|---|---|---|
| requirements | The requirements to start this dungeon. | List of requirements | Empty list | How exactly a requirement is represented in YAML is determined by its type or even by a custom reader. See [here](requirements). |
| timeToNextLoot | The time in hours until a player can get loot from this dungeon again. | Integer | 0 | This does not prevent the player from playing the game. He may still join the game and help others getting rewards, but won't get any himself. |

### Rewards
DungeonsXL currently does not use the rewards game rule internally. However, addons may use the API in order to add rewards through it.

### PvP
| Name | Explanation | Possible values | Default value | Annotation |
|---|---|---|---|---|
| playerVersusPlayer | If players in general may hurt each other. | Boolean | false |   |
| friendlyFire | If players in the same group may hurt each other. | Boolean | false |   |
| initialLives | Initial per player lives. | Integer | -1 | Do not use this together with group lives. -1 = unlimited |
| initialGroupLives | Initial per group lives. | Integer | -1 | Do not use this together with player lives. -1 = unlimited |
| deathScreen | If disabled, players who lose all of their health are healed, teleported to their respawn point and their inventory and experience is dropped as if they actually died. This saves some performance and time. | Boolean | false |

### World and entity protection etc.
| Name | Explanation | Possible values | Default value | Annotation |
|---|---|---|---|---|
| breakBlocks | If or which blocks may be broken (with which tools). | "true", "false", "placed", or map of materials to break and tools to use to do so | false | Keep the value list empty to allow any tool. "placed" means blocks that have been placed by a player may be broken. |
| interactionBlacklist | Blocks that players may not interact with. | Map of materials to interact with and tools to use to do so | null | Keep the value list empty to allow any tool. |
| damageProtectedEntities | Entities that may not be damaged. | Set of entities | [ARMOR_STAND, ITEM_FRAME, PAINTING] |   |
| interactionProtectedEntities | Entities that players may not interact with. | Set of entities | [ARMOR_STAND, ITEM_FRAME] |   |
| placeBlocks | If or which blocks may be placed. | Boolean or list of materials | false |   |
| fireTick | = Vanilla doFireTick | Boolean | false |   |
| blockFadeDisabled | Blocks that don't fade away. | Set of blocks | null | Add e.g. "ICE" to prevent ice from melting. |
| mobExpDrops | If or which mobs drop experience points. | Boolean or list of entities | false |   |
| mobItemDrops | If or which mobs drop items. | Boolean or list of entities | false |   |

### Inventory
| Name | Explanation | Possible values | Default value | Annotation |
|---|---|---|---|---|
| keepInventoryOnEnter | If the inventory shall be kept when the player enters the dungeon. | Boolean | false |   |
| keepInventoryOnDeath | If the inventory shall be kept when the player dies. | Boolean | true |   |
| keepInventoryOnFinish | If the inventory shall be kept when the player finishs the dungeon. | Boolean | false |   |
| keepInventoryOnEscape | If the inventory shall be kept when the player escapes through a sign, command, losing the last life or anything else without finishing the dungeon. | Boolean | false |   |
| secureObjects | Items that are given to other group members if the player who has them leaves. | List of materials | Empty list |   |
| resetClassInventoryOnRespawn | If the class inventory shall be reset when the player dies. | Boolean | false |   |

### Environment
| Name | Explanation | Possible values | Default value | Annotation |
|---|---|---|---|---|
| rain | Enforces permanent downfall. | Boolean | null | null = Vanilla weather |
| thunder | Enforces permanent thunder. | Boolean | null | null = Vanilla weather |
| time | The world time in ticks. | Integer | null | null = Vanilla time |

### Game type settings
| Name | Explanation | Possible values | Default value | Annotation |
|---|---|---|---|---|
| gameMode | Vanilla game mode. | "ADVENTURE", "CREATIVE", "SPECTATOR" or "SURVIVAL" | SURVIVAL |   |
| difficulty | Vanilla difficulty. | "PEACEFUL", "EASY", "NORMAL" or "HARD" | NORMAL |   |
| gameGoal | Sets the goal of the game. | [Game goal](game-goal) | {type: "END", timeToFinish: -1} |   |
| timeToNextWave | The time until a new mob waves begins when enough mobs are killed. | Integer | 10 |   |

### Respawn options
| Name | Explanation | Possible values | Default value | Annotation |
|---|---|---|---|---|
| escapeLocation | Where the player respawns if he leaves the dungeon without finishing the game. | Location* | null | null = where the player entered the instance. |
| finishLocation | Where the player respawns after he finished the dungeon. | Location* | null | null = where the player entered the instance. |

*Format is "world,x,y,z(,yaw,pitch)", e.g. "spawnworld,49.5,65.0,598.5" or "spawnworld,49.5,65.0,598.5,29.0,-84.4"

* Boolean: "true" or "false"
* Integer: Numeric value; no decimals
* Double: Numeric value, decimals allowed
* String: Text
* List: A list of values
* Map: A list of key / value pairs