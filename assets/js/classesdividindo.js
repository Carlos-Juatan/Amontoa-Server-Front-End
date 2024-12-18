

fetch(process.env.API_URL)
  .then(response => response.json())
  .then(data => {
    // Selecionando a lista pelo id dela
    const allLinks = document.getElementById('all-links');

    // para cada item do grupo
    data.forEach(group => {

      // Criar uma dive com a classe 'content'
      const contentDiv = document.createElement('div');
      contentDiv.classList.add('content');
      
      // Criando um h2 com o nome do titulo
      const contentTitle = document.createElement('h2');
      contentTitle.textContent = group.nome;

      // Criando os links de todos os groups nesse sub-group 
      const contentList = document.createElement('ul');
      group.links.forEach(link => {
        const listItem = document.createElement('li');
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.nome;
        listItem.appendChild(linkElement);
        contentList.appendChild(listItem);
      });

      contentDiv.appendChild(contentTitle);
      contentDiv.appendChild(contentList);
      allLinks.appendChild(contentDiv);
    });
})
  .catch(error => {
    console.error('Erro ao buscar dados:', error);
});

//################################################################################################################













//################################################################################################################

// Inicialização
const popup = document.getElementById('popup');
const formulario = document.getElementById('myForm');
const close = document.getElementsByClassName('close')[0];
const btn = document.getElementById('abrir-popup');


async function getGroups() {
  const response = await fetch(process.env.API_URL);
  const data = await response.json();
  const groups = data.map(group => group.nome);
  return groups;
}

async function main() {
  const allGroups = await getGroups();

  const selectGrupo = criarElementoSelect();
  formulario.insertBefore(selectGrupo, formulario.querySelector('button'));
  
  // Função para criar o elemento select dinamicamente
  function criarElementoSelect() {
    //const allGroups = getGroups();

    const select = document.createElement('select');
    select.id = 'mySelect'; // Atribui um ID ao select

    console.log(allGroups)
  
    allGroups.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        select.appendChild(option);
    });
  
    return select;
  }
}

main();

// Função para enviar os dados do formulário
function enviarFormulario(evento) {
  evento.preventDefault(); // Impede o envio padrão do formulário

  // Obtém os valores dos campos do formulário
  const nome = document.getElementById('nome').value;
  const links = document.getElementById('link').value.split(',').map(link => ({
    nome: nome,
    url: link
  }));

  // Construção da URL (ajustar conforme necessário)
  let urlApi = process.env.API_POST_URL;
  if (selectGrupo !== 'novo') {
    urlApi = process.env.API_PUT_URL;
  }

  // Envia os dados para o servidor usando fetch
  fetch(urlApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, links })
  })
  .then(resposta => resposta.json())
  .then(dados => {
    console.log('Dados inseridos com sucesso:', dados);
    // Fecha o popup
    popup.style.display = 'none';
  })
  .catch(erro => {
    console.error('Erro ao inserir dados:', erro);
  });
}


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

formulario.addEventListener('submit', enviarFormulario);
