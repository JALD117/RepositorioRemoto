

function eliminarMatriz(){
    for (var n = 0; n < longitudTbl; n++) {
        document.getElementById("tbl").deleteRow(0);
    }
    document.getElementById("btnOk").disabled=false;
    document.getElementById("btnDelete").disabled=true;
}

var longitudTbl = 0;

function generarMatriz(){
    
    var dimension = document.getElementById("txtarea").value;
    longitudTbl = dimension;

    if(dimension != 0 && dimension > 1){
        document.getElementById("btnOk").disabled=true;
        document.getElementById("btnDelete").disabled=false;

        var matriz = new Array(dimension);

        for(var i=0; i<dimension; i++){
            matriz[i] = new Array();
        }

        for(var i=0; i<dimension; i++){
            for(var j=0; j<dimension; j++){
                if(i==j){
                    matriz[i][j] = 1;
                } else{
                    matriz[i][j] = 0;
                }
            }
        }
        generarTabla(matriz);
        //console.log(matriz);
    }else{
        alert("Ingrese un número válido");
    }
}

function generarTabla(mat){
    
    var tabla = document.getElementById("tbl");
    var tlbody = document.createElement('tbody');
    mat.forEach(function(row){
        var fila = document.createElement('tr');
        row.forEach(function(cell){
            var columna = document.createElement('td');
            columna.appendChild(document.createTextNode(cell));
            fila.appendChild(columna);
        });
        tlbody.appendChild(fila);
    });
    tabla.appendChild(tlbody);
    document.body.appendChild(tabla);
}