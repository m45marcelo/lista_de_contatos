const form = document.getElementById('form');
let linhas ='';
form.addEventListener('submit', function(e){
    e.preventDefault();

    const nomeContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('numero-contato');

    

    let linha = "<tr>";
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${numeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML=linhas;

    nomeContato.value='';
    numeroContato.value='';

})