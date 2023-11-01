# Panselo
# Phoenotopia Awakening Discord Rich Presence

> Add a cool Discord Rich Presence to your Phoenotopia Awakening game.

## Overview

This project allows you to add a Discord Rich Presence to your Phoenotopia Awakening game, making it more interactive and engaging for your Discord friends to see what you're doing in the game.

## Features

- Displays your current in-game activity.
- Shows the game's icon as a large image.
- Provides additional details and text when hovering over the large image.

## Getting Started

### Prerequisites

- Node.js: You need Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/your-username/your-repo.git
```
2. Navigate to the project directory.
```bash
cd your-repo
```
3. Install dependencies.
```bash
npm install
```
<img src="https://cdn.discordapp.com/attachments/856175159463510037/1169338423304269905/123.png?ex=65550a45&is=65429545&hm=54cdc38d8cde813f39ed7f25ed5d12652b624b49902f609a856f0e93894d3403&">

### Usage

1. Configure your Discord Application ID:
   - Go to the [Discord Developer Portal](https://discord.com/developers/applications).
   - Create a new application or select an existing one.
   - Copy the "Client ID" and replace `"YOUR_CLIENT_ID"` in `presence.js` with your actual Client ID.

2. Customize your presence:
   - Modify the `presence.js` file to specify your game's executable path and other details (e.g., large image key, text, and activity details).

3. Run your presence script:

```bash
   node presence.js
```
