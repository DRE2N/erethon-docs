---
title: Requirements
sidebar_position: 4
---

## List
This is a list of all built-in requirements of DungeonsXL.

### Level fee
Makes the player pay experience levels.
```
requirements:
  feeLevel: 1
```

### Monetary fee
Makes the player pay Vault money.
```
requirements:
  feeMoney: 50.0
```

### Forbidden items
Items that may not be taken into the dungeon.
```
requirements:
  forbiddenItems:
    - ENDER_PEARL
    - MY_CUSTOM_ITEM
```

Adding ENDER_PEARL to this list also forbids all custom items that are based on ENDER_PEARL (= whose material is an ender pearl). If you do not wish to forbid items other items based on ender pearls but only Vanilla ender pearls, add an "*" to the ID:

```
requirements:
  forbiddenItems:
    - ENDER_PEARL*
    - MY_CUSTOM_ITEM
```

### Group size
Sets the allowed amount of group members.
```
requirements:
  groupSize:
    minimum: 2
    maximum: 4
```

### Item keys
Items the player must have to play the dungeon.
```
requirements:
  keyItems:
    - GOLD_INGOT
    - MY_CUSTOM_ITEM
```

### Permission
Permissions the player must have to play the dungeon.
```
requirements:
  permission:
    - my.custom.node
    - yet.another.node
```

### Time frame
The time when the dungeon may be played.
In this example, it can only be played on a friday and from sunday to tuesday respectively at 15-16 o'clock.
Note that the week in the Java Calendar API begins with sunday, so SATURDAY-SUNDAY does not work.
```
requirements:
  timeframe:
    - "FRIDAY"
    - "SUNDAY-TUESDAY"
    - "15-16"
```

### Time since start & finish
Cooldown since the dungeon has been played for the last time. timeSinceStart counts since the dungeon has been started (tried), timeSinceFinish allows for infinite tries but prevents entering the dungeon if the player has already succeeded within the timeframe.
```
requirements:
  timeSinceStart: 0.05 # 3 minutes
  timeSinceFinish: 24.0
```

### Finished dungeons
The dungeons that must be finished before the dungeon may be played.
```
requirements:
  # Players must have finished all of the following dungeons at least once:
  finishedDungeons:
    - Test1       # Test1
    - Test2/Test3 # AND EITHER Test2 and Test3
    - 7:Test4     # and Test4 within the last 7 hours
    - 0.05:Test5  # and Test5 within the last 3 minutes
```

## API
Creating a requirement is as easy as implementing the [Requirement](https://erethon.de/javadocs/dungeonsxl/de/erethon/dungeonsxl/api/Requirement.html) interface in a class with a [DungeonsAPI](https://erethon.de/javadocs/dungeonsxl/de/erethon/dungeonsxl/api/DungeonsAPI.html) parameter. See [here](https://github.com/DRE2N/DungeonsXL/blob/master/core/src/main/java/de/erethon/dungeonsxl/requirement/FeeMoneyRequirement.java) for reference.

Requirements fire [RequirementCheckEvent](https://erethon.de/javadocs/dungeonsxl/de/erethon/dungeonsxl/api/event/requirement/RequirementCheckEvent.html) and [RequirementDemandEvent](https://erethon.de/javadocs/dungeonsxl/de/erethon/dungeonsxl/api/event/requirement/RequirementDemandEvent.html).