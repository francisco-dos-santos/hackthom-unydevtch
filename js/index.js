let Addbutton= document.querySelector("#btn-add button");
let linkAdd=document.createElement('a');
let textLink=document.createTextNode('Adicionar');
linkAdd.appendChild(textLink);
linkAdd.setAttribute('href','cadastro.html');
linkAdd.style.textDecoration='none';
Addbutton.appendChild(linkAdd);
console.log(Addbutton);