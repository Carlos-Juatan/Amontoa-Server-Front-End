fetch('http://localhost:3000/data')
  .then(response => response.json())
  .then(data => {
    const lista = document.getElementById('lista-pessoas'); // Substitua por o ID da sua lista

    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.nome; // Assumindo que 'nome' é uma propriedade do seu JSON

      lista.appendChild(li);
    });
})
  .catch(error => {
    console.error('Erro ao buscar dados:', error);
});