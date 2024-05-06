import express from 'express';
import morgan from 'morgan';
import Routes from './routes/index.js';

const app = express();


app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/v1", Routes);

app.use((req,res) => {
    res.send({
        code: 404,
        msg: "page not found",
        success: false
    })
    return
})

export default app;