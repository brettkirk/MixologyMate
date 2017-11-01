import React, { Component } from 'react';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui-icons/Bookmark';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Collapse from 'material-ui/transitions/Collapse';
import Button from 'material-ui/Button';

import Rating from '../Other/Rating.jsx';

const imageStyle = {
  display: 'block',
  width: '100%',
  height: 'auto'
}

const nameStyle = {
  padding: 10,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
}

const favoriteStyle = {
  marginLeft: 10,
  marginBottom: 10
}

const ratingStyle = {
  marginRight: 10,
  marginBottom: 10,
  textAlign: 'right'
}

const bodyStyle = {
  padding: 10,
  paddingTop: 0
}

const listStyle = {
  padding: 10,
  paddingTop: 0,
  paddingBottom: 0,
  marginLeft: 20
}

const listButtonStyle = {
  padding: 10,
  paddingTop: 0,
  paddingBottom: 0,
  marginLeft: 20,
  minHeight: 22
}

const headingStyle = {
  padding: 10,
  paddingBottom: 0
}

class SemiExpandedDrink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  handleShowMoreClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() { 
    return (
      <Grid item xs={12}>
        <Paper style={{minWidth: 180}}>
          <img src={this.props.drink.bannerSrc} style={imageStyle} onClick={()=>{this.props.handleExpandAndCollapse()}} />
          <Typography type='title' style={nameStyle}>{this.props.drink.name}</Typography>
          <Grid container spacing={0} justify='space-between'>
            <Grid item xs={0} style={favoriteStyle}>
              <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('Favorite ', this.props.index + 1)}}>
                <FavoriteIcon />
              </IconButton>
            </Grid>
            <Grid item xs={0} style={ratingStyle}>
              <Rating rating={this.props.drink.rating} index={this.props.index} />
            </Grid>
          </Grid>
          <Typography type='subheading' style={headingStyle}>Description:</Typography>
          <Typography style={bodyStyle}>{this.props.drink.description}</Typography>
          {
            !this.state.expanded &&
            <div style={{textAlign: 'center'}}>
              <IconButton style={{width: 24, height: 24}} onClick={()=>{this.handleShowMoreClick()}}>
                <ExpandMoreIcon />
              </IconButton>
            </div>
          }
          <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
            <Typography type='subheading' style={headingStyle}>Ingredients:</Typography>
            {
              this.props.drink.ingredients.map((ingredient, key) => {
                let brand = 'TEST BRAND';
                return (
                  <Grid container justify='space-between'>
                    <Grid item style={{paddingBottom: 0}}>
                      <Typography style={listStyle} key={key}>• {ingredient}</Typography>
                    </Grid>
                    <Grid item style={{paddingBottom: 0}}>
                      <Button style={listButtonStyle} key={key} href='http://www.google.com'>({brand})</Button>
                    </Grid>
                  </Grid>
                )
              })
            }
            <Typography type='subheading' style={headingStyle}>Instructions:</Typography>
            {
              this.props.drink.instructions.map((instruction, key) => {
                return (
                  <Typography style={listStyle} key={key}>{key + 1}. {instruction}</Typography>
                )
              })
            }
            {
              this.state.expanded &&
              <div style={{textAlign: 'center'}}>
                <IconButton style={{width: 24, height: 24}} onClick={()=>{this.handleShowMoreClick()}}>
                  <ExpandMoreIcon style={{transform: 'rotate(180deg)'}} />
                </IconButton>
              </div>
            }
          </Collapse>
        </Paper>
      </Grid>
    );
  }
}

// const mapStateToProps = state => ({
//   theme: state.session.currentUser ? state.session.currentUser.theme : 0,
// });

export default SemiExpandedDrink;
