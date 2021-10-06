// Armazenar a URL do .json em uma variável
var requestURL = 'https://gist.githubusercontent.com/nubioknupppd/d3c1f674e2a9405df8a394d86c83a715/raw/89572e284c491879abb5b25113d0964d3dddb962/empresas.json';

//Criar uma nova instância de objeto de solicitação
var request = new XMLHttpRequest();

//Abrir nova solicitação
request.open('GET', requestURL);

//Definir responseType e enviar solicitação
request.responseType = 'json';
request.send();

//Aguardar resposta do servidor e o que fazer com ela
request.onload = function() {
    var empresas = request.response;
    mostrarEmpresa(empresas);
}

function mostrarEmpresa(jsonObj) {
    var empresa = jsonObj['Empresas'];

    for (var i = 0; i < empresa.length; i++){
        var periodicElement = document.createElement('div');
        var periodicElementInner = document.createElement('div');
        var title = document.createElement('div');
        var description = document.createElement('div');

        var attrArray = [periodicElement];

        periodicElement.classList.add("periodic-element");
        periodicElement.setAttribute("data-group", empresa[i].Grupo);
        periodicElementInner.setAttribute("class", "periodic-element-inner");
        periodicElement.setAttribute("id", "teste3");
        title.setAttribute("class", "title");
        description.setAttribute("class", "description");

        section.setAttribute("class", "periodic-table");

        title.textContent = empresa[i].Abreviacao;
        description.textContent = empresa[i].Nome;

        periodicElementInner.appendChild(title);
        periodicElementInner.appendChild(description);

        periodicElement.appendChild(periodicElementInner);

        section.appendChild(periodicElement); 
    }
}