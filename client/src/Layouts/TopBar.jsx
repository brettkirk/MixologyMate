import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import { toggleDrinkCardExpanded } from '../actions/controlActions';

const TopBar = ({loggedIn = true}) => (
  <div style={{width: '100%', height: 75, background: 'blue', marginBottom: 10, position: 'sticky', top: 0, minWidth: '200px', zIndex: 1}}>
    <Grid container align='center' style={{height: '100%', padding: 20}}>
      <Grid item xs={1}>
        <Typography>FILTER</Typography>
      </Grid>
      <Grid item xs={11}>
        <Grid container justify='space-between' align='center' style={{height: '100%', padding: 20}}>
          <Grid item xs={4} style={{textAlign: 'center'}}>
            <Typography style={{color: 'white'}}>Drinks</Typography>
          </Grid>
          <Grid item xs={4} style={{textAlign: 'center'}}>
            <Typography style={{color: 'white'}}>Users</Typography>
          </Grid>
          {
            loggedIn &&
            <Grid item xs={4} style={{textAlign: 'center'}}>
              <Typography style={{color: 'white'}}>Profile</Typography>
            </Grid>

            ||

            !loggedIn &&
            <Grid item xs={4} style={{textAlign: 'center'}}>
              <Typography style={{color: 'white'}}>Log in</Typography>
            </Grid>
          }
        </Grid>
      </Grid>
    </Grid>
  </div>
);

// const mapStateToProps = state => ({
//   drinkCardExpanded: state.control.drinkCardExpanded
// });

// const mapDispatchToProps = dispatch => ({
//   toggleDrinkCardExpanded() {
//     dispatch(toggleDrinkCardExpanded());
//   }
// });


// const projectWithData = graphql(projectQuery, {
//   options: ({ match }) => {
//     return {variables: {
//       projectName: match.params.projectName,
//       username: match.params.username
//     }
//     };
//   }})(Project);

// export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
export default TopBar;