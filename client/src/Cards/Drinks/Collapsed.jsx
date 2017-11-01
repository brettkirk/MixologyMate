import React, { Component } from 'react';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui-icons/Bookmark';

import Rating from '../Other/Rating.jsx';

let bartenderPath = (__dirname + 'bartenderApproved.png');

const imageStyle = {
  display: 'block',
  width: '100%',
  height: 'auto',
  zIndex: '1'
}

const imageWithBannerStyle = {
  display: 'block',
  width: '100%',
  height: 'auto',
  zIndex: '1',
  position: 'relative',
  top: -15,
  marginBottom: -15
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

const bannerStyle = {
  margin: '-3.45%',
  width: '100%',
  float: 'left',
  position: 'relative',
  marginBottom: '-90%',
  zIndex: '2',
  pointerEvents: 'none'
}

const CollapsedDrink = ({ drink, index, handleExpandAndCollapse }) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Paper style={{minWidth: 180}}>
      {
        drink.isCommon &&
        <img src={bartenderPath} style={bannerStyle} />
      }
      <img src={drink.iconSrc} style={drink.isCommon && imageWithBannerStyle || imageStyle} onClick={()=>{handleExpandAndCollapse()}}/>
      <Typography type='title' style={nameStyle}>{drink.name}</Typography>
      <Grid container spacing={0} justify='space-between'>
        <Grid item xs={0} style={favoriteStyle}>
          <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('Favorite ', index + 1)}}>
            <FavoriteIcon />
          </IconButton>
        </Grid>
        <Grid item xs={0} style={ratingStyle}>
          <Rating rating={drink.rating} index={index} />
        </Grid>
      </Grid>
    </Paper>
  </Grid>
);

// const mapStateToProps = state => ({
//   theme: state.session.currentUser ? state.session.currentUser.theme : 0,
// });

export default CollapsedDrink;
