const express = require('express')
const axios = require("axios").default;

const app = express()
const port = 3010

app.use(express.json());

const mocks = [
    {
        id: '97860161-5bb6-41c2-b342-1c255284802e',
        serverName: 'Random 3rd Party Community Server',
        playersOnServer: 0,
        splotReserved: 0,
        maxPlayers: 32,
        acceptingPlayers: true,
        serverDescription: 'The fake server list is real?????',
        squadMode: 'SOLO',
        gamemode: 'BattleRoyale',
        passworded: false
    }
]

app.get('/', (req, res) => {
    res.send('Mock TABG Community Server!')
})

app.post('/GetServerList', (req, res) => {
    // res.send('Mock TABG Community Server!');
    const options = {
        method: 'POST',
        url: 'https://tabgcommunitybackend.azurewebsites.net/GetServerList',
        headers: {
            'Content-Type': 'application/json',
        },
        data: { Version: req.body.Version }
    };

    axios.request(options).then(function (response) {
        // console.log(response.data)
        const data = response.data;
        for (let i = 0; i < mocks.length; i++) {
            data.servers.push(mocks[i])
        }

        res.json(data)
    }).catch(function (error) {
        // console.error(error);
        res.json({
            error: true
        })
    });
})

app.post('/GetServerInfo', (req, res) => {
    for(let i = 0; i < mocks.length; i++) {
        if(mocks[i].id === req.body.id) {
            res.json({
                joinCode: '127.0.0.1:9701',
                errorCode: null,
            })
            return;
        }
    }

    const options = {
        method: 'POST',
        url: 'https://tabgcommunitybackend.azurewebsites.net/GetServerInfo',
        headers: {
            'Content-Type': 'application/json',
        },
        data: { id: req.body.id, password: req.body.password }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        res.json(response.data)
    }).catch(function (error) {
        // console.error(error);
        res.json({
            error: true
        })
    });
})

app.listen(port, () => {
    console.log(`TABG app listening on port ${port}`)
})
