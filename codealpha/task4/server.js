const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { OpenAIAPI } = require('openai');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const openai = new OpenAIAPI({ key: "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" });

wss.on('connection', (ws) => {
    ws.on('message', async (message) => {
        const botMessage = await openai.complete({
            model: 'text-davinci-002',
            prompt: message,
            max_tokens: 150,
        });

        ws.send(JSON.stringify({ message: botMessage.choices[0].text }));
    });
});

app.use(express.static('public'));

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
