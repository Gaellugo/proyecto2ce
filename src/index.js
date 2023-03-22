const express= require("express");
const app=express();
const morgan = require("morgan");
//configuraciones
app.set('port',3000);
app.set('json spaces',2)
//empezando servidor 
 app.use(morgan('dev'));
 app.use(express.json());
//rutas

app.use('/api/superheroes',require('./routes/rutas'));



app.listen(app.get('port'));
console.log("mi primer servidor");

