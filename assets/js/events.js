import { sendFormData } from './services.js';

export function handleFormSubmit(event) {
  event.preventDefault();

  // Obtém os valores dos campos do formulário (pode ser delegado para o uiController)
  const formData = {
    nome: document.getElementById('mySelect').value,
    links: document.getElementById('link').value.split(',').map(link => ({
      nome: document.getElementById('nome').value,
      url: link
    }))
  };

  sendFormData(formData);
}

export function setEvents(popup, forms, close, btn){
    // Adicionando funçoes aos botões
    btn.onclick = function() {
        popup.style.display = 'block';
    }
    
    close.onclick = function() {
        popup.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == popup) {
        popup.style.display = 'none';
        }
    }
    
    forms.addEventListener('submit', handleFormSubmit);  
}