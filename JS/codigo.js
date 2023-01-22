let datum;
function readData(file,id){
    console.log("Read the data");
    d3.csv(file, processData)
    .then((data) => graph(data,id))
    .catch((error)=> console.log("error: "+error.message));
}

function processData(datum){
    return datum;
}

function graph(data, id){
    datum = data;
    console.log(datum);
    //console.log(id,data);
    configuracion();
    principal();
}
