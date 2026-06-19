// Replace Your api key with your Erlc api key

const API_KEY = "Your api Key"

const req = new Request("https://api.erlc.gg/v2/server");
req.headers = { "server-key": API_KEY };

let data;

try {
  data = await req.loadJSON();
} catch {
  data = {};
}

const players = data.CurrentPlayers ?? 0;
const maxPlayers = data.MaxPlayers ?? 40;
const serverName = data.Name ?? "ERLC Server";
const percentage = Math.min(players / maxPlayers, 1);

const widget = new ListWidget();

const gradient = new LinearGradient();
gradient.colors = [
  new Color("#0f172a"),
  new Color("#1e293b")
];

widget.backgroundGradient = gradient;
widget.setPadding(16, 16, 16, 16);

const title = widget.addText(serverName);
title.font = Font.boldSystemFont(16);
title.textColor = Color.white();

widget.addSpacer(12);

const count = widget.addText(`${players}/${maxPlayers}`);
count.font = Font.boldSystemFont(32);
count.textColor = new Color("#22c55e");

widget.addSpacer(4);

const subtitle = widget.addText("Spieler Online");
subtitle.font = Font.mediumSystemFont(12);
subtitle.textColor = Color.lightGray();

widget.addSpacer(12);

const width = 220;
const height = 10;

const ctx = new DrawContext();
ctx.size = new Size(width, height);
ctx.opaque = false;

const background = new Path();
background.addRoundedRect(new Rect(0, 0, width, height), 5, 5);
ctx.addPath(background);
ctx.setFillColor(new Color("#334155"));
ctx.fillPath();

const fill = new Path();
fill.addRoundedRect(new Rect(0, 0, width * percentage, height), 5, 5);
ctx.addPath(fill);
ctx.setFillColor(new Color("#22c55e"));
ctx.fillPath();

widget.addImage(ctx.getImage());

if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  await widget.presentMedium();
}

Script.complete();