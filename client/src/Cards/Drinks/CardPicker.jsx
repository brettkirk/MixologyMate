import React, { Component } from 'react';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import FavoriteIcon from 'material-ui-icons/Bookmark';
import Rating from '../Other/Rating.jsx';

import CollapsedDrink from './Collapsed.jsx'
import SemiExpandedDrink from './SemiExpanded.jsx'

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

class CardPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }
  }

  handleExpandAndCollapse = () => {
    this.setState((prevState) => {
      return { collapsed: !prevState.collapsed }
    });
  }

  render() {
    return (
      this.state.collapsed &&
      <CollapsedDrink drink={this.props.drink} index={this.props.index} handleExpandAndCollapse={()=>{this.handleExpandAndCollapse()}} />

      ||

      !this.state.collapsed &&
      <SemiExpandedDrink drink={this.props.drink} index={this.props.index} handleExpandAndCollapse={()=>{this.handleExpandAndCollapse()}} />
    )
  }
}

export default CardPicker;
