 // rewards.js — manage stars/badges stored locally
const REWARDS_KEY = 'sunnykids_rewards_v1';
let rewardsState = loadRewards();

function loadRewards(){
  try{
    const raw = localStorage.getItem(REWARDS_KEY);
    return raw ? JSON.parse(raw) : {stars:0,badges:[]};
  } catch(e){ return {stars:0,badges:[]}; }
}
function saveRewards(){
  localStorage.setItem(REWARDS_KEY, JSON.stringify(rewardsState));
}

function addStar(n=1){
  rewardsState.stars = (rewardsState.stars || 0) + n;
  saveRewards();
  showRewards(); // refresh modal if open
}

function awardBadge(id,title){
  if(!rewardsState.badges.find(b=>b.id===id)){
    rewardsState.badges.push({id,title,date:Date.now()});
    saveRewards();
  }
}

function showRewards(){
  // simple modal created on demand
  let modal = document.getElementById('rewardsModal');
  if(!modal){
    modal = document.createElement('div');
    modal.id='rewardsModal';
    modal.style.position='fixed'; modal.style.inset='0'; modal.style.display='flex';
    modal.style.alignItems='center'; modal.style.justifyContent='center'; modal.style.background='rgba(0,0,0,0.35)';
    modal.innerHTML = `<div style="background:white;padding:18px;border-radius:12px;max-width:420px;width:90%">
      <h3 style="margin:6px 0">Your Rewards ⭐</h3>
      <div id="rewardsContent"></div>
      <div style="margin-top:12px;text-align:right">
        <button onclick="document.getElementById('rewardsModal').remove()" class="backBtn">Close</button>
      </div>
    </div>`;
    document.body.appendChild(modal);
  }
  const content = modal.querySelector('#rewardsContent');
  content.innerHTML = `<p>Stars: <strong>${rewardsState.stars}</strong></p>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      ${rewardsState.badges.map(b=>`<div style="padding:8px;border-radius:10px;background:#fffbe6">${b.title}</div>`).join('')}
    </div>`;
}
