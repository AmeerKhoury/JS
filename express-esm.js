
import express from 'express';
const app = express();


app.get('/hello', (Request, Response) => {

    Response.send("pong");
})

app.listen(3000, () => {
    console.log("pong");
})