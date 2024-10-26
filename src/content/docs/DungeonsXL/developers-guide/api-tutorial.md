---
title: API Tutorial
sidebar_position: 1
---

DungeonsXL has, as of v0.18, an API module that will allow for programming stable hooks.


***
1. [How to get the API](#how-to-get-the-api)
2. [Hooking into DXL](#hooking-into-dxl)
***

## How to get the API
The DungeonsXL API can be built from source or downloaded from the Maven repository.

```
    <dependencies>
        <dependency>
            <groupId>de.erethon.dungeonsxl</groupId>
            <artifactId>dungeonsxl-api</artifactId>
            <version>0.18-PRE-02</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
    <repositories>
        <repository>
            <id>dre-repo</id>
            <url>https://erethon.de/repo</url>
        </repository>
    </repositories>
````

Alternatively, binaries can be downloaded manually [here](https://erethon.de/repo/de/erethon/dungeonsxl/dungeonsxl-api/).

## Hooking into DXL
The main class of the API is the [DungeonsAPI](https://erethon.de/javadocs/dungeonsxl/de/erethon/dungeonsxl/api/DungeonsAPI.html) singleton.
```
DungeonsAPI dxl;

@Override
public void onEnable() {
    if (!Bukkit.getPluginManager().isPluginEnabled("DungeonsXL")) return;
    dxl = (DungeonsAPI) Bukkit.getPluginManager().getPlugin("DungeonsXL");
}
```