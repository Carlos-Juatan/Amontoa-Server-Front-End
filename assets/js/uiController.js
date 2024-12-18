import { fetchData, getGroups  } from './services.js';

export async function showLinks() {
  try {
    const data = await fetchData();

    const allLinks = document.getElementById('all-links');

    data.forEach(group => {
      const contentDiv = document.createElement('div');
      contentDiv.classList.add('content');

      const contentTitle = document.createElement('h2');
      contentTitle.textContent = group.nome;

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
  } catch (error) {
    console.error('Error displaying links:', error);
    // Handle the error gracefully (e.g., display an error message to the user)
  }
}

export async function createGroupsList(formElement) {
  const allGroups = await getGroups();
  const select = createSelectedElemente(allGroups);
  formElement.insertBefore(select, formElement.querySelector('button'));
}

function createSelectedElemente(groups) {
  const select = document.createElement('select');
  select.id = 'mySelect'; // Atribui um ID ao select

  groups.forEach(item => {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
  });

  return select;
}