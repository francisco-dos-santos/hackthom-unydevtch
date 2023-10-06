let Addbutton= document.querySelector("#btn-add button");
const arrow=JSON.parse(localStorage.getItem('BD_produtos'))??[];
let fundCard=document.querySelector('#cards-main');
const iconDrop=document.getElementById('drop-cat');
const dropDrap=document.getElementById('drop-drap');
console.log(iconDrop)
// filtrar elementos aparte do input
const categs=document.querySelectorAll('#drop-drap ul li');
const cards = document.getElementsByClassName('card');
const filterElement=document.getElementById('input-search');
console.log(categs);


dropDrap.addEventListener('click',filterCateg);
filterElement.addEventListener('input',filterCards);

// criar a funçao filter categoria
function filterCateg()
{  
    for (const cat of categs){
            cat.onclick=function(){
            let textdrop=cat.textContent.toLowerCase();
            // console.log(textdrop)
            for (const card of cards){
                let nome = card.querySelector('span');
                  nome=nome.textContent.toLowerCase();
                  if(!textdrop.includes(nome)){
                    card.style.display="none";
                  }else{
                     card.style.display="block"; 
                  }
            }
            dropDrap.onmouseleave=()=>{
                dropDrap.style.display='none';
                setTimeout(()=>{window.location.href="index.html";},3000);
             }
        }
    }
       
}
// cria a função filter
function filterCards(){
   
    if(filterElement.value!=="")
    {

        for (let card of cards) {
            let nome = card.querySelector('p');

            nome=nome.textContent.toLowerCase();

            let filterText=filterElement.value.toLowerCase();

            if(!nome.includes(filterText)){
                
                card.style.display="none";
            }else{
                
                    card.style.display="block";
            }
            console.log('alooo')
        }
    }
    // if o input for vazio
    else{
        for (let card of cards){
            card.style.display="block"; 
        }
    }
}

Addbutton.onclick=()=>{
    window.location.href="cadastro.html";
}

iconDrop.onclick=()=>{
    console.log('pansando o mouse');
    dropDrap.style.display='block';
    dropDrap.onmouseleave=()=>{
         dropDrap.style.display='none';
        //  setTimeout(()=>{window.location.href="index.html";},3000);
    }
}


console.log(fundCard);

function Renderproduto()
{
    fundCard.innerHTML="";
    arrow.forEach((element,index) => {
    let desconto=parseInt(element.price);
        desconto=desconto+(50/100)*desconto; 
      let novoProdut=`
             <div class="card">
                <div class="cont-img"  onclick="saveid(${index})">
                    <img src="${element.imagens}" alt="produto-${index}">
                </div>
                <h3 class="preco">MUR ${element.price}<small>Kz</small></h3>
                <del id="text-riscado">MUR ${desconto}.00</del>
                <p>${element.nome}</p>
                <small class="fret">${element.marca}</small>
                <span class="cat">${element.categ}</span>
            </div>
        `;
    fundCard.innerHTML+= novoProdut;
    });
}


const saveid=(id)=>
{
    localStorage.setItem('save_id',JSON.stringify(id));
    window.location.href="produto.html";

}
const savestorageProdut=()=>{
    localStorage.setItem('BD_produtos',JSON.stringify(arrow));
}
Renderproduto();