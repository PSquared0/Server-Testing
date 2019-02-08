const express = require('express');


const db = require('./data/dbHelpers.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('api": "running');
});

server.get('/bands', (req, res) => {
  db('bands')
    .select('id', 'band_name', 'hit_song', 'years_active')
    .then(bands => {
      res.json(bands);
    })
    .catch(err => res.send(err));
});

server.post('/bands', (req, res) => {
  const band = req.body;
  db.insert(band)
    .into('bands')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.delete('/bands/:id', (req, res) => {
  const {id} = req.params;
  db('bands').where('id', id).del()
  .then(rowCount => {
    res.status(201).json(rowCount);
  }).catch(err => {
    res.status(500).json({err: 'Failed to delete band'});
  });
});

module.exports = server;