import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import CardPicker from '../Cards/Drinks/CardPicker.jsx'

import { toggleDrinkCardExpanded } from '../actions/controlActions';

const Drinks = ({ drinksArray, toggleDrinkCardExpanded, drinkCardExpanded }) => (
  <Grid container style={{paddingLeft: 10, paddingRight: 10}}>
    {
      drinksArray.map((drink, key) => {
        let collapsed = true
        if (Math.floor(Math.random() * 1000) % 5 === 2) {
          collapsed = false;
        }
        return (
          <CardPicker drink={drink} collapsed={collapsed} key={key} index={key} toggleDrinkCardExpanded={toggleDrinkCardExpanded} drinkCardExpanded={drinkCardExpanded} />
        ) 
      })
    }
  </Grid>
);

const mapStateToProps = state => ({
  drinkCardExpanded: state.control.drinkCardExpanded
});

const mapDispatchToProps = dispatch => ({
  toggleDrinkCardExpanded() {
    dispatch(toggleDrinkCardExpanded());
  }
});


// const projectWithData = graphql(projectQuery, {
//   options: ({ match }) => {
//     return {variables: {
//       projectName: match.params.projectName,
//       username: match.params.username
//     }
//     };
//   }})(Project);

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);