

const id = 1+JSON.parse(localStorage.getItem('save_id'))||'';
const container=document.getElementById('container-main');
const containerEdit=document.getElementById('container-main-2');
const btnDelet=document.getElementById('delete');
const arrow=JSON.parse(localStorage.getItem('BD_produtos'))??[];
const backmain=document.getElementById('sair-produto');

 function RenderProdutos(){
    container.innerHTML="";
    let todos=`
        <article class="area">
            <div id="container-img-maior">
                <img src="${arrow[id-1].imagens}" alt="produto-${id-1}">
            </div>

            <div id="container-img-menor">
                <img src="${arrow[id-1].imagens}" alt="produto-${id-1}">
                <img src="${arrow[id-1].imagens}" alt="produto-${id-1}">
                <img src="${arrow[id-1].imagens}" alt="produto-${id-1}">
                <img src="${arrow[id-1].imagens}" alt="produto-${id-1}">
            </div>
        </article>

        <article class="area">

            <h3 id="categoria">${arrow[id-1].categ}</h3>
            <h2 id="nome-produto">${arrow[id-1].nome}</h2>
            <p id="descricao">${arrow[id-1].descricao}.-> 
                "adipisicing elit.
                Dolores consequuntur tempore non eligendi
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores consequuntur "
                </p>
            <p id="preço">${arrow[id-1].price} <small>${arrow[id-1].marca}</small></p>
            <del>${arrow[id-1].price}</del>

            <div class="cont-botao">
                <button id="delete" onclick="deletar(${id-1})">Deletar</button>
                <button id="editar">Editar</button>
            </div>

        </article>

    `;
    container.innerHTML+=todos;
    containerEdit.innerHTML="";
    let todos2=`

         <article class="area">
            <div id="container-img-maior">
                <img src="${arrow[id-1].imagens}" alt="produto-${id-1}">
            </div>

            <div id="container-img-menor">
                <img src="${arrow[id-1].imagens}" alt="produto-${id-1}">
                <img src="${arrow[id-1].imagens}" alt="produto-${id-1}">
                <img src="${arrow[id-1].imagens}" alt="produto-${id-1}">
                <img src="${arrow[id-1].imagens}" alt="produto-${id-1}">
            </div>
        </article>

        <article class="area">

            <div id="categoria-2">
                <label for="inome">Categorias*</label>
                <input  type="text" class="input" list="cat" id="categ" placeholder="Categória do produto">
                    <datalist id="cat">
                        <option>Mangas Cumpridas</option>
                        <option>Mangas Curtas</option>
                        <option>Pomadas</option>
                        <option>Cremes</option>
                        <option>Oléo</option>
                        <option>Desodorizante</option>
                    </datalist>
            </div>

            <div id="nome-produto-2">
                <label for="inome">Nome*</label>
                 <input class="input"  type="text" autocomplete="text" name="" id="inome" placeholder="Nome do produto">
            </div>

            <div id="descricao-2">
                <label for="inome">Descrição*</label>
                <textarea name="" class="input" id="descript" cols="30" rows="3"placeholder="Descriçao do produto"></textarea> 
            </div>

            <div id="preço-2">
                <label for="inome">Preço*</label>
                <input type="number" name="" id="price" class="input" placeholder="preço kz">
                <div class="cont-radio-button">
                    <label for="checke-free">
                        <input type="radio" name="icheckbox" value="Frete Gratis" id="checke-free">
                        Frete-free
                    </label>
                    <label for="checke-pay">
                        <input type="radio" name="icheckbox" value="Frete Paga" id="checke-pay" checked>
                        Frete-pay
                    </label>
                </div>
            </div>

            <div class="cont-botao">
                <button id="voltar">Voltar</button>
                <button id="salvar">Salvar</button>
            </div>

        </article>
    `;
    containerEdit.innerHTML+=todos2;
 }
RenderProdutos();

backmain.addEventListener('click',()=>
{window.location.href="index.html";}
);
function deletar(index){
    arrow.splice(index, 1);
    savestorageProdut();
    window.location.href="index.html";
}

// trablhaar edit

const btnEdit=document.getElementById('editar');
const nomeProdut= document.getElementById('inome');
const description= document.getElementById('descript');
const preco= document.getElementById('price');
const categoria= document.getElementById('categ');
const radios=document.querySelectorAll('.cont-radio-button input');
const btnsalva=document.getElementById('salvar');
const btnCancel=document.getElementById('voltar');
function pegarRadio()
{
    let valor;
    for(let i=0;i<radios.length;i++)
    {
        if(radios[i].checked)
        {
            if((radios[i].value=="Frete Gratis") || (radios[i].value=="Frete Paga"))
                {
                    valor=radios[i].value;
                }
        }
        
    }
    return valor;
}

btnEdit.onclick=()=>{
    containerEdit.classList.add('active');
    container.classList.add('desative');
    backmain.style.display='none';
    edit(id);
    btnCancel.onclick=voltar;
    console.log('clicado')
}

function voltar()
{
    window.location.href="produto.html";
}

// função edit
function edit(index)
{

   nomeProdut.value=arrow[index-1].nome;
   description.value=arrow[index-1].descricao;
   preco.value=arrow[index-1].price;
   categoria.value=arrow[index-1].categ;

   btnsalva.addEventListener('click',()=>{
    let radio=pegarRadio();
    console.log('clicado');
    if((nomeProdut.value!=="") && ( description.value!=="") &&(preco.value!=="") &&(categoria.value!==""))
    {
        arrow[index-1].nome=nomeProdut.value;
        arrow[index-1].descricao= description.value;
        arrow[index-1].price=preco.value;
        arrow[index-1].categ=categoria.value;
        arrow[index-1].marca=radio;
        savestorageProdut();
        voltar();
        RenderProdutos();
    }
   }); 

}

function savestorageProdut()
{
    localStorage.setItem('BD_produtos',JSON.stringify(arrow));
}
console.log(id);

