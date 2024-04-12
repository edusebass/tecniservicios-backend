import app from './src/app.js'
import connection from './src/database.js';

//Llamar a la base de datos
connection()

//Verificar si server esta activo
app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`);
    // res.send('Hello there 🎉 ')
})