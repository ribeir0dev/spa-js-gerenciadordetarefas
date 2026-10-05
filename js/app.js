document.addEventListener('DOMContentLoaded', () => {
  navigate('lista');
});

function cadastrarTarefa(event) {
  event.preventDefault();
  const input = document.getElementById('titulo');
  const feedback = document.getElementById('feedback');
  
  const validacao = validarFormulario(input.value);

  if (!validacao.valido) {
    feedback.className = 'erro';
    feedback.innerText = validacao.mensagem;
    return;
  }

  const novaTarefa = {
    id: Date.now(),
    titulo: input.value.trim()
  };

  salvarTarefa(novaTarefa);
  feedback.className = 'sucesso';
  feedback.innerText = validacao.mensagem;
  input.value = '';

  setTimeout(() => {
    navigate('lista');
  }, 1000);
}

function excluirItem(id) {
  removerTarefa(id);
  navigate('lista');
}