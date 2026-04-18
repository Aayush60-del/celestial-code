        // Skills data
        const skills = [
            { name: 'Dynamic Programming', pct: 94 }, { name: 'Concurrent Systems', pct: 88 },
            { name: 'Graphs & Trees', pct: 82 }, { name: 'Data Structures', pct: 91 },
            { name: 'System Design', pct: 68 }, { name: 'Algorithms', pct: 76 },
        ];
        const sg = document.getElementById('skillsGrid');
        skills.forEach(s => {
            sg.innerHTML += `<div>
    <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
      <span style="font-size:11px;color:#5a5956;text-transform:uppercase;letter-spacing:0.5px;">${s.name}</span>
      <span style="font-size:11px;color:#3a3b3f;">${s.pct}%</span>
    </div>
    <div class="skill-bar-bg"><div class="skill-bar-fill" data-pct="${s.pct}"></div></div>
  </div>`;
        });
        setTimeout(() => document.querySelectorAll('.skill-bar-fill').forEach(b => b.style.width = b.dataset.pct + '%'), 300);

        // Badges
        const badges = [
            { icon: '🏆', name: 'Elite 100', locked: false },
            { icon: '🔥', name: 'Pyromancer', locked: false },
            { icon: '⚔️', name: 'Hard Core', locked: false },
            { icon: '🌟', name: '???', locked: true },
            { icon: '🚀', name: '???', locked: true },
            { icon: '💎', name: '???', locked: true },
        ];
        const bg = document.getElementById('badgesGrid');
        badges.forEach(b => {
            bg.innerHTML += `<div style="text-align:center;">
    <div class="badge-icon ${b.locked ? 'locked' : ''}" style="margin:0 auto 6px;background:#111215;">${b.locked ? '🔒' : b.icon}</div>
    <p style="font-size:10px;color:${b.locked ? '#3a3b3f' : '#8A8780'};">${b.name}</p>
  </div>`;
        });

        // Submissions
        const subs = [
            { lang: 'C', title: '421. Maximum XOR of Two Numbers in an Array', diff: 'Hard', runtime: '12ms', memory: '42.8 MB', status: 'Accepted', time: '2H AGO' },
            { lang: 'R', title: '15. 3Sum Closest', diff: 'Medium', runtime: '8ms', memory: '3.2 MB', status: 'Accepted', time: '5H AGO' },
            { lang: 'C', title: '70. Climbing Stairs', diff: 'Easy', runtime: '0ms', memory: '6.1 MB', status: 'Accepted', time: 'YESTERDAY' },
            { lang: 'W', title: '42. Trapping Rain Water', diff: 'Hard', runtime: '—', memory: '—', status: 'Wrong', time: '2 DAYS AGO' },
            { lang: 'C', title: '198. House Robber', diff: 'Medium', runtime: '4ms', memory: '8.3 MB', status: 'Accepted', time: '3 DAYS AGO' },
        ];
        function renderSubs(list) {
            const c = document.getElementById('subsList'); c.innerHTML = '';
            list.forEach(s => {
                const isW = s.status === 'Wrong';
                const bClass = s.diff === 'Easy' ? 'b-e' : s.diff === 'Medium' ? 'b-m' : 'b-h';
                c.innerHTML += `<a href="problem.html" class="sub-row">
      <div style="width:28px;height:28px;border-radius:6px;background:${isW ? 'rgba(248,113,113,0.1)' : 'rgba(74,222,128,0.1)'};border:1px solid ${isW ? 'rgba(248,113,113,0.2)' : 'rgba(74,222,128,0.2)'};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:${isW ? '#F87171' : '#4ADE80'};">${s.lang}</div>
      <div>
        <p style="font-size:13px;font-weight:500;margin-bottom:2px;">${s.title}</p>
        <p style="font-size:10px;color:#5a5956;letter-spacing:1px;">${s.time} · <span style="color:${isW ? '#F87171' : '#4ADE80'}">${s.status}</span></p>
      </div>
      <span><span class="${bClass}">${s.diff}</span></span>
      <span style="font-size:12px;color:#5a5956;font-family:'JetBrains Mono',monospace;">${s.runtime}</span>
      <span style="font-size:12px;color:#5a5956;font-family:'JetBrains Mono',monospace;">${s.memory}</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3a3b3f" stroke-width="2"><polyline points="9,18 15,12 9,6"/></svg>
    </a>`;
            });
        }
        function filterSubs(type, btn) {
            document.querySelectorAll('[onclick^="filterSubs"]').forEach(b => { b.style.borderColor = '#1a1b1f'; b.style.background = 'transparent'; b.style.color = '#5a5956'; });
            btn.style.borderColor = '#C9B99A'; btn.style.background = 'rgba(201,185,154,0.06)'; btn.style.color = '#F5F0E8';
            renderSubs(type === 'all' ? subs : subs.filter(s => s.status === type));
        }
        renderSubs(subs);

        // Heatmap
      const heatmap = document.getElementById("heatmap");
const monthsDiv = document.getElementById("months");

const today = new Date();

// 👉 LeetCode style: last 1 year BUT week aligned
const startDate = new Date();
startDate.setFullYear(today.getFullYear() - 1);

// move startDate to previous Monday
let day = startDate.getDay();
let diff = (day === 0 ? -6 : 1 - day);
startDate.setDate(startDate.getDate() + diff);

// generate all days till today
let data = [];
let current = new Date(startDate);

while (current <= today) {
  data.push({
    date: new Date(current),
    count: Math.random() < 0.95 ? 0 : Math.floor(Math.random() * 4) + 1
  });
  current.setDate(current.getDate() + 1);
}

// group into weeks (columns)
let weeks = [];
for (let i = 0; i < data.length; i += 7) {
  weeks.push(data.slice(i, i + 7));
}

// render heatmap
weeks.forEach(week => {
  const col = document.createElement("div");
  col.style.display = "flex";
  col.style.flexDirection = "column";
  col.style.gap = "4px";

  week.forEach(day => {
    const cell = document.createElement("div");
    cell.className = "heat-cell";

    if (day.count > 0) {
      cell.classList.add("heat-" + day.count);
    }

    col.appendChild(cell);
  });

  heatmap.appendChild(col);
});


// ✅ MONTH LABELS (accurate like LeetCode)
let lastMonth = -1;

weeks.forEach((week, i) => {
  const firstDay = week[0];
  const month = firstDay.date.getMonth();

  const label = document.createElement("div");
  label.style.width = "15px";
  label.style.fontSize = "10px";
  label.style.color = "#5a5956";

  if (month !== lastMonth) {
    label.innerText = firstDay.date.toLocaleString("default", { month: "short" });
    lastMonth = month;
  }

  monthsDiv.appendChild(label);
});
