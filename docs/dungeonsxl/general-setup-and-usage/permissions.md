---
title: Permissions
sidebar_position: 5
---

| Permission node | Explanation | Default |
|--------------------|--------------------------------|---------|
| dxl.[command name] | Allows to execute the command. | OP |
| dxl.ignoretimelimit | Bypass join requirement time | OP |
| dxl.ignorerequirements | Bypass all join requirements | OP |
| dxl.sign | Required to create dungeon signs. | OP |
| dxl.sign.[sign name] | Allows to create a specific dungeon sign. | OP |
| dxl.bypass | Allows to use all blocked things in a dungeon | OP |
| dxl.bed | Allows to use beds in a dungeon. | OP |
| dxl.dispenser | Allows to use dispensers in a dungeon. | OP |
| dxl.enderchest | Allows to use ender chests in a dungeon. | OP |
| dxl.cmdedit | Allows to use commands while in dungeon. | OP |
|  | **The following nodes don't allow anything themselves but contain other permissions:** |
| dxl.halfplayer | CHAT, ESCAPE, GAME, HELP, JOIN, LEAVE, LIVES, MAIN | true |
| dxl.fullplayer | halfplayer, GROUP | OP |
| dxl.halfeditor | ESCAPE, LIST, MESSAGE, SAVE | OP |
| dxl.fulleditor | halfeditor, DELETE, EDIT, PLAY, RENAME, SIGN, TEST | OP |