---
title: Dialoge
sidebar_position: 7
---


## Beispiel
```yaml
sender: "MalfRad"
stages:
  0:
    conditions:
      permission: permission=qxl.test.dialogue
    messages:
      - Hallo Reisender!;4
      - Kann ich Ihnen eines meiner neuesten Raritäten anbieten?;10
  1:
    messages:
      - Dachte ich es mir doch! Lass mich mal sehen...;8
      - Moment.;3
      - Da hab ich es! Ein seltener Trank aus Thenor; gestern geliefert worden.;10
```