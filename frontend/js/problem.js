let currentAIAction = '';

// ================================
// TAB SWITCHING — Left panel
// ================================
function switchTab(id, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + id).classList.add('active');
}

// ================================
// BOTTOM TAB SWITCHING
// ================================
function switchBTab(id, btn) {
  document.querySelectorAll('.btab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.btab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('btab-' + id).classList.add('active');
}

// ================================
// TEST CASE SELECTOR
// ================================
const testCases = [
  { input: '[[1,3,1],[1,5,1],[4,2,1]]', expected: '7' },
  { input: '[[1,2,3],[4,5,6]]',         expected: '12' },
  { input: '[[1]]',                     expected: '1' },
];

function selectCase(num, btn) {
  document.querySelectorAll('[onclick^="selectCase"]').forEach(b => {
    b.style.borderColor = '#1a1b1f';
    b.style.color = '#8A8780';
  });
  btn.style.borderColor = '#C9B99A';
  btn.style.color = '#F5F0E8';

  const tc = testCases[num - 1];
  document.getElementById('testInput').value   = tc.input;
  document.getElementById('expectedOutput').textContent = tc.expected;
}

// ================================
// RUN CODE — Fake execution
// ================================
function runCode() {
  const btn = document.getElementById('runBtn');
  btn.textContent = 'Running...';
  btn.disabled = true;

  // Switch to result tab
  switchBTab('result', document.querySelector('[onclick="switchBTab(\'result\',this)"]'));

  document.getElementById('bottomResult').innerHTML =
    `<div style="color:#5a5956;font-size:12px;display:flex;align-items:center;gap:8px;">
      <div style="width:12px;height:12px;border:2px solid #1a1b1f;border-top-color:#C9B99A;border-radius:50%;animation:spin 0.8s linear infinite;"></div>
      Executing...
    </div>`;

  setTimeout(() => {
    btn.textContent = 'Run';
    btn.disabled = false;

    // Show result
    document.getElementById('bottomResult').innerHTML = `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
        <span style="color:#4ADE80;font-size:13px;font-weight:600;">✓ Accepted</span>
        <span style="font-size:12px;color:#5a5956;">· Runtime: 45ms · Memory: 16.2MB</span>
      </div>
      <p style="font-size:11px;color:#5a5956;margin-bottom:4px;">Output:</p>
      <code style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#4ADE80;">7</code>
    `;

    // Console output
    document.getElementById('consoleOutput').innerHTML =
      `<span style="color:#5a5956;">&gt; </span><span style="color:#4ADE80;">Test passed: output = 7</span><br>
       <span style="color:#5a5956;">&gt; Runtime: 45ms | Memory: 16.2MB</span>`;

  }, 1800);
}

// ================================
// SUBMIT CODE
// Auto-switches to Submissions tab
// ================================
function submitCode() {
  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Submitting...';
  btn.disabled = true;
  btn.style.opacity = '0.7';

  // Simulate running
  setTimeout(() => {
    btn.textContent = 'Submit';
    btn.disabled = false;
    btn.style.opacity = '1';

    // Switch to submissions tab automatically
    const submitTabBtn = document.querySelector('[onclick="switchTab(\'submit\',this)"]');
    switchTab('submit', submitTabBtn);

    // Show result — randomly pass or fail for demo
    const passed = Math.random() > 0.4;
    showSubmissionResult(passed);

  }, 2000);
}

// ================================
// SHOW SUBMISSION RESULT
// ================================
function showSubmissionResult(passed) {
  document.getElementById('noSubmissions').style.display = 'none';
  document.getElementById('resultArea').style.display   = 'block';

  // Header
  const header = document.getElementById('resultHeader');
  if (passed) {
    header.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;padding:16px;background:rgba(74,222,128,0.05);border:1px solid rgba(74,222,128,0.15);border-radius:8px;margin-bottom:12px;">
        <div style="width:36px;height:36px;background:rgba(74,222,128,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>
        </div>
        <div>
          <p style="font-size:16px;font-weight:700;color:#4ADE80;">Accepted!</p>
          <p style="font-size:12px;color:#5a5956;">All test cases passed</p>
        </div>
        <div style="margin-left:auto;text-align:right;">
          <p style="font-size:12px;color:#5a5956;">Runtime: <span style="color:#F5F0E8;font-weight:600;">45ms</span></p>
          <p style="font-size:12px;color:#5a5956;">Memory: <span style="color:#F5F0E8;font-weight:600;">16.2 MB</span></p>
        </div>
      </div>
    `;

    // All green dots
    const dots = document.getElementById('testDots');
    dots.innerHTML = '';
    for (let i = 1; i <= 15; i++) {
      dots.innerHTML += `<div class="test-dot pass">✓</div>`;
    }

  } else {
    header.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;padding:16px;background:rgba(248,113,113,0.05);border:1px solid rgba(248,113,113,0.15);border-radius:8px;margin-bottom:12px;">
        <div style="width:36px;height:36px;background:rgba(248,113,113,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F87171" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </div>
        <div>
          <p style="font-size:16px;font-weight:700;color:#F87171;">Wrong Answer</p>
          <p style="font-size:12px;color:#5a5956;">Failed on Test Case 14/25</p>
        </div>
        <div style="margin-left:auto;text-align:right;">
          <p style="font-size:12px;color:#5a5956;">Runtime: <span style="color:#F5F0E8;">124ms</span></p>
          <p style="font-size:12px;color:#5a5956;">Memory: <span style="color:#F5F0E8;">42.8 MB</span></p>
        </div>
      </div>
    `;

    // Mixed dots
    const dots = document.getElementById('testDots');
    dots.innerHTML = '';
    for (let i = 1; i <= 13; i++) dots.innerHTML += `<div class="test-dot pass">✓</div>`;
    dots.innerHTML += `<div class="test-dot fail">✗</div>`;
    for (let i = 0; i < 5; i++)   dots.innerHTML += `<div class="test-dot pending">—</div>`;

    // Fail detail
    document.getElementById('failDetail').style.display  = 'block';
    document.getElementById('yourOutput').textContent    = 'false';

    // AI Insight
    document.getElementById('aiInsight').style.display  = 'block';
    document.getElementById('aiInsightText').textContent =
      'Your logic fails to account for revisited nodes in the weighted graph when the path limit is exactly equal to the cumulative edge weight. Check your inequality on line 8 — it should be <= instead of < to include the boundary case.';
  }
}

// ================================
// AI MODAL OPEN/CLOSE
// ================================
function openAI(action) {
  currentAIAction = action;
  const titles = {
    explain: 'Explain Code',
    hint:    'Get Hint',
    fix:     'Fix My Code'
  };
  document.getElementById('modalTitle').textContent    = titles[action];
  document.getElementById('modalResponse').style.display = 'none';
  document.getElementById('modalLoading').style.display  = 'none';
  document.getElementById('aiModal').classList.add('show');
}

function closeAI() {
  document.getElementById('aiModal').classList.remove('show');
}

// Close on backdrop click
document.getElementById('aiModal').addEventListener('click', function(e) {
  if (e.target === this) closeAI();
});

// ================================
// GET AI RESPONSE
// Abhi fake — baad mein real API call
// ================================
function getAIResponse(lang) {
  document.getElementById('modalLoading').style.display   = 'block';
  document.getElementById('modalResponse').style.display  = 'none';

  // Fake responses
  const responses = {
    explain: {
      english:  'This function uses Dynamic Programming to find the minimum path sum. We initialize base cases for the first row and column by accumulating sums. Then for each cell (i,j), dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1]). This ensures we always take the path with minimum energy cost.',
      hinglish: 'Bhai yeh function DP use kar raha hai minimum path nikalne ke liye. Pehle first row aur column mein running sum daalo. Phir har cell pe socho — upar se aana sasta hai ya left se? Jo bhi kam ho, woh lo. Simple hai!'
    },
    hint: {
      english:  'Hint Level 1: Think about what information you need at each cell to make an optimal decision. Hint Level 2: The minimum cost to reach cell (i,j) depends only on the cell above and the cell to the left. Hint Level 3: dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])',
      hinglish: 'Hint 1: Har cell pe sirf do option hain — upar se aao ya left se. Hint 2: Jo bhi sasta ho woh choose karo. Hint 3: dp[i][j] = grid[i][j] + min(upar ka cost, left ka cost). Try karo!'
    },
    fix: {
      english:  'Issue found: Your base case initialization is incomplete. You have correctly handled the first row, but the first column accumulation is missing. Add: for i in range(1, m): grid[i][0] += grid[i-1][0] before your main DP loop.',
      hinglish: 'Bhai bug mila! Tera first row toh sahi hai, par first column bhool gaya. Ek loop aur lagana hoga: for i in range(1, m): grid[i][0] += grid[i-1][0]. Yeh daaldo main loop se pehle, kaam ho jaayega!'
    }
  };

  setTimeout(() => {
    document.getElementById('modalLoading').style.display   = 'none';
    const resp = document.getElementById('modalResponse');
    resp.style.display = 'block';
    resp.textContent   = responses[currentAIAction][lang];
  }, 1500);
}

// ================================
// BOTTOM PANEL TOGGLE
// ================================
function toggleBottomPanel() {
  const panel = document.querySelector('[style*="height:220px"]');
  if (panel) {
    panel.style.height = panel.style.height === '40px' ? '220px' : '40px';
  }
}

// ================================
// LANGUAGE CHANGE — Update editor placeholder
// ================================
document.getElementById('langSelect').addEventListener('change', function() {
  const templates = {
    'Python 3.11':  'class Solution:\n    def minPathSum(self, grid: List[List[int]]) -> int:\n        # Write your solution here\n        pass',
    'C++17':        'class Solution {\npublic:\n    int minPathSum(vector<vector<int>>& grid) {\n        // Write your solution here\n    }\n};',
    'Java 17':      'class Solution {\n    public int minPathSum(int[][] grid) {\n        // Write your solution here\n    }\n}',
    'JavaScript':   'var minPathSum = function(grid) {\n    // Write your solution here\n};',
  };
  document.getElementById('codeEditor').value = templates[this.value] || '';
});

// Tab key in editor
document.getElementById('codeEditor').addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = this.selectionStart;
    const end   = this.selectionEnd;
    this.value  = this.value.substring(0, start) + '  ' + this.value.substring(end);
    this.selectionStart = this.selectionEnd = start + 2;
  }
});