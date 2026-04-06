const problems=[
  {id:'001',title:'Two Sum Array Mapping',    diff:'Easy',  acc:'48.2%',tags:['Arrays','Hash Table'],  done:'yes'},
  {id:'042',title:'Trapping Rain Water',      diff:'Hard',  acc:'22.5%',tags:['DP','Two Pointers'],    done:'no'},
  {id:'198',title:'House Robber II',          diff:'Medium',acc:'38.9%',tags:['DP','Recursion'],       done:'try'},
  {id:'207',title:'Course Schedule III',      diff:'Medium',acc:'41.2%',tags:['Graphs','BFS'],         done:'no'},
  {id:'084',title:'Largest Rectangle',        diff:'Hard',  acc:'19.8%',tags:['Stack','Arrays'],       done:'no'},
  {id:'021',title:'Merge Two Sorted Lists',   diff:'Easy',  acc:'62.1%',tags:['Linked List'],          done:'yes'},
  {id:'105',title:'Construct Binary Tree',    diff:'Medium',acc:'33.4%',tags:['Trees','DFS'],          done:'no'},
  {id:'322',title:'Coin Change',              diff:'Medium',acc:'29.7%',tags:['DP','BFS'],             done:'yes'},
];

function statusIcon(d){
  if(d==='yes') return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>`;
  if(d==='try') return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`;
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E1F23" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
}

function renderProbs(list){
  const c=document.getElementById('probList');
  c.innerHTML='';
  if(!list.length){c.innerHTML='<div style="padding:32px;text-align:center;color:#5a5956;font-size:13px;">No problems found</div>';return;}
  list.forEach(p=>{
    const bClass=p.diff==='Easy'?'b-e':p.diff==='Medium'?'b-m':'b-h';
    const tags=p.tags.map(t=>`<span class="tchip">${t}</span>`).join('');
    const row=document.createElement('a');
    row.href='problem.html';
    row.className='prob-row';
    row.innerHTML=`
      <span style="font-size:12px;color:#3a3b3f;font-family:'JetBrains Mono',monospace;">${p.id}</span>
      <span style="font-size:13px;font-weight:500;">${p.title}</span>
      <span><span class="${bClass}">${p.diff}</span></span>
      <span style="font-size:12px;color:#5a5956;">${p.acc}</span>
      <span>${tags}</span>
      <span style="display:flex;justify-content:center;">${statusIcon(p.done)}</span>
    `;
    c.appendChild(row);
  });
}

function filterP(level,btn){
  document.querySelectorAll('.fpill').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderProbs(level==='all'?problems:problems.filter(p=>p.diff===level));
}

// Search
document.getElementById('searchInput').addEventListener('input',function(){
  const q=this.value.toLowerCase();
  if(!q){renderProbs(problems);return;}
  renderProbs(problems.filter(p=>p.title.toLowerCase().includes(q)||p.tags.some(t=>t.toLowerCase().includes(q))));
});

renderProbs(problems);

// ================================
// HEATMAP — GitHub style
// 52 weeks × 7 days = 364 cells
// ================================
function buildHeatmap(){
  const grid=document.getElementById('heatmapGrid');
  const months=document.getElementById('monthLabels');
  const tooltip=document.getElementById('heatTooltip');

  const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const today=new Date();

  // 52 columns (weeks), 7 rows (days)
  const cols=52;
  let lastMonth=-1;
  let monthHTML='';

  for(let w=0;w<cols;w++){
    const col=document.createElement('div');
    col.style.cssText='display:flex;flex-direction:column;gap:3px;';

    for(let d=0;d<7;d++){
      // Kitne din pehle tha yeh cell
      const daysAgo=(cols-1-w)*7+(6-d);
      const date=new Date(today);
      date.setDate(today.getDate()-daysAgo);

      // Random activity level (0-4)
      // Recent weeks mein zyada activity
      let level=0;
      const rand=Math.random();
      const recency=1-daysAgo/364; // recent = higher chance
      if(rand<recency*0.6) level=Math.floor(Math.random()*4)+1;

      const cell=document.createElement('div');
      cell.className=`heat-cell heat-${level}`;

      // Tooltip on hover
      const dateStr=date.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
      const count=level===0?0:level===1?1:level===2?2:level===3?4:7;
      cell.addEventListener('mousemove',e=>{
        tooltip.style.opacity='1';
        tooltip.style.left=(e.clientX+12)+'px';
        tooltip.style.top=(e.clientY-28)+'px';
        tooltip.textContent=`${count} problem${count!==1?'s':''} · ${dateStr}`;
      });
      cell.addEventListener('mouseleave',()=>{tooltip.style.opacity='0';});

      col.appendChild(cell);

      // Month label — pehle week mein show karo
      if(d===0){
        const m=date.getMonth();
        if(m!==lastMonth){
          lastMonth=m;
          monthHTML+=`<span style="font-size:9px;color:#3a3b3f;min-width:28px;">${monthNames[m]}</span>`;
        } else {
          monthHTML+=`<span style="min-width:28px;"></span>`;
        }
      }
    }
    grid.appendChild(col);
  }
  months.innerHTML=monthHTML;
}

buildHeatmap();

// ================================
// SKILL BARS — Sidebar
// ================================
const skills=[
  {name:'Dynamic Programming',pct:94},
  {name:'Arrays & Hashing',   pct:88},
  {name:'Graphs & Trees',     pct:76},
  {name:'System Design',      pct:58},
];

const skillContainer=document.getElementById('skillBars');
skills.forEach(s=>{
  skillContainer.innerHTML+=`
    <div style="margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
        <span style="font-size:11px;color:#5a5956;">${s.name}</span>
        <span style="font-size:10px;color:#3a3b3f;">${s.pct}%</span>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" style="width:0%;" data-pct="${s.pct}"></div>
      </div>
    </div>
  `;
});

// Animate skill bars on load
setTimeout(()=>{
  document.querySelectorAll('.skill-bar-fill').forEach(bar=>{
    bar.style.width=bar.dataset.pct+'%';
  });
},400);

// Weekly progress animate
setTimeout(()=>{
  document.getElementById('weekProg').style.width='60%';
},500);
