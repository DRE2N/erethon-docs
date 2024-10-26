---
title: Grundlagen
sidebar_position: 1
---

## Vorbereitung
* Zum Bearbeiten von Dateien empfiehlt sich ein vernünftiger Texteditor wie [Notepad++](https://notepad-plus-plus.org/downloads/) oder [VSC](https://code.visualstudio.com/).
* Die Dateien sind im  Dateien YAML-Format, also mit der Endung ``.yml``. Eine Besonderheit dieses Formats ist, das es großen Wert auf die *Einrückung*, also die Anzahl an Leerzeichen vor einer Zeile, legt. Bereits erwähnte Texteditoren sollten automatisch darauf achten das diese stimmt.
* Die Dateien auf dem Server werden mithilfe von Git verwaltet. Dazu benötigt ihr einen [Github-Account](https://github.com/). **Sobald ihr einen Account erstellt habt, meldet euch bitte bei Malfrador oder Fyreum, um Zugriff auf unsere Github-Organisation zu erhalten.**
* Sobald ihr Zugriff habt, findet ihr sämtliche Dateien [hier](https://github.com/DRE2N/Erethon).
* Sobald ihr etwas geändert habt - ob Quest, Event, NPC oder Item - müsst ihr eure Änderungen mit dem (Test-)Server synchronisieren. Dies geht mit dem Befehl ``/q sync``.

## Grundlagen
QXL ist ein Baukasten-System. Das bedeutet, das es verschiedene konfigurierbare Bausteine gibt, aus denen sich eine Vielzahl von Quests und Events zusammensetzen lassen. Hier ist ein bisschen Kreativität gefragt.

Auf den ersten Blick wirkt es vielleicht ein wenig komplex, aber lasst euch davon nicht erschrecken.

***Soweit nicht extra erwähnt bezieht sich "Quest" im folgenden auch immer auf Events - beides funktioniert sehr ähnlich.***

### Spielen mit Bausteinen

Die folgenden drei Kategorien von Bausteinen gibt es:
* **Actions:** Actions sind *Dinge, die passieren*. Das kann das Senden einer Nachricht sein, der Start eines Dialogs mit einem NPC oder viele weitere Dinge.
* **Conditions:** Conditions sind *Bedingungen*. Bedingungen können entweder erfüllt oder nicht erfüllt sein. Eine Bedingung könnte zum Beispiel sein, das ein Spieler ein bestimmtes Level erreicht haben muss, sich an einer bestimmten Stelle aufhalten etc.
* **Objectives:** Objectives sind *Ziele*, die erreicht werden können. Ein Ziel ist zum Beispiel das Töten einer bestimmten Anzahl von Monstern, das Erreichen eines Punktes, die Herstellung eines Items und so weiter.

### Bausteine stapeln
Eine Quest besteht immer aus mehreren sogenannten **Stages**. Eine *Stage* ist dabei ein *Abschnitt* der Quest. Beispiel:

1. Sprich mit Walter
2. Streichele fünf Kühe
3. Sprich mit Wolfgang über die Weichheit des Fells der Kühe

Jeder dieser drei Schritte hier wäre eine eigene Stage. *Objectives* gehören immer zu einer Stage. Sobald alle Objectives einer Stage abgeschlossen sind, wechselt die Quest automatisch zur nächsten Stage. Wenn es keine weiteren Stages mehr gibt, ist die Quest erfolgreich beendet und der Spieler erhält seine Belohnung (Kuhfelle?).

Bisher klingt es ja noch alles recht einfach und ein wenig nach dem alten Questplugin, oder? Aber jetzt kommt der Clue: Sämtliche Bausteine lassen sich miteinander kombinieren. Jedes Objective (Ziel) kann *selber* noch Actions ausführen. Jede Condition (Bedingung) kann Actions ausführen, wenn sie erfüllt oder nicht erfüllt wird. Und sogar Actions selbst können andere Actions ausführen. Und sowohl Actions als auch Objectives können eigene Conditions haben.

Klingt kompliziert? Keine Sorge. Nehmen wir zum Beispiel wieder unsere Kuhfell-Quest: Wir möchten jetzt den Spieler richtig ärgern, und jedes Mal, wenn er eine der Kühe streichelt, zwei Zombies spawnen. Nichts einfacher als das! Wir fügen einfach dem *Objective* für das Streicheln der Kühe eine *Action* hinzu, die zwei Zombies spawnt. 

Dann veröffentlichen wir die Quest, und stellen fest, dass sie suuuuper beliebt bei neuen Spielern ist, diese allerdings aber immer an den Zombies sterben. Ideal wäre es jetzt natürlich, wenn wir keine Zombies spawnen, wenn der Spieler unter Level 5 ist. Dafür gibt es *Conditions*: Wir fügen einfach unserer "Spawne Zombies"-Action eine *Condition* hinzu, die überprüft ob der Spieler schon über Level 5 ist - und wenn nicht, wird die Action nicht ausgeführt und es spawnen keine Zombies - aber die restliche Quest läuft wie gewohnt.

## Single- und Multi-Line-Configs

Quest-Bausteine lassen sich auf zwei (technisch gesehen drei) Arten definieren. Für eine Actions, Objectives und Conditions ist die Kurzform nicht möglich. Dies ist in der Dokumentation vermerkt.

Nehmen wir als Beispiel einmal die Command-Action.

#### Als Sektion:
```yaml
letsRunACommand:
  type: command
  command: /coolerBefehl %player%
  op: true
  console: false
```

Das ist recht lang. Das muss doch kürzer gehen.

#### Als kurze Sektion:

```yaml
command:
  command: /coolerBefehl %player%
```

Schon besser. Wie man sieht, lässt sich der Typ der Action (``command``) auch als Name des Abschnitts nutzen. Und einige Parameter, wie ``op`` und ``console`` sind optional.
Das geht aber noch kürzer. Es gibt auch eine Schreibweise, mit der sich alles in einer Zeile unterbringen lässt:

#### In einer Zeile:

```yaml
  command: command=/coolerBefehl %player%;op=true
```

:::note Wichtig!
Innerhalb eines Abschnitts müssen die Namen immer einzigartig sein. Sprich
```yaml
abschnitt:
  command: command=/coolerBefehl %player%;op=true
  command: command=/nochEinCoolerBefehl %player%;op=false
```
geht aktuell **nicht!**

In Zukunft wird dies allerdings möglich sein.
:::

## QLocation

Häufig ist es notwendig, Locations, also Koordinaten in der Welt, anzugeben. Dabei unterstützt QXL relative Koordinaten sowie Positionen innerhalb von Dungeons.

Das Format für QLocations ist wie folgt:
```yaml
x=<x-Koordinate>;y=<y-Koordinate>;z=<z-Koordinate>;world=<Welt>
```

bzw. in der langen Version
```yaml
abschnitt:
  type: teleport # Beispiel
  x: <x>
  y: <y>
  z: <z>
  world: <world>
```

Für ``world`` kann der Präfix ``dungeon:`` genutzt werden, um ein Dungeon anzugeben. z.B. ``dungeon:kanalisation`` 

x, y und z-Koordinaten können (wie in Vanilla) mit einem ``~`` angegeben werden, um sie in relative Koordinaten zu verwandeln.

``world`` ist optional. Wird sie nicht angegeben, wird der Spieler in der aktuellen Welt/dem aktuellen Dungeon teleportiert.

Beispiel:
* ``teleport: x=0;y=64;1000;world:Erethon`` teleportiert den Spieler zu 0,64,1000 in der Welt "Erethon"
* ``spawn_mob: id=Malf; x=~20; y=~0;z=~0`` spawnt den Mob ``Malf`` 20 Blöcke auf der X-Achse vom Spieler entfernt.

:::note Dungeons
Den Spieler in ein Dungeon zu teleportieren ist *nicht* möglich.
:::

## Beispiel-Quest
```yaml
displayName: 'Eine kuhle Quest'
description: 'Eine genauere Beschreibung. Benutze \n für neue Zeilen.'

# Eine Liste der Conditions (Bedingungen), um eine Quest zu starten.
conditions:
  noLevel:
    # Die Inverted-Condition ist besonders. Sie ist erfüllt, wenn andere Conditions _nicht_ erfüllt sind
    type: INVERTED
    conditions:
      level:
        # Hier: Der Spieler kann diese Quest nur machen, wenn er _nicht_ über Level 10 ist.
        type: LEVEL
        level: 10

# Eine Liste an Actions, die ausgeführt werden, wenn die Quest begonnen wird.
onStart:
  group:
    # z.B. fügen wir den Spieler zur Gruppe "Templer" hinzu
    type: PERMISSION
    operation: ADD_GROUP
    permission: Templer

# Eine Liste an Actions, die ausgeführt werden, wenn die Quest beendet wird.
# So lassen sich zum Beispiel Belohnungen vergeben, aber auch z.B. direkt eine andere Quest starten.
onFinish:
  items:
    type: GIVE_ITEM
    item: DIAMOND
  teleport: Saragandes;100;20;200
# Die Stages (Abschnitte) der Quest.
stages:
  # Die ID dieser Stage. Hier sind nur Zahlen erlaubt
  0:
    # Optional. Diese Nachricht wird angezeigt, wenn der Spieler die Stage beginnt.
    startMessage: 'Hello'
    # Optional. Diese Nachricht wird angezeigt, wenn der Spieler die Stage erfolgreich abschließt.
    completeMessage: 'Du hast die erste Stage geschafft!'
    # Eine Liste aller Objectives (Ziele) dieser Stage
    objectives:
      # Ein beliebiger Name. Wird nicht angezeigt.
      TestObjective:
        # Der Typ des Objectives. Wird immer benötigt.
        type: LOCATION
        # Die Anzeige, die der Spieler ingame erhält.
        display: 'Gehe zu [100, 10, 40].'
        # Verschiedene Einstellungen, abhängig vom Objective.
        world: Saragandes
        x: 100
        y: 10
        z: 40
        range: 5
        # Optional. Objectives können Actions ausführen, wenn sie abgeschlossen werden.
        onComplete:
          # Auch die Namen der Actions werden nirgends angezeigt.
          teleportThePlayer:
            type: TELEPORT
            world: Saragandes
            x: 100
            y: 10
            z: 70
            # Jede Action kann beliebig viele weitere Actions auführen. Diese können hier gelistet werden.
            runAfter:
              delay:
                type: DELAY
                delay: 10
                actions:
                  msg:
                    type: MESSAGE
                    message: 'Geh endlich!'
                    # Auch Actions können Conditions haben. So fordern wir z.B. den Spieler auf endlich zu gehen, wenn er nach 10s immer noch da steht.
                    conditions:
                      stillHere:
                        type: LOCATION
                        x: 100
                        y: 10
                        z: 70
                        range: 5
                    # runAfter: - Das ganze lässt sich beliebig lange fortsetzen. Irgendwann ist es aber sicher sinnvoller, einfach eine neue Stage zu beginnen.
          progress:
            # Diese Action verändert die aktuelle Stage eines Spielers. So kann z.B. ein Spieler, der ein bestimmtes Objective abschließt, auf Stage 10 landen
            # ein Spieler der ein anderes Objective abschließt, jedoch auf Stage 100. So lassen sich Questverzweigungen erstellen.
            # Standardmäßig landet ein Spieler immer in der nächsten Stage, wenn alle Objectives abgeschlossen sind.
            type: STAGE
            id: 1


  1:
    startMessage: 'Zweite Stage'
    completeMessage: 'Fertig.'
    #onStart: - Eine Liste an Actions, die ausgeführt werden, wenn diese Stage begonnen wird.
    #onFinish: - Eine Liste an Actions, die ausgeführt werden, wenn diese Stage abgeschlossen wird.
    #conditions: - Eine Liste an Bedingungen für den Beginn dieser Stage. Solange diese nicht erfüllt sind, bleibt der Spieler in der vorherigen Stage "stecken". Sollte niemals für die erste Stage genutzt werden.
    objectives:
      useItem:
        type: USE_ITEM
        display: 'Benutze cooles Item, während du den Goldblock ansiehst.'
        # Der Name des coolen Items.
        item: CoolesCustomItem
        # Objectives können auch Conditions haben.
        conditions:
          lookingAt:
            type: LOOKING_AT
            block: GOLD_BLOCK
        onComplete:
          sendMessage:
            type: MESSAGE
            message: 'Toller Goldblock, nicht wahr?'
        # <-- Sonstige Optionen -->
        #onFail: - Einige Objectives können auch fehlschlagen - zum Beispiel das EscortNPCObjective, wenn der NPC stirbt. Auch dann lassen sich Actions ausführen.
        #optional: true/false - Optionale Objectives müssen nicht erfüllt werden, um die Stage abzuschließen
        #persistent: true/false - Objectives, die Persistent sind, können nicht erfüllt werden. Das kann z.B. genutzt werden, um den Spieler immer wieder zu teleportieren, wenn er/sie an eine bestimmte Stelle geht.
```