  // ===============================
 // AUDIO UNLOCK (REQUIRED FOR CHROME)
 // ===============================

 let audioCtx = null;

 function initAudio() {
   if (!audioCtx) {
     audioCtx = new (window.AudioContext || window.webkitAudioContext)();
   }

   if (audioCtx.state === "suspended") {
     audioCtx.resume();
   }

   // Resume speech engine
   if (window.speechSynthesis) {
     speechSynthesis.resume();
   }
 }

 // Unlock audio on first interaction
 document.addEventListener("click", initAudio, { once: true });
 document.addEventListener("touchstart", initAudio, { once: true });
 const music = document.getElementById("bgMusic");
 const muteBtn = document.getElementById("muteBtn");
document.getElementById("pauseBtn").onclick = function () {
    music.pause();
};
 muteBtn.addEventListener("click", function () {

     music.muted = !music.muted;

     if (music.muted) {
         muteBtn.textContent = "🔊 Unmute";
     } else {
         muteBtn.textContent = "🔇 Mute";
     }

 });