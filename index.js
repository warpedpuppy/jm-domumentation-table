const express = require('express');
morgan = require('morgan'); 


let Movies = [
  {
    title: 'BLACK PANTHER',
    genre:  'Action',
    director: 'Ryan Coogler',
  },
  {
    title: 'Citizen Kane',
    genre:  'Mystery',
    director: 'orson Welles',
  },
  {
    title: 'Parasite',
    genre:  'Comedy',
    director: 'Bong Joon-ho',
  }, 
  {
    title: 'Casablanca',
    genre:  'Romance',
    director: 'Michael Curtiz',
  },
  {
    title: 'Avengers: Endgame',
    genre:  'Action',
    director: 'Anthony Russo',
  },
  {
    title: 'Knives Out',
    genre:  'Mystery',
    director: 'Rian Johnson',
  },
  {
    title: 'Us',
    genre:  'Horror', 
    director: 'Jordan Peele',
  },
  {
    title: 'Toy Story',
    genre:  'Animation',
    director: 'John lasseter',
  },
  {
    title: 'Lady Bird',
    genre:  'Comedy',
    director: 'Greta Gerwig',
  },
  {
    title: 'Mission: Impossible - Fallout',
    genre:  'Action',
    director: 'Christopher McQuarrie',
  }
];

// GET requests  

const app = express();

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

app.get('/movies/titles', (req, res) => {
  res.send('movies and titles');
}); 

app.get('/movies/genre', (req, res) => {
  res.send('movies by genre');
}); 

app.get('/movies/director', (req, res) => {
  res.send('movies by directors');
}); 

// Post requests

app.post('/user', (req, res) => {
  res.send('New user');
}); 

app.post('/user/name/add', (req, res) => {
  res.send('movie successfully added');
}); 

// Put requests 

app.put('/user/name/edit', (req, res) => {
  res.send('user successfully edited');
}); 


// Delete requests 

app.delete('/user/name/info', (req, res) => {
  res.send('Successfully deleted user');
});  

app.delete('/user/name/delete', (req, res) => {
  res.send('Successfully deleted movie');
});  

// Logging

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
  