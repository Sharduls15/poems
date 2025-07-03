const poemsData = [
  {
    id: "poem1",
    title: "ऋणानुबंध",
    date: "",
    language: "marathi",
    content: "अर्चना ही अर्पितो मी<br>एक जगदोद्धारणे - <br>भेटले वाटेवरी जे,<br>सर्व ते स्वीकारणे"
  },
  {
    id: "poem2",
    title: "संध्याकाळ",
    date: "इथे प्रस्तावना लिहू शकतो",
    language: "marathi",
    content: "आभाळ रंगले तांबूस,<br>मन झाले शांत, संथ, गंभीर..."
  },
  {
    id: "poem3",
    title: "Stardust",
    date: "June 28, 2025",
    language: "english",
    content: "We are made of stardust, they say,<br>Tiny sparks lighting up the day..."
  }
];

function showPoem(id) {
  const container = document.getElementById('poemContainer');
  const poem = poemsData.find(p => p.id === id);
  if (poem) {
    container.innerHTML = `
      <div class="poem active">
        <h2>${poem.title}</h2>
        <p><em>${poem.date}</em></p>
        <p class="${poem.language === 'marathi' ? 'marathi' : ''}">${poem.content}</p>
      </div>
    `;
  }
  const sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.classList.remove('active');
}

function loadPoems() {
  const list = document.getElementById('poemList');
  list.innerHTML = '';

  poemsData.forEach(poem => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#" onclick="showPoem('${poem.id}')">${poem.title}</a>`;
    list.appendChild(li);
  });

  if (poemsData.length > 0) showPoem(poemsData[0].id);
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.classList.toggle('active');
}

function filterPoems() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const links = document.querySelectorAll('#poemList li');
  links.forEach(link => {
    const text = link.textContent.toLowerCase();
    link.style.display = text.includes(input) ? '' : 'none';
  });
}

window.onload = () => {
  loadPoems();
};
