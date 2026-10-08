const tools = [
  { name: "Keybr", description: "Тренажёр печати", icon: "⌨", url: "https://www.keybr.com/" },
  { name: "Ratatype", description: "Скорость и точность", icon: "▦", url: "https://www.ratatype.com/" },
  { name: "Monkeytype", description: "Печать на время", icon: ">_", url: "https://monkeytype.com/" },
  { name: "TypingClub", description: "Уроки и игры", icon: "◉", url: "https://www.typingclub.com/" },
  { name: "Code.org", description: "Программирование для всех", icon: "</>", url: "https://code.org/" },
  { name: "Scratch", description: "Создавай, играй, программируй", icon: "🐱", url: "https://scratch.mit.edu/" }
];

const grid = document.getElementById("toolsGrid");

grid.innerHTML = tools.map(tool => `
  <a class="tool-card glass" href="${tool.url}" target="_blank" rel="noopener">
    <div class="tool-icon">${tool.icon}</div>
    <div class="tool-info">
      <strong>${tool.name}</strong>
      <span>${tool.description}</span>
    </div>
    <span class="arrow">→</span>
  </a>
`).join("");

function updateCountdown() {
  const now = new Date();
  let year = now.getFullYear();
  let newYear = new Date(year + 1, 0, 1);
  const days = Math.ceil((newYear - now) / 86400000);
  document.getElementById("countdownNumber").textContent = days;
}

updateCountdown();

document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    window.open("https://www.google.com/search?q=" + encodeURIComponent(query), "_blank");
  }
});
