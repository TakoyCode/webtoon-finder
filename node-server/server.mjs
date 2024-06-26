import cors from 'cors';
import fetch from 'node-fetch';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/proxy', async (req, res) => {
    const { url } = req.query;
    try {
        const response = await fetch(url);
        const data = await response;
        const stringData = JSON.stringify(data);
        // res.json(stringData);
        res.send(stringData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});


app.listen(PORT, () => {
    console.log(`CORS proxy server is running on port ${PORT}`);
});



// RUN COMMAND TIL TERMINALEN:
// node server.mjs --experimental-modules