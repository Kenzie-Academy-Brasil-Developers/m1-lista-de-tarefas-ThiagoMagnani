const tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente",
  },
  {
    titulo: "Consertar Computador",
    tipo: "Prioritário",
  },
  {
    titulo: "Beber água",
    tipo: "Normal",
  },
];

function createCard(taskInfo) {
  // Criando elementos necessários
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");

  // Adicionando o titulo da tarefa como texto do paragrafo
  p.innerText = taskInfo.titulo;

  // Adicionando span e paragrafo a div
  div.appendChild(span);
  div.appendChild(p);

  if(taskInfo.tipo == 'Urgente'){
    span.classList.add('span-urgent');
  } else if (taskInfo.tipo == 'Prioritário'){
    span.classList.add('span-priority');
  } else{
    span.classList.add('span-normal');
  }

  // Criando botão para deletar tarefa
  const button = document.createElement("button");

  // Adicionando icone ao botão
  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  
  button.addEventListener("click", function(){
    const positionLi = tasks.indexOf(taskInfo);
    tasks.splice(positionLi, 1);
    renderElements(tasks);
  });

  /// Adicionando a div e o botão de deletar ao list item
  li.appendChild(div);
  li.appendChild(button);

  return li;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  // Ajustar a lógica
  for(i = 0; i < taskList.length; i++){
    let card = createCard(taskList[i]);
    htmlList.appendChild(card);
  }

}
renderElements(tasks);

function addListButton(){
  const buttonAdd = document.querySelector('#btnSubmit');
  buttonAdd.addEventListener("click", function(e){
    e.preventDefault();

    const titulo = document.querySelector('#input_title').value;
    const tipo = document.querySelector('#input_priority').value;

    const obj = {
      titulo: titulo, tipo: tipo
    };

    tasks.push(obj);
    renderElements(tasks);
  });

}
addListButton();