 
/* =====================================
   FUNNYKIDS - SOUNDS.JS
   Background Music Controls
===================================== */

// AUDIO UNLOCK

let audioCtx = null;

function initAudio() {

    if (!audioCtx) {
        const AudioContextClass =
            window.AudioContext || window.webkitAudioContext;

        if (AudioContextClass) {
            audioCtx = new AudioContextClass();
        }
    }

    // Resume audio context
    if (audioCtx && audioCtx.state === "suspended") {
        audioCtx.resume().catch(error => {
            console.log("Audio context error:", error);
        });
    }

    // Resume speech synthesis
    if ("speechSynthesis" in window) {
        speechSynthesis.resume();
    }
}


// UNLOCK AUDIO AFTER USER INTERACTION

document.addEventListener("click", initAudio, { once: true });

document.addEventListener("touchstart", initAudio, { once: true });


// =====================================
// BACKGROUND MUSIC CONTROLS
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("bgMusic");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const muteBtn = document.getElementById("muteBtn");


    // CHECK MUSIC ELEMENT

    if (!music) {
        console.error("Background music element not found!");
        return;
    }


    // PLAY MUSIC

    if (playBtn) {

        playBtn.addEventListener("click", function () {

            initAudio();

            music.play()
                .then(() => {
                    console.log("Background music started.");
                })
                .catch(error => {
                    console.error("Music playback failed:", error);
                });

        });

    }


    // PAUSE MUSIC

    if (pauseBtn) {

        pauseBtn.addEventListener("click", function () {

            music.pause();

            console.log("Background music paused.");

        });

    }


    // MUTE AND UNMUTE MUSIC

    if (muteBtn) {

        muteBtn.addEventListener("click", function () {

            music.muted = !music.muted;

            if (music.muted) {

                muteBtn.textContent = "🔊 Unmute";

            } else {

                muteBtn.textContent = "🔇 Mute";

            }

        });

    }

});
