const tasks = [
  {
    titulo: 'Comprar comida para o gato',
    tipo: 'Urgente',
  },
  {
    titulo: 'Consertar Computador',
    tipo: 'Prioritário',
  },
  {
    titulo: 'Beber água',
    tipo: 'Normal',
  },
];

function createCard(taskInfo){
  
  const li = document.createElement('li');
  const div = document.createElement('div');
  const span = document.createElement('span');
  const p = document.createElement('p');
  
  p.innerText = taskInfo.titulo;

  div.appendChild(span);
  div.appendChild(p);

  if(taskInfo.tipo == 'Urgente'){
    span.classList.add('span-urgent');
  } else if (taskInfo.tipo == 'Prioritário'){
    span.classList.add('span-priority');
  } else{
    span.classList.add('span-normal');
  }

  const button = document.createElement("button");

  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  removeListButton(taskInfo, button);

  li.appendChild(div);
  li.appendChild(button);

  return li;
}

function renderElements(taskList){

  const htmlList = document.querySelector('.tasks');
  htmlList.innerHTML = '';

  for(i = 0; i < taskList.length; i++){
    let card = createCard(taskList[i]);
    htmlList.appendChild(card);
  }
}

renderElements(tasks);

function addListButton(){

  const buttonAdd = document.querySelector('#btnSubmit');
  buttonAdd.addEventListener('click', function(e){
    e.preventDefault();

    const title = document.querySelector('#input_title').value;
    const type = document.querySelector('#input_priority').value;

    const obj = {
      titulo: title, tipo: type
    };

    tasks.push(obj);
    renderElements(tasks);
  });
}

addListButton();

function removeListButton(task, buttonRem){

  buttonRem.addEventListener('click', function(){
    const positionLi = tasks.indexOf(task);
    tasks.splice(positionLi, 1);
    renderElements(tasks);
  });
}