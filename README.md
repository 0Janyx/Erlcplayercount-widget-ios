# ERLC Server Player Count Widget iOS (Scriptable)

This simple widget lets you see how many players are on your private server.

<p align="center">
  <img width="383" height="785" alt="iPhone 16 Dark (1)" src="https://github.com/user-attachments/assets/a68e3e94-da2f-4804-99d7-3344c1359ed5" />
</p>

<p align="center">
  It usually has colors, but I prefer the clear version.
</p>

## Features

- Progress bar with the current player count
- Clicking on the widget directly joins the server via `https://erlc.gg/join?code=Servercode&placeId=2534724415`
- German / English versions available

## Prepare to use the widget

- Install Scriptable from the [App Store](https://apps.apple.com/de/app/scriptable/id1405459188)
- Download the script:
  - English version [here](https://github.com/0Janyx/Erlcplayercount-widget-ios/releases/download/Latest/widget-en.js)
  - German version [here](https://github.com/0Janyx/Erlcplayercount-widget-ios/releases/download/Latest/widget-de.js)
- Open the script and add your API key. For more information, see [Edit Script](#edit-script)

## Edit Script

- Replace your API key with your actual ERLC server key at:
  > Guide on how to get your server key [here](https://apidocs.erlc.gg/)

```js
const API_KEY = "Your API Key"
