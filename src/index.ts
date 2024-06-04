import express from 'express';

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send(req.query['hub.challenge']);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('done');
});

app.post('/webhook', (req, res) => {
    console.log('wb');
});


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});