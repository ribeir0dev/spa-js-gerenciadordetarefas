function renderLista() {
  const tarefas = obterTarefas();
  if (tarefas.length === 0) {
    return `<h2>Minhas Tarefas</h2><p>Nenhuma tarefa cadastrada ainda.</p>`;
  }

  const itensHtml = tarefas.map(t => `
    <div class="card">
      <span>${t.titulo}</span>
      <button onclick="excluirItem(${t.id})">Excluir</button>
    </div>
  `).join('');

  return `<h2>Minhas Tarefas</h2><br>${itensHtml}`;
}

function renderNovo() {
  return `
    <h2>Cadastrar Nova Tarefa</h2>
    <form onsubmit="cadastrarTarefa(event)">
      <label for="titulo">Título da Tarefa:</label>
      <input type="text" id="titulo" placeholder="Ex: Estudar JavaScript">
      <div id="feedback"></div>
      <button type="submit">Salvar Tarefa</button>
    </form>
  `;
}

function renderSobre() {
  const tarefas = obterTarefas();
  return `
    <h2>Resumo das Tarefas</h2>
    <br>
    <div class="card">
      <p>Total de tarefas registradas: <strong>${tarefas.length}</strong></p>
    </div>
  `;
}

function navigate(tela) {
  const app = document.getElementById('app');
  if (!app) return;
  
  if (tela === 'lista') app.innerHTML = renderLista();
  else if (tela === 'novo') app.innerHTML = renderNovo();
  else if (tela === 'sobre') app.innerHTML = renderSobre();
}