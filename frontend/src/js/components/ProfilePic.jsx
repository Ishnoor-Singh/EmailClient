import styled from "styled-components";
import { Box } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";

export default function ProfilePic(props) {
  // const colors= ["blue", "darkcyan", "olivegreen"]
  return (
    <div>
      <CircleWithColor size={props.size}>
        {props.size === "small" ? (
          <Typography variant="h6">{props.name.substring(0, 1)} </Typography>
        ) : (
          <Typography variant="h3">{props.name.substring(0, 1)} </Typography>
        )}
      </CircleWithColor>
    </div>
  );
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const CircleWithColor = styled(Box)`
  border-radius: 50%;
  height: ${props => (props.size === "small" ? 30 : 75)}px;
  width: ${props => (props.size === "small" ? 30 : 75)}px;
  background-color: ${getRandomColor()};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
