// Importar a dependencia do SQLITE3
const sqlite3 = require("sqlite3").verbose()


//Iniciar o objeto de banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

 /* db.serialize(() => {
    //Create table
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER primary key autoincrement,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
            );
    `)


    const query = `
     INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
   ) VALUES (?,?,?,?,?,?,?); 
   `
    
   
    const values = [
        "https://ichef.bbci.co.uk/news/320/cpsprodpb/F403/production/_109476426_jheison3.png",
        "Paperside",
        "Higor",
        "Numero 260",
        "SC",
        "Rio do sul",
        "Residuos Eletrônicos"
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }

        console.log("cadastrado com sucesso")
        console.log(this)
    }

   db.run(query, values, afterInsertData) //para inserir dados

    
    db.all(`SELECT * FROM PLACES`, function(err, rows) {
       if(err) {
           return console.log(err)
       }

       console.log("Aqui estao seus registros :")
       console.log(rows)
   }) 

   db.run(`DELETE FROM places WHERE id = ?`, [], function(err, rows) {
       if(err) {
           return console.log(err)
       }

       console.log("Deletado com sucesso")
   }) 
}) 
*/