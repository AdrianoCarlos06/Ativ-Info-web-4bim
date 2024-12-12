const inputText = document.getElementById('inputText');
const addButton = document.getElementById('addButton');
const countButton = document.getElementById('countButton');
const content = document.getElementById('content');

addButton.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (text) {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        content.appendChild(paragraph);
        inputText.value = '';
        inputText.focus();
    } else {
        alert('Por favor, insira um texto.');
    }
});

countButton.addEventListener('click', () => {
    const paragraphs = content.querySelectorAll('p');
    const count = paragraphs.length;
    alert(`${count} linha${count !== 1 ? 's' : ''} foram adicionada${count !== 1 ? 's' : ''}.`);
});
