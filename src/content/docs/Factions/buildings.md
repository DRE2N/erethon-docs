---
title: Building Config
sidebar_position: 2
---

Buildings are configured using YAML files stored in the `plugins/Factions/buildings/` directory. Each building is a separate `.yml` file where the filename (without extension) becomes the building's ID.

```
plugins/Factions/buildings/
├── hamlet/
│   ├── peasant_house.yml
│   ├── farmland.yml
│   └── village_center.yml
├── flag.yml
└── Test.yml
```
---

## Basic Building Properties

### Required Properties

#### `size` (integer)
The radius of the building in blocks. This determines the cuboid area that the building occupies.

```yaml
size: 8
```

The building will occupy a space from:
- Corner 1: `(center.x + size, center.y + size*2, center.z + size)`
- Corner 2: `(center.x - size, center.y - size/2, center.z - size)`

### Optional Properties

#### `name` (string)
The display name of the building (used in messages and UI).

```yaml
name: "Village Center"
```

#### `description` (list of strings)
A list of description lines shown to players.

```yaml
description:
  - "The heart of your settlement"
  - "Requires multiple peasant houses"
```

#### `icon` (Material)
The Material used to represent this building in UI elements.

```yaml
icon: CHEST
```

#### `coreRequired` (boolean, default: false)
Whether this building requires a faction core region.

```yaml
coreRequired: true
```

#### `warBuilding` (boolean, default: false)
Whether this building is classified as a war building.

```yaml
warBuilding: true
```

#### `unique` (boolean, default: false)
Whether only one instance of this building can exist per faction.

```yaml
unique: true
```

#### `allowOverlap` (boolean, default: false)
Whether this building can overlap with other buildings.

```yaml
allowOverlap: true
```

#### `requiredLevel` (FactionLevel, default: HAMLET)
The minimum faction level required to construct this building.

```yaml
requiredLevel: HAMLET
```

---

## Block Requirements

### Required Blocks

Buildings can require specific blocks or block tags to be present within their boundaries.

#### Material-Based Requirements

Require specific Minecraft materials:

```yaml
requiredBlocks:
  stone: 25
  oak_log: 5
  wheat: 20
  gold_block: 3
```

#### Tag-Based Requirements

Use predefined block tags for broader requirements:

```yaml
requiredBlocks:
  WALL: 50
  WINDOW: 10
  LIGHT: 5
  WARMTH: 2
```

### Available Block Tags

Block tags are  fully configurable via the `buildingTags.yml` file. The following default tags are available, but you can modify them or create your own:

- **WALL**: Stone bricks, cobblestone, logs, sandstones, planks, bricks, stone variants, deepslate, blackstone
- **WINDOW**: Glass blocks and panes, wooden fences
- **WARMTH**: Campfires, furnaces, blast furnaces, fire
- **CRAFTING**: Crafting tables, anvils, enchanting tables, furnaces, brewing stands, etc.
- **MARKET**: Wool, fences
- **DOORS**: All door types
- **CROPS**: All crop types
- **FENCES**: Fences, fence gates, walls
- **FARMING**: Combination of CROPS and FENCES
- **LIGHT**: Torches, lanterns, glowstone, sea lanterns, end rods
- **LIGHT_AND_WARMTH**: Combination of WARMTH and LIGHT
- **FLOWERS**: All flower types
- **ROOF**: Stairs and slabs
- **FURNITURE**: Stairs, lanterns, trapdoors, torches, signs, flower pots, banners, carpets, beds, crafting items, chests, barrels, etc.
- **WOOD_FARM_STUFF**: Saplings and leaves

See the [Building Tags Configuration](#building-tags-configuration) section for details on how to customize these tags.

### Blocks of Interest

Specify blocks to track for effect calculations (optional). Required by some effects, as tracking every block can be performance-intensive.

```yaml
blocksOfInterest:
  - WHEAT
  - CARROTS
  - POTATOES
```


### Building Sections

Buildings can be divided into sections using the `requiredSections` property. This is an advanced feature for multi-part buildings.
For example, the regenerating mine building uses sections to define the area to regenerate.

```yaml
requiredSections:
  - main_hall
  - watchtower
  - storage
```

## Building Requirements

### Population Requirements

Require specific population levels before construction:

```yaml
requiredPopulation:
  peasant: 15
  citizen: 5
```

### Building Requirements

Require other buildings to be constructed first:

```yaml
requiredBuildings:
  peasant_house: 3
  moat: 1
```

The number indicates how many of each building must exist in the faction.

### Region Type Requirements

Restrict buildings to specific region types:

```yaml
requiredRegionTypes:
  - PLAINS
  - FOREST
```

### Unlock Cost

Set resource costs to unlock the building:

```yaml
unlockCost:
  wood: 100
  stone: 50
  gold: 10
```

---

## Building Tags Configuration

Building tags are configured in the `buildingTags.yml` file, which allows you to customize which blocks belong to each tag. This file is automatically created with default values on first startup.

### Configuration Structure

The configuration file has a simple structure:

```yaml
tags:
  TAG_NAME:
    minecraftTags:
      - MINECRAFT_TAG_1
      - MINECRAFT_TAG_2
    materials:
      - MATERIAL_1
      - MATERIAL_2
    references:
      - OTHER_TAG_1
      - OTHER_TAG_2
```

### Configuration Options

#### `minecraftTags` (list of strings)
References to Minecraft/Bukkit/Paper tag names. 

**Example Minecraft Tag Types:**
- **MaterialSetTag**: STONE_BRICKS, COBBLESTONES, LOGS, SANDSTONES, RED_SANDSTONES, PLANKS, WALLS, WOODEN_FENCES, CAMPFIRES, WOOL, FENCES, FENCE_GATES, DOORS, CROPS, STAIRS, SLABS, TRAPDOORS, SIGNS, FLOWER_POTS, BANNERS, WOOL_CARPETS, BEDS, SAPLINGS, LEAVES, etc.
- **Tag**: LANTERNS, etc.
- All vanilla tags defined by Minecraft

#### `materials` (list of strings)
Individual Minecraft material names to include in the tag.

**Example Materials:**
- STONE, BRICKS, DIRT, GRASS_BLOCK
- CHEST, BARREL, FURNACE
- WHEAT, CARROTS, POTATOES
- Any valid Minecraft material

#### `references` (list of strings)
References to other building tags defined in the same file. This allows you to combine multiple tags into one.

**Important:** Referenced tags must be defined **before** the tag that references them in the configuration file.

### Example Configurations

#### Simple Tag with Materials Only

```yaml
tags:
  STORAGE:
    materials:
      - CHEST
      - BARREL
      - TRAPPED_CHEST
      - ENDER_CHEST
      - SHULKER_BOX
```

#### Tag with Minecraft Tags

```yaml
tags:
  WALL:
    minecraftTags:
      - STONE_BRICKS
      - COBBLESTONES
      - LOGS
      - PLANKS
    materials:
      - BRICKS
      - STONE
      - DEEPSLATE
      - BLACKSTONE
```

#### Composite Tag with References

```yaml
tags:
  LIGHT:
    minecraftTags:
      - TORCHES
      - LANTERNS
    materials:
      - GLOWSTONE
      - SEA_LANTERN
      - END_ROD

  WARMTH:
    minecraftTags:
      - CAMPFIRES
    materials:
      - FURNACE
      - BLAST_FURNACE
      - FIRE

  LIGHT_AND_WARMTH:
    references:
      - LIGHT
      - WARMTH
```
---
## Building Effects

Building effects define what a building does once constructed. Each effect has its own configuration parameters.

### Effect Configuration Structure

```yaml
effects:
  EffectName:
    parameter1: value1
    parameter2: value2
```

---

## Available Building Effects

### AddHousing

Provides housing capacity for population.

**Parameters:**
- `level` (PopulationLevel): The population level this housing supports
- `amount` (integer): Housing capacity added
- `citizenSpawnChance` (double, default: 0.1): Chance to spawn a citizen NPC on chunk load

**Example:**
```yaml
effects:
  AddHousing:
    level: peasant
    amount: 18
    citizenSpawnChance: 0.15
```

---

### ResourceProduction

Produces resources on payday.

**Parameters:**
- `production` (map): Resources produced per payday cycle

**Example:**
```yaml
effects:
  ResourceProduction:
    production:
      wood: 10
      stone: 5
      food: 15
```

---

### BlockDependentResourceProduction

Produces resources based on blocks within the building area.

**Parameters:**
- `production` (map): Base resource production
- `maximumCountedBlocks` (integer, default: 200): Maximum blocks counted for production
- `blockModifiers` (map): Multiplier per block type

**Example:**
```yaml
effects:
  BlockDependentResourceProduction:
    maximumCountedBlocks: 200
    production:
      grain: 1
    blockModifiers:
      wheat: 0.3
      carrots: 0.2
```

**How it works:** For each block type specified in `blockModifiers`, counts the blocks in the building area (up to `maximumCountedBlocks`), then multiplies by the modifier and adds to the base production.

---

### EntityDependentResourceProduction

Similar to BlockDependentResourceProduction but counts entities instead of blocks.

**Parameters:**
- `production` (map): Base resource production
- `entityModifiers` (map): Multiplier per entity type
- `maximumCountedEntities` (integer): Maximum entities counted

**Example:**
```yaml
effects:
  EntityDependentResourceProduction:
    maximumCountedEntities: 50
    production:
      leather: 1
    entityModifiers:
      COW: 0.5
      PIG: 0.3
```

---

### IncreaseResourceStorage

Increases the storage limit for specific resources.

**Parameters:**
- `storageIncrease` (map): Amount to increase storage for each resource

**Example:**
```yaml
effects:
  IncreaseResourceStorage:
    storageIncrease:
      wood: 500
      stone: 500
      grain: 1000
```

---

### PopulationTax

Generates income from population.

**Parameters:**
- `taxes` (map): Tax rate per population level
- `maximumTotal` (double, default: 10): Maximum total tax income per cycle

**Example:**
```yaml
effects:
  PopulationTax:
    taxes:
      peasant: 0.1
      citizen: 0.2
      noble: 0.5
    maximumTotal: 50
```

**How it works:** Multiplies the tax rate by the population count and faction happiness to generate income on payday.

---

### ChangeAttribute

Modifies a faction attribute.

**Parameters:**
- `attribute` (string): The attribute ID to modify
- `value` (integer): The value of the modification
- `operation` (string, default: ADD_NUMBER): Operation type (ADD_NUMBER, ADD_SCALAR, MULTIPLY_SCALAR_1)

**Example:**
```yaml
effects:
  ChangeAttribute:
    attribute: "max_members"
    value: 5
    operation: ADD_NUMBER
```

---

### ItemProduction

Produces Hephaestus items periodically.

**Parameters:**
- `interval` (integer, default: 60): Production interval in seconds
- `production` (map): Items to produce (requires Hephaestus integration)

**Requires:** Building must have an output chest.

**Example:**
```yaml
effects:
  ItemProduction:
    interval: 120
    production:
      iron_sword:
        id: "minecraft:iron_sword"
        amount: 1
      wooden_shield:
        id: "minecraft:shield"
        amount: 2
```

---

### ItemConversion

Converts items from input to output (crafting-like effect).

**Example:**
```yaml
effects:
  ItemConversion:
    input:
      WHEAT: 3
    output:
      BREAD: 1
```

---

### WateringEffect

Automatically waters farmland near a water source.

**Parameters:**
- `cycleDuration` (integer, default: 60): Duration of water cycle in ticks
- `increasePerCycle` (integer, default: 1): Moisture increase per cycle
- `maxDistance` (integer, default: 10): Maximum distance from water source

**Example:**
```yaml
effects:
  WateringEffect:
    cycleDuration: 120
    increasePerCycle: 1
    maxDistance: 20
```

---

### SpawnNPC

Spawns an NPC at the building location.

**Parameters:**
- `id` (string): The NPC type ID

**Example:**
```yaml
effects:
  SpawnNPC:
    id: councilor
```

---

### SpawnHorses

Spawns horses for the faction.

**Example:**
```yaml
effects:
  SpawnHorses:
    amount: 2
    interval: 3600
```

---

### SetFHome

Sets the faction home location.

**Example:**
```yaml
effects:
  SetFHome: {}
```

---

### Regeneration

Provides regeneration effect to faction members in the building area.

**Example:**
```yaml
effects:
  Regeneration:
    amplifier: 1
    duration: 100
```

---

### DecreaseHunger

Reduces hunger depletion for faction members in the building area.

**Example:**
```yaml
effects:
  DecreaseHunger:
    multiplier: 0.5
```

---

### SpeedBoost

Provides speed boost to faction members in the building area.

**Example:**
```yaml
effects:
  SpeedBoost:
    amplifier: 1
```

---

### EnemyRadar

Detects enemy players near the building.

**Example:**
```yaml
effects:
  EnemyRadar:
    radius: 50
    interval: 100
```

---

### RegeneratingMine

Creates a mine that regenerates ores over time. Requires a section named `mine` for the mining area.

**Example:**
```yaml
effects:
  RegeneratingMine:
    regenerationTime: 600
    ores:
      IRON_ORE: 10
      COAL_ORE: 20
```

---

### ResourceConsumption

Consumes resources periodically.

**Example:**
```yaml
effects:
  ResourceConsumption:
    interval: 86400
    consumption:
      wood: 5
      food: 10
```

---

### MoneyConsumption

Consumes money periodically (upkeep cost).

**Example:**
```yaml
effects:
  MoneyConsumption:
    amount: 100
    interval: 86400
```

---

### AddPolicy

Adds a faction policy when the building is active.

**Example:**
```yaml
effects:
  AddPolicy:
    policy: "military_focus"
```

---

## Complete Examples

### Simple House

```yaml
size: 4
name: "Peasant House"
description:
  - "A simple dwelling for peasants"
  - "Provides basic housing"
icon: OAK_PLANKS
requiredBlocks:
  WALL: 20
  WINDOW: 4
  DOORS: 1
effects:
  AddHousing:
    level: peasant
    amount: 18
  PopulationTax:
    taxes:
      peasant: 0.1
```

### Advanced Farm

```yaml
size: 32
name: "Advanced Farmland"
description:
  - "Large-scale agricultural facility"
  - "Produces grain based on crops planted"
allowOverlap: true
unique: false
requiredBuildings:
  moat: 1
requiredPopulation:
  peasant: 50
  citizen: 10
requiredBlocks:
  stone: 25
  oak_log: 5
  wheat: 20
  farmland: 50
blocksOfInterest:
  - WHEAT
  - CARROTS
  - POTATOES
effects:
  BlockDependentResourceProduction:
    maximumCountedBlocks: 200
    production:
      grain: 1
    blockModifiers:
      wheat: 0.3
      carrots: 0.25
      potatoes: 0.25
  WateringEffect:
    cycleDuration: 120
    increasePerCycle: 1
    maxDistance: 20
```

### Village Center

```yaml
size: 8
name: "Village Center"
description:
  - "The administrative heart of your village"
  - "Unlocks advanced buildings and features"
unique: true
requiredLevel: HAMLET
requiredBuildings:
  peasant_house: 3
requiredPopulation:
  peasant: 15
requiredBlocks:
  WALL: 100
  WINDOW: 20
  CRAFTING: 5
  FURNITURE: 15
effects:
  ChangeAttribute:
    attribute: "max_members"
    value: 10
    operation: ADD_NUMBER
  IncreaseResourceStorage:
    storageIncrease:
      wood: 1000
      stone: 1000
      grain: 2000
  SpawnNPC:
    id: councilor
```

### Military Barracks

```yaml
size: 12
name: "Barracks"
description:
  - "Training facility for soldiers"
  - "Provides military bonuses"
warBuilding: true
requiredLevel: TOWN
unlockCost:
  wood: 200
  stone: 300
  iron: 50
requiredBlocks:
  WALL: 150
  WINDOW: 10
  DOORS: 2
  CRAFTING: 3
effects:
  ChangeAttribute:
    attribute: "soldier_capacity"
    value: 20
    operation: ADD_NUMBER
  ItemProduction:
    interval: 3600
    production:
      training_sword:
        id: "faction:training_sword"
        amount: 5
  ResourceConsumption:
    interval: 86400
    consumption:
      food: 20
      gold: 5
```

---
