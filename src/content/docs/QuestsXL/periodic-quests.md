---
title: Periodic Quests
sidebar_position: 6
---

# Periodic Quests System

## Overview

The Periodic Quests system adds daily and weekly quest rotation to QuestsXL. All players share the same active daily/weekly quests during each period, and completing all quests in a period grants bonus rewards.

## Features

- **Daily Quests**: Rotating quests that reset at a configurable time each day
- **Weekly Quests**: Rotating quests that reset on a configurable day/time each week
- **Shared Rotation**: All players see the same quests during each period
- **Completion Bonuses**: Extra rewards when completing all daily or weekly quests
- **Automatic Reset**: Quests automatically rotate on schedule
- **Player Progress Tracking**: Individual player progress is tracked per period

## Configuration

The system is configured via `periodicQuests.yml` in the QuestsXL/ folder.

### Configuration Structure

```yaml
# Daily Quest Configuration
daily:
  enabled: true              # Enable/disable daily quests
  count: 3                   # Number of quests to select each day
  resetTime: "06:00"         # Time when daily quests reset (HH:mm format)
  questPool:                 # List of quest names that can be selected
    - example_daily_1
    - example_daily_2
    - example_daily_3
  completionRewards:         # Rewards for completing all daily quests
    - message: "<green>You completed all daily quests!"
    # Add any QAction here (items, money, etc.)

# Weekly Quest Configuration
weekly:
  enabled: true              # Enable/disable weekly quests
  count: 3                   # Number of quests to select each week
  resetDay: "MONDAY"         # Day when weekly quests reset
  resetTime: "06:00"         # Time when weekly quests reset (HH:mm format)
  questPool:                 # List of quest names that can be selected
    - example_weekly_1
    - example_weekly_2
    - example_weekly_3
  completionRewards:         # Rewards for completing all weekly quests
    - message: "<blue>You completed all weekly quests!"
    # Add any QAction here
```

### Reset Times

- **resetTime**: 24-hour format (e.g., "06:00", "18:30")
- **resetDay**: Valid values are MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY

### Completion Rewards

Completion rewards use the standard QAction system. You can use any action type registered in the plugin:

```yaml
completionRewards:
  - message: message="<green>All quests completed!"
```

## Setup Example

1. Create your quest files in `plugins/QuestsXL/quests/`:
   - `kill_zombies_daily.yml`
   - `gather_wood_daily.yml`
   - `explore_caves_daily.yml`

2. Add them to `periodicQuests.yml`:
```yaml
daily:
  enabled: true
  count: 2
  resetTime: "06:00"
  questPool:
    - kill_zombies_daily
    - gather_wood_daily
    - explore_caves_daily
  completionRewards:
    - message: message="&a&l✓ Daily Challenge Complete!"
```

3. Players can now use `/qxl daily` to see today's featured quests

