        /* ---------- SPEAK FUNCTION ---------- */
 function speakTelugu(text) {
   speechSynthesis.cancel(); // stop previous
   const msg = new SpeechSynthesisUtterance(text);
   msg.lang = "te-IN";
   msg.rate = 0.9;
   msg.pitch = 1;
   speechSynthesis.speak(msg);
 }
 // ---------------- VOWELS ----------------
 const VOWELS = [
   {l:"అ", w:"అమ్మ", img:"amma.png"},
   {l:"ఆ", w:"ఆవు", img:"cow.png"},
   {l:"ఇ", w:"ఇల్లు", img:"house.png"},
   {l:"ఈ", w:"ఈగ", img:"housefly.png"},
   {l:"ఉ", w:"ఉడుత", img:"squirrel.png"},
   {l:"ఊ", w:"ఊయల", img:"cradle.png"},
   {l:"ఋ", w:"ఋషి", img:"sage.png"},
   {l:"ౠ", w:"ౠ", img:"letter.jpeg"},
   {l:"ఎ", w:"ఎలుక", img:"rat.png"},
   {l:"ఏ", w:"ఏనుగు", img:"elephant.png"},
   {l:"ఐ", w:"ఐస్‌క్రీం", img:"icecream.png"},
   {l:"ఒ", w:"ఒంటె", img:"camel.png"},
   {l:"ఓ", w:"ఓడ", img:"boat.png"},
   {l:"ఔ", w:"ఔషధం", img:"medicine.png"},
   {l:"అం", w:"అంకెలు", img:"numbers.png"},
   {l:"అః", w:"అంతఃపురం", img:"mahal.png"},
 ];

 // ---------------- CONSONANTS ----------------
 const CONSONANTS = [
   {l:"క", w:"కలశం", img:"kalasham.png"},
   {l:"ఖ", w:"ఖడ్గం", img:"weapon.png"},
   {l:"గ", w:"గడియారం", img:"clock.png"},
   {l:"ఘ", w:"ఘంట", img:"bell.png"},
   {l:"ఙ", w:"ఙ్ఞానము", img:"knowledge.png"},
   {l:"చ", w:"చదరంగం", img:"chess.png"},
   {l:"ఛ", w:"ఛత్రము", img:"umbrella.png"},
   {l:"జ", w:"జడ", img:"hair.png"},
   {l:"ఝ", w:"ఝషము", img:"fish.png"},
   {l:"ఞ", w:"ఞ", img:"letter2.png"},
   {l:"ట", w:"టమాట", img:"tomato.png"},
   {l:"ఠ", w:" కంఠము", img:"throat.png"},
   {l:"డ", w:"డమరుకం", img:"damaru.png"},
   {l:"ఢ", w:" ఢంకా", img:"drum.png"},
   {l:"ణ", w:" బాణము", img:"bhanam.png"},
   {l:"త", w:"తల", img:"head.png"},
   {l:"థ", w:" రథము", img:"ratham.png"},
   {l:"ద", w:" దండ", img:"dhanda.png"},
   {l:"ధ", w:"ధనియాలు", img:"dhaniyalu.png"},
   {l:"న", w:" నక్క", img:"fox.png"},
   {l:"ప", w:"పంట", img:"crops.png"},
   {l:"ఫ", w:"ఫలము ", img:"fruits.png"},
   {l:"బ", w:"బలపం", img:"slatepencil.png"},
   {l:"భ", w:"భల్లూకము ", img:"bear.png"},
   {l:"మ", w:"మల్లెలు ", img:"jasmine.png"},
   {l:"య", w:"యజ్ఞం", img:"yagnam.png"},
   {l:"ర", w:" రథం", img:"ratham.png"},
   {l:"ల", w:"లత ", img:"latha.png"},
   {l:"వ", w:" వంకాయ", img:"brinjal.png"},
   {l:"శ", w:"శంఖము ", img:"shankamu.png"},
   {l:"ష", w:"షట్పదం", img:"bee.png"},
   {l:"స", w:"సంచి", img:"bag.png"},
   {l:"హ", w:"హంస", img:"swan.png"},
   {l:"ళ", w:"తాళము", img:"lock.png"},
   {l:"క్ష", w:"క్షత్రియుడు", img:"warrior.png"},
   {l:"ఱ", w:"ఱంపము", img:"hacksaw.png"},
 ];

 // ---------------- GUNINTHALU ----------------
 const GUNINTHALU = [
   {l:"క", w:"కలము", img:"pen.png"},
   {l:"కా", w:"కాగితం", img:"paper.png"},
   {l:"కి", w:"కిటికీ ", img:"window.png"},
   {l:"కీ", w:"కీటకం ", img:"insect.png"},
   {l:"కు", w:"కుక్క ", img:"dog.png"},
   {l:"కూ", w:"కూర", img:"curry.png"},
   {l:"కృ", w:"కృష్ణుడు", img:"krishna.png"},
   {l:"కౄ", w:"క్రూరం ", img:"cruel.png"},
   {l:"కె", w:"కెంపు ", img:"red.png"},
   {l:"కే", w:"కేశములు ", img:"hair1.png"},
   {l:"కై", w:"కైలాసం", img:"mountain.png"},
   {l:"కొ", w:"కొబ్బరి ", img:"coconut.png"},
   {l:"కో", w:"కోతి", img:"monkey.png"},
   {l:"కౌ", w:"కౌముది", img:"moonlight.png"},
   {l:"కం", w:"కంకణం", img:"kankanam.png"},
   {l:"కః", w:"కః", img:"letter3.png"},

 ];

  /* ---------- CREATE CARDS ---------- */
 function loadCards(list, elementId) {
   const container = document.getElementById(elementId);
   container.innerHTML = "";

   list.forEach(item => {
     const card = document.createElement("div");
     card.className = "card";

     card.innerHTML = `
       <div class="letter">${item.l}</div>
  <img src="../images/${item.img}" alt="">
       <div class="word">${item.w}</div>
     `;

     card.onclick = () => speakTelugu(item.w);
     container.appendChild(card);
   });
 }

 /* ---------- LOAD ON PAGE ---------- */
 document.addEventListener("DOMContentLoaded", () => {
   loadCards(VOWELS, "vowels");
   loadCards(CONSONANTS, "consonants");
   loadCards(GUNINTHALU, "guninthalu");
 });

 /* ---------- SPEAK ONE BY ONE ---------- */
 function speakList(list) {
   let i = 0;
   speechSynthesis.cancel();

   function next() {
     if (i < list.length) {
       const msg = new SpeechSynthesisUtterance(list[i].w);
       msg.lang = "te-IN";
       msg.rate = 0.9;
       msg.onend = next;
       speechSynthesis.speak(msg);
       i++;
     }
   }
   next();
 }

 function playVowels() {
   speakList(VOWELS);
 }

 function playConsonants() {
   speakList(CONSONANTS);
 }

 function playGuninthalu() {
   speakList(GUNINTHALU);
 }
