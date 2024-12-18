import { sendFormData } from './services.js';

const groupSelect = document.getElementById('mySelect');
const GroupInput = document.getElementById('newGroupName'); 

let newGroupName;
let id;

export function handleFormSubmit(event) {
  event.preventDefault();

  // Obtém os valores dos campos do formulário (pode ser delegado para o uiController)
  const formData = {
    nome: newGroupName,
    links: document.getElementById('link').value.split(',').map(link => ({
      nome: document.getElementById('nome').value,
      url: link
    }))
  };

  sendFormData(formData, id);
}

export function setEvents(popup, forms, close, btn, newGroupBtn){
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

    newGroupBtn.addEventListener('click', () => {
        if (groupSelect.style.display == 'none') {

        groupSelect.style.display = 'inline';
        GroupInput.value = '';
        GroupInput.style.display = 'none';
        newGroupName = groupSelect.value;
        id = groupSelect.options[groupSelect.selectedIndex].id;
      } else {

        groupSelect.style.display = 'none';
        GroupInput.style.display = 'inline'; 
        newGroupName = GroupInput.value;
        id = '';
      }
    });

    // New event listener for groupSelect change
    groupSelect.addEventListener('change', () => {
      id = groupSelect.options[groupSelect.selectedIndex].id;
      newGroupName = groupSelect.value;
    });

    GroupInput.addEventListener('input', () => {
      newGroupName = GroupInput.value;
  });
}