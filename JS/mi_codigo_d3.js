let nombres;
let nombre_edad;
let edad_media;

// Crear un objeto para almacenar los contadores
let contador_edades = {
  "<5": 0,
  "5-13": 0,
  "14-17": 0,
  "18-24": 0,
  "25-44": 0,
  "45-64": 0,
  "≥65": 0,
};

let population = new Array();

/***
 * #############
 *  FUNCIÓN PRINCIPAL
 */
function configuracion() {
  //Realiza mapeo de lista de <objetos> a  otra lista de <nombres>
  nombres = datum.map((person) => person.name);

  //Mapear la lista de <objetos> a otra lista de <objetos con nombre y edad>
  nombre_edad = datum.map(({ name, age }) => ({ nombre: name, edad: age }));

  //Filtrar las edades que no aparecen
  nombre_edad = nombre_edad.filter((persona) => persona.edad > 0);

  //Suma todas las edades
  let suma_total_edades = nombre_edad.reduce((total, persona) => {
    return total + parseInt(persona.edad);
  }, 0);

  //Realiza la media
  edad_media = suma_total_edades / nombre_edad.length;

  // Iterar sobre cada elemento de la lista
  nombre_edad.forEach((item) => {
    let edad = parseInt(item.edad);
    if (edad < 5) {
        contador_edades["<5"] += 1;
    } else if (edad >= 5 && edad <= 13) {
        contador_edades["5-13"] += 1;
    } else if (edad >= 14 && edad <= 17) {
        contador_edades["14-17"] += 1;
    } else if (edad >= 18 && edad <= 24) {
        contador_edades["18-24"] += 1;
    } else if (edad >= 25 && edad <= 44) {
        contador_edades["25-44"] += 1;
    } else if (edad >= 45 && edad <= 64) {
        contador_edades["45-64"] += 1;
    } else {
        contador_edades["≥65"] += 1;
    }
  });


  console.log(contador_edades);

}

function principal() {
  //crearListado(nombre_edad);

  crearVisualizacion();
}

function crearVisualizacion(){

   const titulo  ="Población Titanic por rango edad";

    const ctx = document.getElementById('myChart');


    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['<5', '5-13', '14-17', '18-24', '25-44', '45-64','≥65'],
        datasets: [{
          label: '# de edades ',
          data: [contador_edades["<5"], contador_edades["5-13"], contador_edades["14-17"], contador_edades["18-24"], contador_edades["25-44"], contador_edades["45-64"], contador_edades["≥65"]],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
            title: {
                display: true,
                text: titulo
            }
        }
      }
    });
  
}
      

/**
 * Crea un listado HTML
 * @param {*} datum
 */
function crearListado(datum) {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];

  var lista = document.createElement("ol");

  for (var i = 0; i < datum.length; i++) {
    var list_item = document.createElement("li");
    var textoItem = document.createTextNode(
      "Nombre:  " + datum[i].nombre + ", Edad: " + datum[i].edad
    );
    list_item.appendChild(textoItem);
    lista.appendChild(list_item);
  }

  body.appendChild(lista);
}

function crearPieChart(data) {}
