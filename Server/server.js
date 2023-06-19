import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
const app = express();
import router from './router/router.js';

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

app.use('/api',router);

const port = 8080;
// http get request
app.get('/' ,(req, res) => {
    res.status(201).json('home get request')
})
// start server

connect().then(() => {
    try {
        app.listen(port, ()=>{
            console.log(`Server connected to  http://localhost:${port}`);
        })
    } catch (error) {
        console.log('can not connect to database');
    }
}).catch( error => {
    console.log('Invalid database connection');

})


