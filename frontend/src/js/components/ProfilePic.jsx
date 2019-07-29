import styled from 'styled-components';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';


export default class ProfilePic extends Component {
    render(props) {
        return (
            <div>
                <CircleWithColor size = {this.props.size}>
                   
                    {this.props.size==="small"?  <Typography variant="h6" >{ this.props.name.substring(0,1)} </Typography>:  <Typography variant="h3" >{ this.props.name.substring(0,1)} </Typography>}
                </CircleWithColor>
            </div>
        )
    }
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  ProfilePic.propTypes = {
    name: PropTypes.string
  };

const CircleWithColor= styled (Box)`
    border-radius:50%;
    height:${props =>props.size === "small" ? 30:75}px;
    width:${props =>props.size === "small" ? 30:75}px;
    background-color:${getRandomColor()};
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
`

