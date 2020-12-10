let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;//Intanciamos el objeto XMLHttpRequest

const fetchData = (url_api) => { //Funcion que recibe una API y un callback
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();//Instanciamos XMLHttpRequest()
        xhttp.open('GET', url_api, true);//Abrimos la conexion por medio de GET y la API
        xhttp.onreadystatechange  = (() => {//Realizamos una validación
        if (xhttp.readyState === 4) {       //readyState Holds the status of the XMLHttpRequest.//0: request not initialized //1: server connection established //2: request received //3: processing request //4: request finished and response is ready
            //El if ternario no requiere que se declare el 'if'
            (xhttp.status === 200)          //status -> //200: "OK" //403: "Forbidden" //404: "Page not found"
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error ', url_api))
        }
    });
    xhttp.send();
    });
}

module.exports = fetchData;