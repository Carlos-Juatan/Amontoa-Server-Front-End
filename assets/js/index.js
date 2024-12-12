

fetch(process.env.API_URL)
  .then(response => response.json())
  .then(data => {
    // Selecionando a lista pelo id dela
    const allLinks = document.getElementById('all-links');

    // para cada item do grupo
    data.groups.forEach(group => {
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