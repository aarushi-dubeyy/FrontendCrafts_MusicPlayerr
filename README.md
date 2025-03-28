Music Player 

A simple web-based music player that allows users to play, pause, navigate through songs, adjust volume, and seek within a track.

Features 
-Play/Pause songs
-Next/Previous track navigation
-Volume control with mute functionality
-Song progress bar with manual seeking
-Playlist sidebar with a blurred background
-Auto-play next song when the current one ends

Technologies Used 
HTML - For structuring the UI
CSS - For styling and applying effects like backdrop-filter
JavaScript - For handling audio playback and interactions

How It Works 
-Selecting Songs: Songs are stored in an array with attributes like name, path, image, and singer.
-Loading a Song: When a song is selected, its details (name, singer, image) are displayed, and the audio file is loaded.
-Playing and Pausing: Clicking the play button toggles between play and pause.
-Navigating Songs: Previous and next buttons allow cycling through the playlist.
-Volume Control: Adjusting the volume slider changes the audio volume, and muting updates the volume icon.
-Progress Bar & Seeking: The progress bar updates in real-time and allows users to seek within a song.
