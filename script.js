const poemsData = [
  {
    id: "poem1",
    title: "Hey, there!",
    date: "",
    language: "english",
    content: ""
  },
  {
    id: "poem2",
    title: "ऋणानुबंध",
    date: "",
    language: "marathi",
    content: "अर्चना ही अर्पितो मी<br>एक जगदोद्धारणे - <br>भेटले वाटेवरी जे,<br>सर्व ते स्वीकारणे. <br><br>अल्पशा श्वासात वदसि <br>शब्दरूपी चांदणे,<br>कोरले गेले मनांवरी किती <br>नक्षीदार गोंदणे.<br><br>शांतता ही शक्तिशाली <br>ध्वनिवरी जगदंतरी.<br>झेलशील मग दुःखं सारी <br> बरसली किती जरी.<br><br> वृत्ती नाही, नीती नाही,<br>बदलती परिवर्तने;<br>भंगता अपेक्षा तरीही कारीसि<br>अश्रूंची आवर्तने.<br><br>एकटी नसो कधीच क्षमा,<br>सोबतीने विस्मृती.<br>राज्य कर्माचे सदा गर्जते-<br>सुधार स्वतःची कृती.<br><br>भाव कृतज्ञतेचा ज्याने <br>खरोखरी जाणिला.<br>त्यानेच जन्म मानवाचा <br>सार्थकी आणिला.<br><br>सूर प्रेमाचा मधुर,<br>छेडीला कोणी जरी;<br>जशी फिरावी शारदेची<br>अंगुली वीणेवरी.<br><br>संचित सारे नष्ट होते<br>स्पंदनाच्या बरोबरी.<br>आठवांचे गाव राहते<br>आबाद मरणोत्तरी.<br><br>ही तृष्णा नयनी पडण्याची<br>जगीच्या भागली.<br>ज्या दिनी हाती हीच दुनिया,<br>मर्मबंधी लागली.<br><br>शोधसि जे रंगमंची<br>अंतरंगी सौख्य ते.<br>भासले जे दुरूनि कांचन,<br>जवळूनि तर रौप्य ते.<br><br>मृत्युलोकी अभय त्याला<br>जो सुखाने राहिला.<br>एक त्यानेच भगवंत<br>समोरी उभा पहिला.<br><br>हासत-हासत भोग मनुजा<br>वेदनांचा हा गंध.<br>जाशील तेव्हाच जेव्हा सरेल<br>अफाट तुझा ऋणानुबंध."  
    
  },
  {
    id: "poem3",
    title: "abc",
    date: "",
    language: "english",
    content: "abc abc abc"
  },
  {
    id: "poem4",
    title: "",
    date: "",
    language: "",
    content: ""
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
