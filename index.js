//1.Crear un objetos express

const express=require('express');

//2.Crear un objeto que represente nuestra aplicacion

const app = express();

app.use(express.json());

//definir los entry point de la API
//Definir la ruta (la url) en donde va a responder nuestra API

app.get(
    '/sumar',
    //Se reuieren dos objetos uno representado la peiticion y otro representando la respuesta
    (req, res)=>{
        //To do: Aqui va el procesamiento de la peticion a esta ruta 
        console.log("Alguien está conectándise a esta ruta");
        res.json(req.body);
    }
);

app.post(
    '/restar',
    (req, res)=>{
        let resultado;
        try {
            const {numeroUno, numeroDos}= req.body; 
            resultado= numeroUno-numeroDos;
        } catch (error) {
            resultado=error;
        }

        /*
        const n1 = req.body.numeroUno;
        const n2 = req.body.numeroDos;
        */
        
        res.json(resultado);
    }
)

app.post(
    '/dividir',
    (req, res)=>{
        let resultado;
        try {
            const {numeroUno, numeroDos}= req.body; 
            resultado= numeroUno/numeroDos;
        } catch (error) {
            resultado=error;
        }

        /*
        const n1 = req.body.numeroUno;
        const n2 = req.body.numeroDos;
        */
        
        res.json(resultado);
    }
);

app.post(
    '/sumanumeros',
    (req, res)=>{
        let resultado;
        
    }
);


//3.Crear un servicio para escuchar peticiones

app.listen(
    3000,
    ()=>{
        console.log("Servidor ejecutandose en el puerto 3000");
    }
);
