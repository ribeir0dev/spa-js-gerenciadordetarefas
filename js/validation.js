function validarFormulario(titulo) {
  if (!titulo || titulo.trim() === "") {
    return { valido: false, mensagem: "O título da tarefa não pode estar vazio!" };
  }
  if (titulo.trim().length < 3) {
    return { valido: false, mensagem: "O título deve ter pelo menos 3 caracteres." };
  }
  return { valido: true, mensagem: "Tarefa cadastrada com sucesso!" };
}