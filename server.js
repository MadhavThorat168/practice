const express =require("express")
const mysql2 = require("mysql2/promise")



const app= express();

app.listen(4000,'0.0.0.0', () =>{
    console.log('server started at port 4000')
})


app.use(express.json())



function createResult(data, error){
    if (data)
        return {status: "success", data: data}
    else
        return {status: "error", error: error}
}


const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Madhav@168',
    database:'exam'
})


app.get('/notes', async (req, res) => {
    const sql =`SELECT * FROM notes`
    try {
        const data = await pool.query(sql)
        console.log(data)
        res.send(createResult(data[0],null))
    } catch (error) {
        res.send(createResult(null, error))
    }
})


app.post("/notes", async (req, res) =>{
    const {title,content} = req.body;
    const sql= `INSERT INTO notes(title, content) VALUES (?,?)`
    try {
        const data = await pool.query(sql, [title,content])
        res.send(createResult(data[0], null))
    } catch (error) {
        res.send(createResult(null,error))
    }
})


app.delete("/notes/:id", async (req, res) =>{
    const id = req.params.id;
    const sql = `DELETE FROM notes WHERE id = ?`
    try {
        const data = await pool.query(sql, [id])
        res.send(createResult(data[0], null))
    } catch (error) {
        res.send(createResult(null, error))
    }
});

