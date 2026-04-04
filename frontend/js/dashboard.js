 // ================================
    // PROBLEM DATA
    // Yeh baad mein MongoDB se aayega
    // Abhi hardcoded hai
    // ================================
    const problems = [
      { id:'001', title:'Two Sum Array Mapping',    difficulty:'Easy',   acceptance:'48.2%', tags:['Arrays','Hash Table'],    status:'solved'   },
      { id:'042', title:'Trapping Rain Water',      difficulty:'Hard',   acceptance:'22.5%', tags:['DP','Two Pointers'],      status:'unsolved' },
      { id:'198', title:'House Robber II',          difficulty:'Medium', acceptance:'38.9%', tags:['DP','Recursion'],         status:'attempted' },
      { id:'207', title:'Course Schedule III',      difficulty:'Medium', acceptance:'41.2%', tags:['Graphs','BFS'],           status:'unsolved' },
      { id:'084', title:'Largest Rectangle Histogram', difficulty:'Hard', acceptance:'19.8%', tags:['Stack','Arrays'],        status:'unsolved' },
      { id:'021', title:'Merge Two Sorted Lists',   difficulty:'Easy',   acceptance:'62.1%', tags:['Linked List'],           status:'solved'   },
      { id:'105', title:'Construct Binary Tree',    difficulty:'Medium', acceptance:'33.4%', tags:['Trees','DFS'],           status:'unsolved' },
      { id:'322', title:'Coin Change',              difficulty:'Medium', acceptance:'29.7%', tags:['DP','BFS'],              status:'solved'   },
    ];

    // Status icon dikhane ke liye
    // Har status ke liye alag icon
    function getStatusIcon(status) {
      if (status === 'solved') {
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>`;
      } else if (status === 'attempted') {
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`;
      } else {
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E1F23" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
      }
    }

    // Problems render karo
    function renderProblems(list) {
      const container = document.getElementById('problemList');
      container.innerHTML = ''; // pehle clear karo

      if (list.length === 0) {
        container.innerHTML = `<div style="padding:40px;text-align:center;color:#8A8780;">No problems found</div>`;
        return;
      }

      list.forEach(p => {
        const row = document.createElement('a');
        row.href = 'problem.html';
        row.className = 'problem-row';

        // Difficulty badge choose karo
        let badgeClass = 'badge-easy';
        if (p.difficulty === 'Medium') badgeClass = 'badge-medium';
        if (p.difficulty === 'Hard')   badgeClass = 'badge-hard';

        // Tags HTML banao
        const tagsHTML = p.tags.map(t => `<span class="tag-chip">${t}</span>`).join('');

        row.innerHTML = `
          <span style="font-size:13px;color:#8A8780;font-family:'JetBrains Mono',monospace;">${p.id}</span>
          <span style="font-size:14px;font-weight:500;color:#F5F0E8;">${p.title}</span>
          <span><span class="${badgeClass}">${p.difficulty}</span></span>
          <span style="font-size:13px;color:#8A8780;">${p.acceptance}</span>
          <span>${tagsHTML}</span>
          <span style="display:flex;justify-content:center;">${getStatusIcon(p.status)}</span>
        `;

        container.appendChild(row);
      });
    }

    // Filter karo
    function filterProblems(level, btn) {
      // Active button update karo
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter lagao
      if (level === 'all') {
        renderProblems(problems);
      } else {
        renderProblems(problems.filter(p => p.difficulty === level));
      }
    }

    // Pehli baar render
    renderProblems(problems);


    // ================================
    // SEARCH — problems filter karo
    // ================================
    document.getElementById('searchInput').addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();

      if (query === '') {
        renderProblems(problems);
        return;
      }

      // Title ya tags mein search karo
      const filtered = problems.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query)) ||
        p.difficulty.toLowerCase().includes(query)
      );

      renderProblems(filtered);
    });


    // ================================
    // BAR CHART — Weekly performance
    // Pure JS se banaya — koi library nahi
    // ================================
    const weekData = [
      { day: 'Mon', problems: 2,  isToday: false },
      { day: 'Tue', problems: 4,  isToday: false },
      { day: 'Wed', problems: 7,  isToday: true  }, // aaj
      { day: 'Thu', problems: 3,  isToday: false },
      { day: 'Fri', problems: 5,  isToday: false },
      { day: 'Sat', problems: 2,  isToday: false },
      { day: 'Sun', problems: 1,  isToday: false },
    ];

    const maxProblems = Math.max(...weekData.map(d => d.problems)); // sabse bada value

    const chartContainer = document.getElementById('barChart');

    weekData.forEach(data => {
      const heightPercent = (data.problems / maxProblems) * 100;

      const wrap = document.createElement('div');
      wrap.className = 'bar-wrap';

      // Aaj ka bar upar label dikhata hai
      const topLabel = document.createElement('span');
      topLabel.style.cssText = `font-size:11px;color:${data.isToday ? '#C9B99A' : '#8A8780'};`;
      topLabel.textContent = data.isToday ? data.day : '';

      const bar = document.createElement('div');
      bar.className = `bar ${data.isToday ? 'today' : ''}`;
      bar.style.height = '0%'; // start se 0 — animate hoga

      const label = document.createElement('span');
      label.className = 'bar-label';
      label.textContent = data.day;

      wrap.appendChild(topLabel);
      wrap.appendChild(bar);
      wrap.appendChild(label);
      chartContainer.appendChild(wrap);

      // Animation — thodi der baad actual height set karo
      setTimeout(() => {
        bar.style.height = heightPercent + '%';
        bar.style.transition = 'height 0.8s cubic-bezier(0.34,1.56,0.64,1)';
      }, 300);
    });


    // ================================
    // WEEKLY PROGRESS BAR ANIMATE
    // ================================
    setTimeout(() => {
      document.getElementById('weeklyProgress').style.width = '60%';
    }, 500);


    // ================================
    // NOTIFICATION TOGGLE
    // ================================
    function toggleNotif() {
      alert('Notifications: \n✅ Two Sum — Accepted!\n🏆 New badge unlocked: 7-day streak\n⚡ Daily challenge available');
    }
