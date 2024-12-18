export async function fetchData() {
    try {
      const response = await fetch(process.env.API_URL);
      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error for handling in the calling function
    }
  }

  export async function getGroups() {
    const response = await fetch(process.env.API_URL);
    const data = await response.json();
    const groups = data.map(group => group.nome);
    return groups;
  }

  export async function sendFormData(data) {
    // Construção da URL (ajustar conforme necessário)
    let urlApi = process.env.API_POST_URL;
    /*
    if (selectGrupo !== 'novo') {
      urlApi = process.env.API_PUT_URL;
    }
    */
  
    // Envia os dados para o servidor usando fetch
    try {
      const response = await fetch(urlApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Erro ao enviar os dados');
      }
  
      const responseData = await response.json();
      console.log('Dados inseridos com sucesso:', responseData);
      // Fecha o popup (se necessário)
    } catch (error) {
      console.error('Erro ao inserir dados:', error);
      // Lidar com o erro (exibir mensagem ao usuário)
    }
  }