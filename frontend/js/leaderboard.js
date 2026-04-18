const users=[
  {rank:1,  name:'NovaSurge',   init:'N', solved:1612,streak:92, xp:48200,tier:'Grandmaster',me:false},
  {rank:2,  name:'ZephyrX',     init:'Z', solved:1389,streak:67, xp:41500,tier:'Grandmaster',me:false},
  {rank:3,  name:'KairosDev',   init:'K', solved:1301,streak:54, xp:38900,tier:'Master',     me:false},
  {rank:4,  name:'PixelMind',   init:'P', solved:1287,streak:48, xp:36200,tier:'Master',     me:false},
  {rank:5,  name:'StellarByte', init:'S', solved:1201,streak:41, xp:34100,tier:'Master',     me:false},
  {rank:6,  name:'VoidCoder',   init:'V', solved:1189,streak:38, xp:32800,tier:'Master',     me:false},
  {rank:7,  name:'LunaScript',  init:'L', solved:1143,streak:35, xp:30200,tier:'Diamond',    me:false},
  {rank:8,  name:'OrbitalDev',  init:'O', solved:1098,streak:29, xp:28900,tier:'Diamond',    me:false},
  {rank:9,  name:'QuantumBit',  init:'Q', solved:1034,streak:24, xp:26700,tier:'Diamond',    me:false},
  {rank:10, name:'HexForge',    init:'H', solved:988, streak:21, xp:24100,tier:'Diamond',    me:false},
  {rank:428,name:'Dev_X (You)', init:'A', solved:1402,streak:48, xp:12450,tier:'Master',     me:true},
];

const tierColors={Grandmaster:'#F87171',Master:'#C9B99A',Diamond:'#60A5FA',Gold:'#FBBF24'};

function rankBadge(r){
  if(r===1) return '🥇';
  if(r===2) return '🥈';
  if(r===3) return '🥉';
  return `<span style="font-family:'JetBrains Mono',monospace;font-size:13px;color:#5a5956;">#${r}</span>`;
}

function renderLB(list){
  const c=document.getElementById('lbList');c.innerHTML='';
  list.forEach(u=>{
    const tc=tierColors[u.tier]||'#8A8780';
    const row=document.createElement('div');
    row.className=`lb-row${u.me?' me':''}`;
    row.innerHTML=`
      <span style="text-align:center;">${rankBadge(u.rank)}</span>
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="width:32px;height:32px;border-radius:50%;background:#1a1b1f;border:1px solid ${u.me?'#C9B99A':'#1a1b1f'};display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:${u.me?'#C9B99A':'#8A8780'};flex-shrink:0;">${u.init}</div>
        <div>
          <p style="font-size:13px;font-weight:${u.me?'700':'500'};color:${u.me?'#C9B99A':'#F5F0E8'};">${u.name}</p>
        </div>
      </div>
      <span style="font-size:13px;font-weight:600;">${u.solved.toLocaleString()}</span>
      <span style="font-size:13px;color:#8A8780;">🔥 ${u.streak}</span>
      <span style="font-size:13px;color:#C9B99A;font-family:'JetBrains Mono',monospace;">${u.xp.toLocaleString()}</span>
      <span style="font-size:11px;font-weight:600;color:${tc};">${u.tier}</span>
    `;
    c.appendChild(row);
    if(u.rank===10&&!list.find(x=>x.me)){
      const sep=document.createElement('div');
      sep.style.cssText='padding:10px 20px;text-align:center;color:#3a3b3f;font-size:11px;border-bottom:1px solid #0f1012;letter-spacing:1px;';
      sep.textContent='· · ·';
      c.appendChild(sep);
    }
  });
}

function switchPeriod(p,btn){
  document.querySelectorAll('.period-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  // Shuffle slightly for different periods
  const shuffled=[...users].sort(()=>Math.random()-0.45);
  renderLB(shuffled);
}

renderLB(users);