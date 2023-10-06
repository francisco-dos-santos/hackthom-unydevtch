const btnAdd = document.getElementById('add-item');
console.log(btnAdd);
const inputImage= document.getElementById('image');
const nomeProdut= document.getElementById('inome');
const description= document.getElementById('descript');
const preco= document.getElementById('price');
const categoria= document.getElementById('categ');
const radios=document.querySelectorAll('.cont-radio-button input');
let fundoImage=document.querySelector('#cont-img  img');
let valor;
const produtos=JSON.parse(localStorage.getItem('BD_produtos'))??[];
// let inputRadio;


console.log(fundoImage);
//pegar o caminho do radioinput
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
console.log(pegarRadio());

function pegarImage()
{       
    inputImage.addEventListener('change',(event)=>{
        const inputTarget=event.target;
        const file= inputTarget.files[0];
            // console.log(image);
            if(file)
            {
                const leitura=new FileReader();

                leitura.addEventListener('load', (e)=>{
                    const readTaget=e.target;
                    valor = readTaget.result;
                    fundoImage.setAttribute('src','');
                    fundoImage.setAttribute('src',`${valor}`);
                // return valor;
                });

                leitura.readAsDataURL(file);
            }else
            {
                return false;
            }
    });
    return valor;
}

document.body.onload=pegarImage();
function Additens()
{
    let radio=pegarRadio();
    let caminho=pegarImage();
    if((nomeProdut.value!=="")&& (description.value!=="") && (preco.value!=="") && (categoria.value!=="") && (caminho!==undefined))
    {
    produtos.push(
        {
        imagens:caminho,
        nome:nomeProdut.value,
        descricao:description.value,
        price:parseInt(preco.value)+".00",
        categ:categoria.value,
        marca:radio
        }
    );
    limparCampo();
    savestorageProdut();
    let texto="✔ Operação realizada com sucesso";
    openModal(texto);
    }else{
        let texto="❌ preencha os campos do formulário";
        openModal(texto);
        return false
    }
    
}

function limparCampo()
{
    let input =document.querySelectorAll('form input');
    description.value="";
    radios.checked=undefined;
    input.forEach(element =>{element.value=""})
}

function openModal(text)
{
    const modal=document.getElementById('container-modal');
    modal.classList.add('active');
    modal.innerHTML=`
     <div id="modal">
            <p>${text}</p>
            <a href="cadastro.html" onclick="closeModal()">OK</a>
        </div>
    `;
}
function closeModal()
{
    const modal=document.getElementById('container-modal');
    modal.classList.remove('active');
}

btnAdd.onclick=Additens;

const savestorageProdut = () =>{
    localStorage.setItem('BD_produtos',JSON.stringify(produtos));
}

