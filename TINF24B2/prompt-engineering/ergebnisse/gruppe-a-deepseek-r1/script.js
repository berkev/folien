// DOM-Elemente
const columns = document.querySelectorAll('.column');
const overlay = document.getElementById('overlay');
const newCardBtn = document.getElementById('new-card-btn');
const cancelBtn = document.getElementById('cancel-btn');
const cardForm = document.getElementById('card-form');

// Neue Karte erstellen
newCardBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

// Overlay schließen
cancelBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Karte speichern
cardForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const hours = document.getElementById('hours').value;
  const type = document.getElementById('type').value;

  createCard(title, description, hours, type);

  cardForm.reset();
  overlay.style.display = 'none';
});

// Karte erstellen
function createCard(title, description, hours, type) {
  const card = document.createElement('div');
  card.className = `card ${type}`;
  card.draggable = true;

  card.innerHTML = `
    <h4>${title}</h4>
    <p>${description}</p>
    <p><strong>Arbeitspaketgröße:</strong> ${hours} Stunden</p>
    <button class="delete-btn">🗑️</button>
  `;

  // Karte löschen
  const deleteBtn = card.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => card.remove());

  // Drag & Drop
  card.addEventListener('dragstart', () => {
    card.classList.add('dragging');
  });

  card.addEventListener('dragend', () => {
    card.classList.remove('dragging');
  });

  // Karte in "To Do" einfügen
  document.querySelector('#to-do .cards-container').appendChild(card);
}

// Drag & Drop für Spalten
columns.forEach(column => {
  column.addEventListener('dragover', (e) => {
    e.preventDefault();
    column.classList.add('drag-over');
  });

  column.addEventListener('dragleave', () => {
    column.classList.remove('drag-over');
  });

  column.addEventListener('drop', () => {
    column.classList.remove('drag-over');
    const card = document.querySelector('.dragging');
    column.querySelector('.cards-container').appendChild(card);
  });
});