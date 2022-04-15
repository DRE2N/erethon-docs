---
title: Game Goals
sidebar_position: 5
---

The **game goal** determines how a dungeon game ends.

Game goals are set through the `gameGoal` [game rule](game-rules). They contain [components](#components), which are special game rules that specify how the goal works.

In YAML, e.g. in a [map configuration](floor-configuration), a game goal is a [map](data-structure-guide#map) that contains the type and its components:

```
gameGoal:
  type: TYPE
  component1: value
  component2: value
```

## Game goal types

| Type              | Description                                                                          | Components                            |
| ----------------- | ------------------------------------------------------------------------------------ |---------------------------------------|
| END               | The game ends when an [end sign](DungeonSign-End) is triggered by all group members. | timeToFinish                          |
| LAST_MAN_STANDING | The game ends when only members of one group are left in the game.                   |                                       |
| SCORE             | The game ends when a group reachs the set score. If no scoreGoal is set, the game does not end and the goal is to survive as long as possible to beat a highscore. | initialScore, scoreGoal, timeToFinish |
| TIME_SURVIVAL     | The game ends after time has passed. Players win if they survive until then.         | timeToFinish                          |

## Components

| Name         | Explanation | Possible values | Default value | Annotation |
| ------------ | ----------- | --------------- | ------------- | ---------- |
| timeToFinish | The time to finish the dungeon in seconds. If the group has no time left, the players get kicked. | Integer | -1 | -1 = no time limit |
| initialScore | Score used for capture the flag and similar game types. | Integer | 3 | -1 = not used |
| scoreGoal    | The amount of goals to score before the game ends. | Integer | -1 | -1 = not used |

## Examples

```
gameGoal:
  type: "END"
  timeToFinish: 120
```

```
gameGoal:
  type: "LAST_MAN_STANDING"
```

```
gameGoal:
  type: SCORE
  initialScore: 3
  scoreGoal: 6
  timeToFinish: 120
```

```
gameGoal:
  type: TIME_SURVIVAL
  timeToFinish: 120
```