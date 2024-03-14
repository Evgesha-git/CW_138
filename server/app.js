const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    exposedHeaders: '*'
}));

let notes = [];

app.get('/api/notes', function(_, resp) {
    console.log(resp);
    resp.send(notes);
});

app.get('/api/notes/:id', function(req, resp){
    const id = req.params.id;
    const note = notes.find(note => note.id === id);
    if(!note){
        resp.status(404).send('Note not found')
    } else {
        resp.send(note);
    }
});

app.post('/api/notes', function(req, resp){
    if (!req.body) return resp.sendStatus(400);

    const data = req.body.data;
    notes.push(data);
    resp.send(data);
});

app.delete('/api/notes/:id', function(req, resp){
    const id = req.params.id;
    notes = notes.filter(note => note.id !== id);
    resp.send('done');
});

app.put('/api/notes', function(req, resp){
    if (!req.body) return resp.sendStatus(400);

    const id = req.body.id;
    const data = req.body.data;
    notes = notes.map(note => {
        if (note.id === id){
            return ({...note, ...data});
        } else{
            return note;
        }
    });
    resp.send('done');
});

app.listen(3000, function(){
    console.log('Сервер работает');
});