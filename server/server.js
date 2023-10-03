import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();
app.use(bodyParser.json());
dotenv.config();

app.get('/', (req, res) => {
    res.send('Server is up!');
});

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server is running: http://locahost:${PORT}`);
    }
});
