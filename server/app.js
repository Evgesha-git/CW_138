const express = require('express');
const cors = require('cors');
const fs = require('fs');

let rawdata = fs.readFileSync('db.json');

const app = express();
app.use(express.json());
app.use(cors({
    exposedHeaders: '*'
}));

const db_data = JSON.parse(rawdata);
let notes = db_data.notes;
let users = db_data.users;

app.get('/api/notes', function(_, resp) {
    resp.send(notes);
});

app.get('/api/notes/:id', function(req, resp){
    const id = req.params.id;
    const note = db_data.notes.find(note => note.id === id);
    if(!note){
        resp.status(404).send('Note not found')
    } else {
        resp.send(note);
    }
});

app.post('/api/notes', function(req, resp){
    if (!req.body) return resp.sendStatus(400);

    const data = req.body.data;
    db_data.notes.push(data);
    fs.writeFileSync('db.json', JSON.stringify(db_data));
    resp.send(data);
});

app.delete('/api/notes/:id', function(req, resp){
    const id = req.params.id;
    db_data.notes = db_data.notes.filter(note => note.id !== parseInt(id));
    fs.writeFileSync('db.json', JSON.stringify(db_data));
    resp.send('done');
});

app.put('/api/notes', function(req, resp){
    if (!req.body) return resp.sendStatus(400);

    const id = req.body.id;
    const data = req.body.data;
    db_data.notes = db_data.notes.map(note => {
        if (note.id === id){
            return ({...note, ...data});
        } else{
            return note;
        }
    });
    fs.writeFileSync('db.json', JSON.stringify(db_data));
    resp.send('done');
});

app.listen(3000, function(){
    console.log('Сервер работает');
});