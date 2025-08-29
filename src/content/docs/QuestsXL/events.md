---
title: Events
sidebar_position: 2
---
**Events** sind ein wichtiger Bestandteil von QXL und ein guter Weg, Erethon lebendig wirken zu lassen. Events können so gut wie alle Actions, Objectives und Conditions nutzen. Im Gegensatz zu Quests sind Events nicht an einen Spieler (oder eine Gruppe) gebunden. Tatsächlich brauchen sie gar keinen Spieler und können theoretisch ganz von alleine ablaufen und abgeschlossen werden.

Events werden erstellt, in dem eine Datei im Ordner `events` angelegt wird. Der Datei-Name ist dabei - wie bei Quests auch - die ID des Events. Dateien im `events`-Ordner können wie gewohnt in Unterordnern sortiert werden.

## Grundlagen & Beteiligung
Events haben eine Position in der Welt und einen Radius. Spieler, die sich innerhalb des Radius des Events befinden, bekommen das Event angezeigt. Standardmäßig werden alle Actions des Events für alle Spieler innerhalb des Radius ausgeführt.

Durch Teilnehmen am Event sammeln Spieler Teilnahmepunkte. Diese können mithilfe der ``event_participation``-Action einem Spieler gegeben werden:
`event_participation: <event ID>;<Wert>`

In vielen Fällen ist es wahrscheinlich sinnvoller, Actions nur für Spieler auszuführen, die aktiv am Event teilnehmen. Dies kann mithilfe der ``run_as``-Action getan werden:
```yaml
sendMsgToGreatPlayers:
  type: run_as
  mode: event_participants
  value: 100 # Minimum-Participation-Wert
  actions:
    message: "<green>Du machst das toll!"
```
Events sind - genauso wie Quests - abgeschlossen, sobald sämtliche Objectives in der letzten Stage erfüllt sind. Genau wie bei Quests kann die `stage`-Action genutzt werden, um die aktuelle Stage zu ändern. 

Event-Belohnungen können über die ``rewards``-Sektion der Eventdatei vergeben werden, wobei sich diese auch nach der erreichten Beteiligung eines Spielers richten. Die Reward-Actions werden für alle Spieler ausgeführt, die sich je am Event beteiligt haben - sie müssen nicht in der Nähe sein. 

Es ist möglich, mit der ``start_event``-Action ein Event zu starten. Damit lassen sich Event-Ketten erstellen, in dem man diese einfach bei Abschluss eines Events aufruft. Genauso ist es so möglich, das das Abschließen einer Quest ein Event triggered. 

Mithilfe der ``stage``-Action ist es auch möglich, die Stage eines *anderen* Events zu ändern. So lassen sich z.B. große Meta-Events erstellen, die fortschreiten, wenn mehrere kleine Sub-Events abgeschlossen werden.

# Beispiel-Datei

Im Folgen eine Beispieldatei für ein Event:
```yaml
startLocation:
  world: Erethon
  x: 2492
  y: 21
  z: 310
cooldown: 300
range: 20
displayName: Banditendorf
rewards:
  '5':
  - 'message: message=<green>Yay! Du hast min. 5 Participation erreicht!'
  - 'give_item: item=minecraft:diamond_sword; amount=2; chance=100'
  '1':
    message:
      message: <red>Leider hast du nur 1 Participation erreicht.
giveAllRewards: false
stages:
  '0':
    onStart:
      set_tracked_event:
        event: T1_Banditendorf_Arvis
        priority: 3
      message:
        message: '<red>Banditenanführer: Greift an!'
      objective_display:
        text: 'Bekämpfe Banditen: <gold>0<dark_gray>/<gold>6'
      repeat:
        delay: 100 # Zwischen den Wiederholungen vergehen 5 Sekunden (100 Ticks)
        repetitions: 1 # Wir wollen 6 Mobs spawnen
        actions: # Wir definieren die Aktionen, die wiederholt werden
          - 'spawn_mob: x=~0; y=~0; z=~0; randomxz=5; id=T1_Bandit_Axt'
          - 'spawn_mob: x=~0; y=~0; z=~0; randomxz=4; id=T1_Bandit_Armbrust'
          - 'spawn_mob: x=~0; y=~0; z=~0; randomxz=5; id=T1_Bandit_Schwert'
    # Die Ziele, die die Spieler erreichen müssen, um die Stage abzuschließen
    objectives:
      kill_mob:
        mobs:
        - T1_Bandit_Armbrust
        - T1_Bandit_Axt
        - T1_Bandit_Schwert
        goal: 6
        onProgress:
        - 'objective_display: text=Besiege Banditen: <gold>%progress%<dark_gray>/<gold>%goal%'
        - 'event_participation: amount=1'
    onFinish: # Nachdem die Stage abgeschlossen wurde, führen wir diese Aktionen aus
      - 'message: message=<red>Banditenanführer: Grr, nächstes Mal bekommst du uns
        nicht!'
  '1': # Die zweite Stage
    onStart:
      message:
        message: <red>Die zweite Welle der Angreifer ist da!
      objective_display:
        text: 'Bekämpfe  Banditen: <gold>0<dark_gray>/<gold>6'
      repeat:
        delay: 10 # In ticks
        repetitions: 5 # Es werden 6 Mobs gespawnt
        actions:
        - 'spawn_mob: x=~0; y=~0; z=~0; randomxz=6; id=T1_Bandit_Axt'
    objectives:
      kill_mob:
        mobs:
        - T1_Bandit_Axt
        goal: 6
        onProgress:
        - 'objective_display: text=Besiege Banditen: <gold>%progress%<dark_gray>/<gold>%goal%'
        - 'event_participation: amount=1'
  '2': # Die dritte Stage
    onStart:
      message:
        message: <red>Der Banditenanführer ist da!
      objective_display:
        text: Besiege den Banditenanführer
      repeat:
        delay: 0 # Zwischen den Wiederholungen vergehen 0 Sekunden
        repetitions: 0 # Wir wollen 5 Mobs spawnen
        actions:
        - 'spawn_mob: x=~0; y=~0; z=~0; randomxz=3; id=T1_Banditenanführer'
        - 'spawn_mob: x=~0; y=~0; z=~0; randomxz=6; id=T1_Bandit_Schwert'
        - 'spawn_mob: x=~0; y=~0; z=~0; randomxz=4; id=T1_Bandit_Schwert'
        - 'spawn_mob: x=~0; y=~0; z=~0; randomxz=7; id=T1_Bandit_Schwert'
        - 'spawn_mob: x=~0; y=~0; z=~0; randomxz=2; id=T1_Bandit_Schwert'
    objectives:
      kill_mob:
        mobs:
        - T1_Banditenanführer
        goal: 1
        onProgress:
        - 'event_participation: amount=1'
    onFinish:
    - 'message: message=<green>Du hast das Banditendorf gemeistert!'
    - 'set_tracked_event: event=clear'

```