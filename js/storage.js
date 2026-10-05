const STORAGE_KEY = 'minhas_tarefas';

function obterTarefas() {
  const dados = localStorage.getItem(STORAGE_KEY);
  if (!dados) return [];

  try {
    return JSON.parse(dados);
  } catch (erro) {
    console.error("Erro ao ler dados do localStorage:", erro);
    return [];
  }
}

function salvarTarefa(novaTarefa) {
  const tarefas = obterTarefas();
  tarefas.push(novaTarefa);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
}

function removerTarefa(id) {
  let tarefas = obterTarefas();
  tarefas = tarefas.filter(t => t.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
}