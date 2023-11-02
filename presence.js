// Import the required modules
const RPC = require("discord-rpc");
const shell = require('shelljs');

// Create a new Discord Rich Presence client
const rpc = new RPC.Client({
    transport: "ipc"
});

// Define a callback function when the Discord Rich Presence is ready
rpc.on("ready", () => {
    // Set the Rich Presence activity
    rpc.setActivity({
        details: "Exploring", // Details!
        largeImageKey: "icon",
        startTimestamp: new Date(),
        largeImageText: "Presence made by Ashfin"
    });

    // Log a message to the console when the Rich Presence is active
    console.log("Rich Presence Is Now Active, Check Your Discord!"); // A Message In Terminal When RPC Is Turned On.
});

// Log in to Discord with your application's Client ID
rpc.login({
    clientId: "1169223418881781821" // Your Client ID
});

