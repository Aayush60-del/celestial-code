  const allProblems = [
            { id: '001', title: 'Two Sum', diff: 'Easy', acc: '49.2%', tags: ['Arrays', 'Hash Table'], done: 'yes', tracks: ['dsa', 'interview'] },
            { id: '002', title: 'Add Two Numbers', diff: 'Medium', acc: '39.1%', tags: ['Linked List'], done: 'yes', tracks: ['dsa'] },
            { id: '003', title: 'Longest Substring', diff: 'Medium', acc: '33.8%', tags: ['Sliding Window'], done: 'try', tracks: ['dsa', 'interview'] },
            { id: '004', title: 'Median of Two Sorted Arrays', diff: 'Hard', acc: '36.1%', tags: ['Binary Search', 'DP'], done: 'no', tracks: ['dsa'] },
            { id: '005', title: 'Longest Palindromic Substring', diff: 'Medium', acc: '32.4%', tags: ['DP', 'Strings'], done: 'no', tracks: ['dsa', 'interview'] },
            { id: '011', title: 'Container With Most Water', diff: 'Medium', acc: '54.0%', tags: ['Two Pointers'], done: 'yes', tracks: ['dsa', 'interview'] },
            { id: '015', title: '3Sum', diff: 'Medium', acc: '32.2%', tags: ['Two Pointers', 'Arrays'], done: 'no', tracks: ['dsa', 'interview'] },
            { id: '017', title: 'Letter Combinations of Phone', diff: 'Medium', acc: '55.6%', tags: ['Backtracking'], done: 'no', tracks: ['dsa'] },
            { id: '019', title: 'Remove Nth Node From End', diff: 'Medium', acc: '39.5%', tags: ['Linked List'], done: 'try', tracks: ['dsa'] },
            { id: '020', title: 'Valid Parentheses', diff: 'Easy', acc: '40.7%', tags: ['Stack', 'Strings'], done: 'yes', tracks: ['dsa', 'interview'] },
            { id: '021', title: 'Merge Two Sorted Lists', diff: 'Easy', acc: '62.1%', tags: ['Linked List'], done: 'yes', tracks: ['dsa'] },
            { id: '023', title: 'Merge k Sorted Lists', diff: 'Hard', acc: '47.9%', tags: ['Linked List', 'Heap'], done: 'no', tracks: ['dsa', 'interview'] },
            { id: '033', title: 'Search in Rotated Sorted Array', diff: 'Medium', acc: '38.4%', tags: ['Binary Search'], done: 'no', tracks: ['dsa', 'interview'] },
            { id: '042', title: 'Trapping Rain Water', diff: 'Hard', acc: '57.2%', tags: ['DP', 'Two Pointers'], done: 'no', tracks: ['dsa', 'interview'] },
            { id: '046', title: 'Permutations', diff: 'Medium', acc: '73.6%', tags: ['Backtracking'], done: 'yes', tracks: ['dsa'] },
            { id: '048', title: 'Rotate Image', diff: 'Medium', acc: '70.5%', tags: ['Arrays', 'Matrix'], done: 'no', tracks: ['dsa'] },
            { id: '049', title: 'Group Anagrams', diff: 'Medium', acc: '65.9%', tags: ['Hash Table', 'Strings'], done: 'yes', tracks: ['dsa', 'interview'] },
            { id: '053', title: 'Maximum Subarray', diff: 'Medium', acc: '49.7%', tags: ['DP', 'Arrays'], done: 'yes', tracks: ['dsa', 'interview'] },
            { id: '056', title: 'Merge Intervals', diff: 'Medium', acc: '45.8%', tags: ['Sorting', 'Arrays'], done: 'no', tracks: ['dsa', 'interview'] },
            { id: '070', title: 'Climbing Stairs', diff: 'Easy', acc: '51.5%', tags: ['DP'], done: 'yes', tracks: ['dsa', 'interview'] },
            { id: '072', title: 'Edit Distance', diff: 'Hard', acc: '52.4%', tags: ['DP', 'Strings'], done: 'no', tracks: ['dsa'] },
            { id: '076', title: 'Minimum Window Substring', diff: 'Hard', acc: '40.7%', tags: ['Sliding Window'], done: 'no', tracks: ['dsa', 'interview'] },
            { id: '084', title: 'Largest Rectangle in Histogram', diff: 'Hard', acc: '41.7%', tags: ['Stack', 'Arrays'], done: 'no', tracks: ['dsa'] },
            { id: '098', title: 'Validate Binary Search Tree', diff: 'Medium', acc: '31.9%', tags: ['Trees', 'DFS'], done: 'try', tracks: ['dsa'] },
            { id: '102', title: 'Binary Tree Level Order', diff: 'Medium', acc: '64.9%', tags: ['Trees', 'BFS'], done: 'yes', tracks: ['dsa', 'interview'] },
            { id: '104', title: 'Maximum Depth of Binary Tree', diff: 'Easy', acc: '73.5%', tags: ['Trees', 'DFS'], done: 'yes', tracks: ['dsa'] },
            { id: '121', title: 'Best Time to Buy and Sell Stock', diff: 'Easy', acc: '52.6%', tags: ['DP', 'Arrays'], done: 'yes', tracks: ['dsa', 'interview'] },
            { id: '124', title: 'Binary Tree Maximum Path Sum', diff: 'Hard', acc: '37.9%', tags: ['Trees', 'DP'], done: 'no', tracks: ['dsa'] },
            { id: '141', title: 'Linked List Cycle', diff: 'Easy', acc: '46.3%', tags: ['Linked List', 'Two Pointers'], done: 'yes', tracks: ['dsa', 'interview'] },
            { id: '152', title: 'Maximum Product Subarray', diff: 'Medium', acc: '34.5%', tags: ['DP', 'Arrays'], done: 'no', tracks: ['dsa', 'interview'] },
            { id: '153', title: 'Find Minimum in Rotated Array', diff: 'Medium', acc: '47.9%', tags: ['Binary Search'], done: 'no', tracks: ['dsa'] },
            { id: '198', title: 'House Robber', diff: 'Medium', acc: '49.8%', tags: ['DP'], done: 'yes', tracks: ['dsa', 'interview'] },
            { id: '200', title: 'Number of Islands', diff: 'Medium', acc: '55.7%', tags: ['Graphs', 'BFS', 'DFS'], done: 'try', tracks: ['dsa', 'interview'] },
            { id: '206', title: 'Reverse Linked List', diff: 'Easy', acc: '73.6%', tags: ['Linked List'], done: 'yes', tracks: ['dsa', 'interview'] },
            { id: '207', title: 'Course Schedule', diff: 'Medium', acc: '45.8%', tags: ['Graphs', 'BFS'], done: 'no', tracks: ['dsa'] },
            { id: '210', title: 'Course Schedule II', diff: 'Medium', acc: '47.3%', tags: ['Graphs', 'Topological Sort'], done: 'no', tracks: ['dsa'] },
            { id: '226', title: 'Invert Binary Tree', diff: 'Easy', acc: '73.9%', tags: ['Trees'], done: 'yes', tracks: ['dsa'] },
            { id: '230', title: 'Kth Smallest in BST', diff: 'Medium', acc: '70.8%', tags: ['Trees', 'DFS'], done: 'no', tracks: ['dsa'] },
            { id: '238', title: 'Product of Array Except Self', diff: 'Medium', acc: '64.3%', tags: ['Arrays'], done: 'yes', tracks: ['dsa', 'interview'] },
            { id: '242', title: 'Valid Anagram', diff: 'Easy', acc: '63.0%', tags: ['Hash Table', 'Strings'], done: 'yes', tracks: ['dsa', 'interview', 'js'] },
            { id: '252', title: 'Meeting Rooms', diff: 'Easy', acc: '56.8%', tags: ['Sorting', 'Arrays'], done: 'no', tracks: ['interview'] },
            { id: '261', title: 'Graph Valid Tree', diff: 'Medium', acc: '44.7%', tags: ['Graphs', 'Union Find'], done: 'no', tracks: ['dsa', 'interview'] },
            { id: '295', title: 'Find Median from Data Stream', diff: 'Hard', acc: '50.8%', tags: ['Heap', 'Design'], done: 'no', tracks: ['dsa', 'interview'] },
            { id: '300', title: 'Longest Increasing Subsequence', diff: 'Medium', acc: '52.3%', tags: ['DP', 'Binary Search'], done: 'no', tracks: ['dsa', 'interview'] },
            { id: '322', title: 'Coin Change', diff: 'Medium', acc: '43.1%', tags: ['DP', 'BFS'], done: 'yes', tracks: ['dsa', 'interview'] },
            { id: '329', title: 'Longest Increasing Path in Matrix', diff: 'Hard', acc: '52.8%', tags: ['Graphs', 'DP', 'DFS'], done: 'no', tracks: ['dsa'] },
            { id: '347', title: 'Top K Frequent Elements', diff: 'Medium', acc: '64.9%', tags: ['Heap', 'Hash Table'], done: 'yes', tracks: ['dsa', 'interview'] },
            { id: '355', title: 'Design Twitter', diff: 'Medium', acc: '35.4%', tags: ['Design', 'Hash Table'], done: 'no', tracks: ['interview', 'system'] },
            { id: '371', title: 'Sum of Two Integers', diff: 'Medium', acc: '50.5%', tags: ['Bit Manipulation'], done: 'no', tracks: ['dsa'] },
            { id: '417', title: 'Pacific Atlantic Water Flow', diff: 'Medium', acc: '52.4%', tags: ['Graphs', 'BFS', 'DFS'], done: 'no', tracks: ['dsa'] },
        ];

        // ================================
        // DAILY CHALLENGE  (FIX 1: defined at top level so renderTable can use it)
        // ================================
        function getDailyChallenge() {
            const today = new Date().toISOString().split('T')[0];
            const seed = today.replace(/-/g, '');
            const index = parseInt(seed) % allProblems.length;
            return allProblems[index];
        }

        const daily = getDailyChallenge();

        // ================================
        // STATE
        // ================================
        let activeTrack  = 'dsa';
        let activeDiff   = 'all';
        let activeTag    = 'all';
        let activeStatus = 'all';
        let searchQuery  = '';
        let currentPage  = 1;
        const PAGE_SIZE  = 15;

        // ================================
        // FILTER & RENDER
        // ================================
        function getFiltered() {
            let list = [...allProblems];
            if (activeTrack  !== 'all')    list = list.filter(p => p.tracks.includes(activeTrack));
            if (activeDiff   !== 'all')    list = list.filter(p => p.diff === activeDiff);
            if (activeTag    !== 'all')    list = list.filter(p => p.tags.includes(activeTag));
            if (activeStatus === 'solved')   list = list.filter(p => p.done === 'yes');
            if (activeStatus === 'unsolved') list = list.filter(p => p.done === 'no');
            if (searchQuery) list = list.filter(p =>
                p.title.toLowerCase().includes(searchQuery) ||
                p.tags.some(t => t.toLowerCase().includes(searchQuery))
            );
            return list;
        }

        function statusIcon(d) {
            if (d === 'yes') return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>`;
            if (d === 'try') return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`;
            return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E1F23" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
        }

        function renderTable() {
            const filtered = getFiltered();
            const paged    = filtered.slice(0, currentPage * PAGE_SIZE);

            document.getElementById('resultCount').textContent = filtered.length;

            const container = document.getElementById('problemTable');
            container.innerHTML = '';

            if (!paged.length) {
                container.innerHTML = '<div style="padding:40px;text-align:center;color:#5a5956;font-size:13px;">No problems found for this filter</div>';
                document.getElementById('loadMoreBtn').style.display = 'none';
                return;
            }

            paged.forEach((p, i) => {
                const bClass   = p.diff === 'Easy' ? 'b-e' : p.diff === 'Medium' ? 'b-m' : 'b-h';
                const tags     = p.tags.slice(0, 2).map(t =>
                    `<span style="font-size:10px;color:#5a5956;background:#0f1012;border:1px solid #1a1b1f;padding:2px 7px;border-radius:10px;display:inline-block;margin-right:3px;">${t}</span>`
                ).join('');

                // FIX 1: daily is now defined — highlight works correctly
                const isDaily  = p.id === daily.id;
                const dailyTag = isDaily ? `<span style="color:#22c55e;font-size:10px;margin-left:6px;">🔥 Daily</span>` : '';

                const row = document.createElement('a');
                row.href      = `problem.html?id=${p.id}`;
                row.className = 'prob-row';
                row.style.animationDelay = (i * 0.02) + 's';

                if (isDaily) {
                    row.style.border     = '1px solid #22c55e';
                    row.style.background = 'rgba(34,197,94,0.08)';
                }

                // FIX 2: removed the duplicate title <span> that appeared after the status icon
                row.innerHTML = `
                    <span style="font-size:11px;color:#3a3b3f;font-family:'JetBrains Mono',monospace;">${p.id}</span>
                    <span style="font-size:13px;font-weight:500;color:#F5F0E8;">${p.title}${dailyTag}</span>
                    <span><span class="${bClass}">${p.diff}</span></span>
                    <span style="font-size:12px;color:#5a5956;font-family:'JetBrains Mono',monospace;">${p.acc}</span>
                    <span>${tags}</span>
                    <span style="display:flex;justify-content:center;">${statusIcon(p.done)}</span>
                `;

                container.appendChild(row);
            });

            const btn = document.getElementById('loadMoreBtn');
            btn.style.display = paged.length >= filtered.length ? 'none' : 'block';
        }

        function loadMore() { currentPage++; renderTable(); }

        // ================================
        // TRACK FILTER
        // ================================
        function filterTrack(track, btn) {
            activeTrack = track; currentPage = 1;
            document.querySelectorAll('.celestial-badge').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTable();
        }

        // ================================
        // DIFFICULTY FILTER
        // ================================
        function filterDiff(diff, btn) {
            activeDiff = diff; currentPage = 1;
            document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTable();
        }

        // ================================
        // STATUS FILTER  (FIX 3: now updates active button state visually)
        // ================================
        function filterStatus(status, btn) {
            activeStatus = status; currentPage = 1;
            document.querySelectorAll('#statusBtns .diff-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTable();
        }

        // ================================
        // SORT
        // ================================
        function sortProblems(by) {
            if (by === 'acceptance')  allProblems.sort((a, b) => parseFloat(b.acc) - parseFloat(a.acc));
            else if (by === 'difficulty') {
                const order = { Easy: 0, Medium: 1, Hard: 2 };
                allProblems.sort((a, b) => order[a.diff] - order[b.diff]);
            } else {
                allProblems.sort((a, b) => parseInt(a.id) - parseInt(b.id));
            }
            renderTable();
        }

        // ================================
        // SEARCH
        // ================================
        document.getElementById('mainSearch').addEventListener('input', function () {
            searchQuery = this.value.toLowerCase().trim();
            currentPage = 1;
            renderTable();
        });

        // ================================
        // TAG FILTERS
        // ================================
        const allTags = ['Arrays','DP','Graphs','Trees','Linked List','Strings','Hash Table','Binary Search','Stack','BFS','DFS','Two Pointers','Backtracking','Design','Heap'];
        const tf = document.getElementById('tagFilters');
        allTags.forEach(tag => {
            const btn = document.createElement('button');
            btn.className = 'tag-pill';
            btn.textContent = tag;
            btn.onclick = function () {
                document.querySelectorAll('.tag-pill').forEach(b => b.classList.remove('active'));
                if (activeTag === tag) { activeTag = 'all'; }
                else { activeTag = tag; btn.classList.add('active'); }
                currentPage = 1; renderTable();
            };
            tf.appendChild(btn);
        });

        // ================================
        // STREAK CALENDAR
        // ================================
        let currentDate = new Date();

        function renderCalendar() {
            const grid  = document.getElementById('calendarGrid');
            const label = document.getElementById('monthLabel');
            const year  = currentDate.getFullYear();
            const month = currentDate.getMonth();

            const firstDay  = new Date(year, month, 1).getDay();
            const totalDays = new Date(year, month + 1, 0).getDate();

            const solvedData = JSON.parse(localStorage.getItem('streak') || '{}');
            const todayStr   = new Date().toISOString().split('T')[0];

            const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            label.innerText = `${months[month]} ${year}`;
            grid.innerHTML  = '';

            for (let i = 0; i < firstDay; i++) grid.innerHTML += `<div></div>`;

            for (let d = 1; d <= totalDays; d++) {
                const dateStr  = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
                const isSolved = solvedData[dateStr];
                const isToday  = dateStr === todayStr;

                let style = 'background:#111215;color:#5a5956;';
                if (isSolved) style = 'background:rgba(59,130,246,0.2);color:#60A5FA;position:relative;';
                if (isToday)  style = 'background:#22c55e;color:#08090A;font-weight:bold;';

                grid.innerHTML += `
                    <div class="sc-day" style="${style}">
                        ${d}
                        ${isSolved ? `<span style="position:absolute;font-size:8px;top:1px;right:2px;">✔</span>` : ''}
                    </div>`;
            }
        }

        function changeMonth(offset) {
            currentDate.setMonth(currentDate.getMonth() + offset);
            renderCalendar();
        }

        renderCalendar();

        // ================================
        // TRENDING COMPANIES
        // ================================
        const companies = ['Google','Meta','Amazon','Apple','Microsoft','Netflix','Uber','Stripe','Airbnb','ByteDance'];
        const comp = document.getElementById('companies');
        companies.forEach(c => {
            comp.innerHTML += `<button class="company-tag" onclick="document.getElementById('mainSearch').value='${c}';searchQuery='${c.toLowerCase()}';renderTable();">${c}</button>`;
        });

        // ================================
        // TOPIC MASTERY
        // ================================
        const topics = [
            { name: 'Arrays', pct: 88 },
            { name: 'Dynamic Programming', pct: 68 },
            { name: 'Graphs', pct: 45 },
            { name: 'Trees', pct: 72 },
            { name: 'Linked List', pct: 90 },
        ];
        const tm = document.getElementById('topicMastery');
        topics.forEach(t => {
            tm.innerHTML += `
                <div style="margin-bottom:10px;">
                    <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
                        <span style="font-size:11px;color:#5a5956;">${t.name}</span>
                        <span style="font-size:10px;color:#3a3b3f;">${t.pct}%</span>
                    </div>
                    <div style="background:#111215;border-radius:2px;height:3px;">
                        <div style="width:${t.pct}%;height:100%;background:#C9B99A;border-radius:2px;transition:width 1s ease;"></div>
                    </div>
                </div>`;
        });

        // ================================
        // INITIAL RENDER
        // ================================
        renderTable();