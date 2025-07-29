import  express from "express";



const app = express();
const PORT = 5454;


app.get("/", (req, res) => {
    console.log('hello bangladesh')
    res.send("Hello World")
})
app.listen(PORT, () => {
    console.log(`The server is running on the port ${PORT}`)
})