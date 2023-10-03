import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/router.js';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
dotenv.config();
app.use(cors());
app.get('/', (req, res) => {
    res.send('Server is up!');
});

app.use('/', router);

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server is running: http://locahost:${PORT}`);
    }
});
