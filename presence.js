const RPC = require("discord-rpc");
const shell = require('shelljs');

const rpc = new RPC.Client({
    transport: "ipc"
});

shell.exec("D:\\Steam\\steamapps\\common\\Phoenotopia Awakening\\PhoenotopiaAwakening.exe");

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Exploring", // Details!
        largeImageKey: "icon",
        startTimestamp: new Date(),
        largeImageText: "Presence made by Ashfin"
    });
    console.log("Rich Presence Is Now Active, Check Your Discord!"); // A Message In Terminal When RPC Is Turned On.
});

rpc.login({
    clientId: "1169223418881781821" // Your Client ID
});