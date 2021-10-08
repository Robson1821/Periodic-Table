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
    var legendTable = document.createElement('div');
    var grupo = Array.from(new Set(empresa.map(function(empresa){ 
        return empresa.Grupo;
     })));
     var cor = Array.from(new Set(empresa.map(function(empresa){
        return empresa.Cor;
     })));

    // Criar a tabela no HTML
    for (var i = 0; i < empresa.length; i++){
        var periodicElement = document.createElement('div');
        var periodicElementInner = document.createElement('div');
        var title = document.createElement('div');
        var description = document.createElement('div');

        periodicElement.classList.add("periodic-element");
        periodicElement.setAttribute("data-group", empresa[i].Grupo);
        periodicElementInner.setAttribute("class", "periodic-element-inner");
        title.setAttribute("class", "title");
        description.setAttribute("class", "description");
        section.setAttribute("class", "periodic-table");
        periodicElement.style.setProperty("--color", empresa[i].Cor);

        periodicElement.style.gridColumn = empresa[i].Coluna;
        periodicElement.style.gridRow = empresa[i].Linha;
        title.textContent = empresa[i].Abreviacao;
        description.textContent = empresa[i].Nome;

        periodicElementInner.appendChild(title);
        periodicElementInner.appendChild(description);
        periodicElement.appendChild(periodicElementInner);
        section.appendChild(periodicElement);
    }

    //Criar a Legenda no HTML
    for (var j = 0; j < grupo.length; j++){
        var legendTableWrap = document.createElement('div');
        var legendTableMarker = document.createElement('span');
        var legendTableText = document.createElement('span');

        legendTable.setAttribute("class", "legend-table");
        legendTableWrap.setAttribute("class", "legend-table-wrap");
        legendTableMarker.setAttribute("class", "legend-table__marker " + grupo[j].replace(/\s+/g, '-').toLowerCase());
        legendTableText.setAttribute("class", "legend-table__text");
        legendTableMarker.style.setProperty("--color", cor[j]);

        legendTableText.textContent = grupo[j];

        legendTableWrap.appendChild(legendTableMarker);
        legendTableWrap.appendChild(legendTableText);
        legendTable.appendChild(legendTableWrap);

        legendTableHtml.appendChild(legendTable);
    }
}