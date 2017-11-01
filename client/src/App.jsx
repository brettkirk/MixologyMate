import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

// import Nav from './containers/Nav';
import TopBar from './Layouts/TopBar.jsx';
import Drinks from './Layouts/Drinks.jsx';
import themes from './themes';


const App = ({ store }) => {
  const exampleArr = [
  {
    name: 'Test Drink 1',
    iconSrc: 'https://placehold.it/600x600',
    isCommon: false,
    rating: 4.9,
    description: 'this is an example description for the drink. this part can vary in lenght and will get to be quite long. wow this is crazy. words words words. lorem ipsum dolor sit amet yadda yadd yadd and what not.',
    bannerSrc: 'https://placehold.it/1200x300',
    ingredients: ['vodka', 'gin', 'soda'],
    instructions: ['do one thing', 'do another thing', 'do one last thing']
  },
  {
    name: 'Test Drink 2',
    iconSrc: 'https://placehold.it/600x600',
    isCommon: false,
    rating: 4.9,
    description: 'this is an example description for the drink. this part can vary in lenght and will get to be quite long. wow this is crazy. words words words. lorem ipsum dolor sit amet yadda yadd yadd and what not.',
    bannerSrc: 'https://placehold.it/1200x300',
    ingredients: ['vodka', 'gin', 'soda'],
    instructions: ['do one thing', 'do another thing', 'do one last thing']
  },
  {
    name: 'Test Drink 3',
    iconSrc: 'https://placehold.it/600x600',
    isCommon: false,
    rating: 4.9,
    description: 'this is an example description for the drink. this part can vary in lenght and will get to be quite long. wow this is crazy. words words words. lorem ipsum dolor sit amet yadda yadd yadd and what not.',
    bannerSrc: 'https://placehold.it/1200x300',
    ingredients: ['vodka', 'gin', 'soda'],
    instructions: ['do one thing', 'do another thing', 'do one last thing']
  },
  {
    name: 'Test Drink 4',
    iconSrc: 'https://placehold.it/600x600',
    isCommon: false,
    rating: 4.9,
    description: 'this is an example description for the drink. this part can vary in lenght and will get to be quite long. wow this is crazy. words words words. lorem ipsum dolor sit amet yadda yadd yadd and what not.',
    bannerSrc: 'https://placehold.it/1200x300',
    ingredients: ['vodka', 'gin', 'soda'],
    instructions: ['do one thing', 'do another thing', 'do one last thing']
  },
  {
    name: 'Test Drink 5',
    iconSrc: 'https://placehold.it/600x600',
    isCommon: false,
    rating: 4.9,
    description: 'this is an example description for the drink. this part can vary in lenght and will get to be quite long. wow this is crazy. words words words. lorem ipsum dolor sit amet yadda yadd yadd and what not.',
    bannerSrc: 'https://placehold.it/1200x300',
    ingredients: ['vodka', 'gin', 'soda'],
    instructions: ['do one thing', 'do another thing', 'do one last thing']
  },
  {
    name: 'Test Drink 6',
    iconSrc: 'https://placehold.it/600x600',
    isCommon: false,
    rating: 4.9,
    description: 'this is an example description for the drink. this part can vary in lenght and will get to be quite long. wow this is crazy. words words words. lorem ipsum dolor sit amet yadda yadd yadd and what not.',
    bannerSrc: 'https://placehold.it/1200x300',
    ingredients: ['vodka', 'gin', 'soda'],
    instructions: ['do one thing', 'do another thing', 'do one last thing']
  },
  {
    name: 'Test Drink 7',
    iconSrc: 'https://placehold.it/600x600',
    isCommon: true,
    rating: 4.9,
    description: 'this is an example description for the drink. this part can vary in lenght and will get to be quite long. wow this is crazy. words words words. lorem ipsum dolor sit amet yadda yadd yadd and what not.',
    bannerSrc: 'https://placehold.it/1200x300',
    ingredients: ['vodka', 'gin', 'soda'],
    instructions: ['do one thing', 'do another thing', 'do one last thing']
  },
  {
    name: 'Test Drink 8',
    iconSrc: 'https://placehold.it/600x600',
    isCommon: false,
    rating: 4.9,
    description: 'this is an example description for the drink. this part can vary in lenght and will get to be quite long. wow this is crazy. words words words. lorem ipsum dolor sit amet yadda yadd yadd and what not.',
    bannerSrc: 'https://placehold.it/1200x300',
    ingredients: ['vodka', 'gin', 'soda'],
    instructions: ['do one thing', 'do another thing', 'do one last thing']
  },
  {
    name: 'Test Drink 9',
    iconSrc: 'https://placehold.it/600x600',
    isCommon: false,
    rating: 4.9,
    description: 'this is an example description for the drink. this part can vary in lenght and will get to be quite long. wow this is crazy. words words words. lorem ipsum dolor sit amet yadda yadd yadd and what not.',
    bannerSrc: 'https://placehold.it/1200x300',
    ingredients: ['vodka', 'gin', 'soda'],
    instructions: ['do one thing', 'do another thing', 'do one last thing']
  },
  {
    name: 'Test Drink 10',
    iconSrc: 'https://placehold.it/600x600',
    isCommon: false,
    rating: 4.9,
    description: 'this is an example description for the drink. this part can vary in lenght and will get to be quite long. wow this is crazy. words words words. lorem ipsum dolor sit amet yadda yadd yadd and what not.',
    bannerSrc: 'https://placehold.it/1200x300',
    ingredients: ['vodka', 'gin', 'soda'],
    instructions: ['do one thing', 'do another thing', 'do one last thing']
  },
  {
    name: 'Test Drink 11 kjhfl adsjflks dfljkasdhfkl jasdhfl kjasdh fjlkasdfl ksjdhafkl sjdh fklasjd fklsadh fklajsd hlksdj filasf seu filasu l',
    iconSrc: 'https://placehold.it/600x600',
    isCommon: false,
    rating: 4.9,
    description: 'this is an example description for the drink. this part can vary in lenght and will get to be quite long. wow this is crazy. words words words. lorem ipsum dolor sit amet yadda yadd yadd and what not.',
    bannerSrc: 'https://placehold.it/1200x300',
    ingredients: ['vodka', 'gin', 'soda'],
    instructions: ['do one thing', 'do another thing', 'do one last thing']
  },
  {
    name: 'Test Drink 12',
    iconSrc: 'https://placehold.it/600x600',
    isCommon: false,
    rating: 4.9,
    description: 'this is an example description for the drink. this part can vary in lenght and will get to be quite long. wow this is crazy. words words words. lorem ipsum dolor sit amet yadda yadd yadd and what not.',
    bannerSrc: 'https://placehold.it/1200x300',
    ingredients: ['vodka', 'gin', 'soda'],
    instructions: ['do one thing', 'do another thing', 'do one last thing']
  },
  ];
  console.log(exampleArr)
  return (
  <MuiThemeProvider theme={themes.get(0)}>
    <div className="App">
      <TopBar />
      <Grid container>
        <Grid item md={2} />
        <Grid item xs={12} md={8}>
          <Drinks drinksArray={exampleArr} store={store} />
        </Grid>
        <Grid item md={2} />
      </Grid>
    </div>
  </MuiThemeProvider>
);
}

export default App;
