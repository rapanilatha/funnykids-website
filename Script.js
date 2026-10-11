  // AUTO PLAY MUSIC AFTER CLICK (CHROME FIX)
 document.addEventListener("click", () => {
   const music = document.getElementById("bgMusic");
   if (music && music.paused) {
     music.play().catch(() => {});
   }

   // unlock speech also
   speechSynthesis.resume();
 }, { once: true });

 function openRewards() {
   showRewards();
 }
