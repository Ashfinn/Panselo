@echo off

REM Define the path to your game executable
set GAME_EXECUTABLE="Add Your Game Executable Directory Here"

REM Launch the game using the specified executable path
start "" %GAME_EXECUTABLE%

REM Pause briefly to allow the game to start (adjust the duration as needed)
timeout /t 5

REM Run the Discord Rich Presence code
node presence.js
