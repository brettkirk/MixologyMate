import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

// import Nav from './containers/Nav';
import themes from './themes';

const defaultTheme = 0;

/*
<Nav style={{marginBottom: 500}}/>
      <div style={{paddingTop: 60}}>
        <switch>
          <Route exact path='/' component={Search}/>
          <Route exact path='/search' component={Search}/>
          <Route
            exact
            path='/project/:username/:projectName'
            component={Project}
          />
          <Route exact path='/project/create' component={CreateProject}/>
          <Route exact path='/user/:username' component={User}/>
          <Route exact path='/settings' component={Settings}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
        </switch>
      </div>
      <SnackBar
        open={alert.message}
        onEnter={() => {
          setTimeout(clearAlert, 3500);
        }}
        message={alert.message}
        type='display1'
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        SnackbarContentProps={alert.type === 'error' ? {
          style: {
            backgroundColor: '#d50000',
            color: 'white'
          }
        } : {}}
      />
      */
let theme = 0;

const App = ({ theme }) => (
  <MuiThemeProvider theme={themes.get(0)}>
    <div className="App">
      <Grid container>
        <Grid item xs={12} md={4}>
          <Paper style={{height: 300}}>
            <Typography>Test card 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper style={{height: 300}}>
            <Typography>Test Card 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper style={{height: 300}}>
            <Typography>Test Card 3</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  </MuiThemeProvider>
);

// const mapStateToProps = state => ({
//   theme: state.session.currentUser ? state.session.currentUser.theme : 0,
// });

export default App;
