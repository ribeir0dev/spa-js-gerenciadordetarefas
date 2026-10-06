function renderLista() {
  const tarefas = obterTarefas();
  if (tarefas.length === 0) {
    return `<h2 tabindex="-1" class="page-title">Minhas Tarefas</h2><p>Nenhuma tarefa cadastrada ainda.</p>`;
  }

  // Adicionado aria-label para desambiguar botões de exclusão (WCAG 2.1 AA)
  const itensHtml = tarefas.map(t => `
    <div class="card">
      <span>${t.titulo}</span>
      <button onclick="excluirItem(${t.id})" aria-label="Excluir tarefa: ${t.titulo}">Excluir</button>
    </div>
  `).join('');

  return `<h2 tabindex="-1" class="page-title">Minhas Tarefas</h2><br>${itensHtml}`;
}

function renderNovo() {
  // Adicionado tabindex="-1" no título, aria-describedby no input e aria-live no feedback
  return `
    <h2 tabindex="-1" class="page-title">Cadastrar Nova Tarefa</h2>
    <form onsubmit="cadastrarTarefa(event)">
      <label for="titulo">Título da Tarefa:</label>
      <input type="text" id="titulo" placeholder="Ex: Estudar JavaScript" aria-describedby="feedback">
      <div id="feedback" aria-live="polite"></div>
      <button type="submit">Salvar Tarefa</button>
    </form>
  `;
}

function renderSobre() {
  // Correção: busca a lista de tarefas atualizada antes de ler o length
  const tarefas = obterTarefas(); 
  return `
    <h2 tabindex="-1" class="page-title">Resumo das Tarefas</h2>
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

  // Transferência do foco visual para o novo título carregado (WCAG 2.1 AA)
  const pageTitle = app.querySelector('.page-title');
  if (pageTitle) {
    pageTitle.focus();
  }
}