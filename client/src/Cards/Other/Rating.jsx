import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';
import FullStarIcon from 'material-ui-icons/Star';
import HalfStarIcon from 'material-ui-icons/StarHalf';
import EmptyStarIcon from 'material-ui-icons/StarBorder';

const Rating = ({ rating = 1, index }) => (
  
  rating >= 1 && rating < 1.5 &&
  <div>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('1 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('2 Star ', index + 1)}}>
      <EmptyStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('3 Star ', index + 1)}}>
      <EmptyStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('4 Star ', index + 1)}}>
      <EmptyStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('5 Star ', index + 1)}}>
      <EmptyStarIcon />
    </IconButton>
  </div>

  ||

  rating >= 1.5 && rating < 2 &&
  <div>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('1 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('2 Star ', index + 1)}}>
      <HalfStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('3 Star ', index + 1)}}>
      <EmptyStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('4 Star ', index + 1)}}>
      <EmptyStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('5 Star ', index + 1)}}>
      <EmptyStarIcon />
    </IconButton>
  </div>

  ||

  rating >= 2 && rating < 2.5 &&
  <div>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('1 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('2 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('3 Star ', index + 1)}}>
      <EmptyStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('4 Star ', index + 1)}}>
      <EmptyStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('5 Star ', index + 1)}}>
      <EmptyStarIcon />
    </IconButton>
  </div>

  ||

  rating >= 2.5 && rating < 3 &&
  <div>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('1 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('2 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('3 Star ', index + 1)}}>
      <HalfStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('4 Star ', index + 1)}}>
      <EmptyStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('5 Star ', index + 1)}}>
      <EmptyStarIcon />
    </IconButton>
  </div>

  ||

  rating >= 3 && rating < 3.5 &&
  <div>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('1 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('2 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('3 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('4 Star ', index + 1)}}>
      <EmptyStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('5 Star ', index + 1)}}>
      <EmptyStarIcon />
    </IconButton>
  </div>

  ||

  rating >= 3.5 && rating < 4 &&
  <div>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('1 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('2 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('3 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('4 Star ', index + 1)}}>
      <HalfStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('5 Star ', index + 1)}}>
      <EmptyStarIcon />
    </IconButton>
  </div>

  ||

  rating >= 4 && rating < 4.5 &&
  <div>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('1 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('2 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('3 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('4 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('5 Star ', index + 1)}}>
      <EmptyStarIcon />
    </IconButton>
  </div>

  ||

  rating >= 4.5 && rating < 5 &&
  <div>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('1 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('2 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('3 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('4 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('5 Star ', index + 1)}}>
      <HalfStarIcon />
    </IconButton>
  </div>

  ||

  rating === 5 &&
  <div>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('1 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('2 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('3 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('4 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
    <IconButton style={{width: 24, height: 24}} onClick={()=>{console.log('5 Star ', index + 1)}}>
      <FullStarIcon />
    </IconButton>
  </div>
);

export default Rating;
