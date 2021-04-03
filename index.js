const express = require('express');
morgan = require('morgan');

let Movies = [
  {
    title: 'BLACK PANTHER',
   
  },
  {
    title: 'Citizen Kane',
   
  },
  {
    title: 'Parasite',
    
  }, 
  {
    title: 'Casablanca',
    
  },
  {
    title: 'Avengers: Endgame',
    
  },
  {
    title: 'Knives Out',
    
  },
  {
    title: 'Us',
    
  },
  {
    title: 'Toy Story',
    
  },
  {
    title: 'Lady Bird',
    
  },
  {
    title: 'Mission: Impossible - Fallout'
    
  }
];

// GET requests 

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome myFlix!');
});

app.get('/documentation', (req, res) => {                  
  res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/movies', (req, res) => {
  res.json(Movies);
});

// Logging

const app = express();

app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});

app.get('/secreturl', (req, res) => {
  res.send('This is a secret url with super top-secret content.');
});

// listen for requests

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
}); 

// Error Handling 

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  