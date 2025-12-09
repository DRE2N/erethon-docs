---
title: Objectives
sidebar_position: 5
---

## block_interact
This objective is completed when a player interacts with a block at the specified location. Can be cancelled.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|
| `location` | The location of the block that the player must interact with. QLocation |  | true |

```yaml
block_interact: x=64; y=64; z=64; world=world
```

```yaml
block_interact:
  x: 64
  y: 64
  z: 64
  world: world
```

## break_block
Completed when a specific block is broken.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|
| `block` | The Hephaestus ID of the block that needs to be broken. |  | true |

```yaml
break_block: block=erethon:fancy_block
```

```yaml
break_block:
  block: 'erethon:fancy_block'
```

## breed
This objective is completed when the player breeds two entities.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|
| `entityType` | The entity type that has to be bred |  | true |

```yaml
breed: entity_type=pig
```

```yaml
breed:
  entity_type: cow
```

## chat
This objective is completed when the player sends a message.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|
| `exactMatch` | Whether the message has to be an exact match. | false | false |
| `message` | The message that the player has to send. |  | false |

```yaml
chat:
```

```yaml
chat:
  message: 'Hello!'
  exactMatch: true
```

## complete_event
Completed when a specific event is completed by the player.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|
| `event` | The ID of the event that needs to be completed to fulfill this objective. |  | true |
| `minParticipation` | The minimum participation percentage required to complete the objective. | 0 | false |

```yaml
complete_event: event=dragon_slaying
```

```yaml
complete_event:
  event: 'dragon_slaying'
  minParticipation: 50
```

## complete_quest
Completed when a specific quest is completed.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|
| `quest` | The ID of the quest that needs to be completed to complete this objective. |  | true |

```yaml
complete_quest: quest=example_quest
```

```yaml
complete_quest:
  quest: 'example_quest'
```

## consume_item
An item needs to be consumed to complete this objective. Hephaestus item keys are used. Can be cancelled.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|
| `item` | The key of the item that needs to be consumed. Same as in /give |  | true |

```yaml
consume_item: item=minecraft:apple
```

```yaml
consume_item:
  item: 'minecraft:apple' # Needs to be quoted due to the colon.
```

## death
This objective is completed when the player dies.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|

```yaml
death:
```

```yaml
death:
```

## drop_item
Drop an item to complete this objective. Can be cancelled.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|
| `item` | The key of the item that needs to be dropped. Same as in /give |  | true |
| `remove` | If true, the item will be removed when dropped | false | false |

```yaml
drop_item: item=erethon:fancy_sword
```

```yaml
drop_item:
  item: 'erethon:fancy_sword' # Needs to be quoted due to the colon.
  remove: true
```

## enter_region
This objective is completed when a player enters a specific region. QuestsXL regions are used, not Factions. `/q region`

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|
| `region` | The ID of the region that the player must enter. |  | true |

```yaml
enter_region: region=region_id
```

```yaml
enter_region:
  region: region_id
```

## impossible
This objective is impossible to complete. It can be used to block progression, for example to only manually progress a stage with the set_stage action

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|

```yaml
impossible:
```

```yaml
impossible:
```

## instant
The opposite of the impossible objective. This objective is instantly completed when the stage starts.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|

```yaml
instant:
```

```yaml
instant:
```

## job_craft_item


#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|
| `item` | The ID of the item to be crafted. |  | true |
| `minLevel` | The minimum level of the crafted item. |  | false |
| `recipe` | The ID of the recipe to be used. |  | false |

```yaml
job_craft_item: item=erethon:sword; recipe=erethon:sword_recipe; minLevel=2
```

```yaml
job_craft_item:
  item: erethon:sword
  recipe: erethon:sword_recipe
  minLevel: 2

```

## jump
This objective is completed when the player jumps.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|

```yaml
jump:
```

```yaml
jump:
```

## kill_player
This objective is completed by killing another player.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|

```yaml
kill_player:
```

```yaml
kill_player:
```

## leave_region
This objective is completed when a player leaves a specific region. QuestsXL regions are used. `/q region`

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|
| `region` | The ID of the region that the player must leave. |  | true |

```yaml
leave_region: region=region_id
```

```yaml
leave_region:
  region: 'region_id'
```

## location
This objective is completed when a player reaches a specific location. Can be cancelled, preventing the player from moving closer

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|
| `location` | The location that the player must reach. QLocation |  | true |
| `range` | How close the player has to get to the location | 1 | false |

```yaml
location: x=64; y=64; z=64; range=5
```

```yaml
location: # This is completed when the player moves five blocks up from their current location.
  x: ~0
  y: ~5
  z: ~0
```

## login
This objective is completed when the player logs in.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|

```yaml
login:
```

```yaml
login:
```

## pickup_item
This objective is completed when the player picks up a specific item. Can be cancelled, preventing the item from being picked up.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|
| `item` | The key of the item that needs to be picked up. Same as in /give |  | true |

```yaml
pickup_item: item=erethon:fancy_sword
```

```yaml
pickup_item:
  item: 'erethon:fancy_sword' # Needs to be quoted due to the colon.
  cancel: true
```

## place_item
Completed when a specific item is placed into a container (e.g. chest) and the chest is closed.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|
| `amount` | The amount of items that need to be placed | 1 | false |
| `consume` | If true, the items will be consumed (removed from the container | false | false |
| `item` | The key of the item that needs to be placed. Same as in /give |  | true |
| `location` | If set, the item must be placed in a container at this location |  | false |

```yaml
place_item: item=erethon:fancy_sword
```

```yaml
place_item:
  item: 'erethon:fancy_sword'
  amount: 4
  consume: true
```

## server_command
This objective is completed when a command is executed on the server, for example by a command block

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|
| `identifier` | The command that has to be executed |  | true |

```yaml
server_command: identifier=q trigger 33333
```

```yaml
server_command:
  identifier: q trigger 3333
```

## sign_edit
This objective is completed when the player start editing a sign. Can be cancelled.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|

```yaml
sign_edit:
```

```yaml
sign_edit:
```

## sleep
This objective is completed when the player sleeps. Can be cancelled, preventing the player from entering the bed.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|

```yaml
sleep:
```

```yaml
sleep:
```

## sneak
This objective is completed when the player starts sneaking.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|

```yaml
sneak:
```

```yaml
sneak:
```

## use_item
Completed when a item is used (right-clicked).

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|
| `amount` | The amount of items that need to be in the used stack. Objective progress will be increased by amount | 1 | false |
| `consume` | If true, the items will be consumed on use | false | false |
| `item` | The key of the item that needs to be used. Same as in /give |  | true |
| `location` | If set, the item must be used on the block at this location |  | false |

```yaml
use_item: item=erethon:fancy_sword
```

```yaml
place_item:
  item: 'erethon:bread'
  amount: 8
  consume: true
```

## wait
This objective is completed after a certain amount of time has passed, or after a player has been in a certain location for a certain amount of time.

#### Parameters:

| Parameter | Description | Default | Required |
|-----------|-------------|---------|----------|
| `duration` | The time in seconds that the objective holder has to wait. |  | true |
| `location` | The location that the objective holder must be in to complete the objective. |  | false |
| `range` | How close the objective holder has to get to the location | 1 | false |

```yaml
wait: duration=100
```

```yaml
wait:
  duration: 10
  x: 100
  y: 100
  z: 100
  range: 5
```

