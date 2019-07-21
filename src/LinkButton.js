import React from 'react';

function LinkButton(props) {
  return (
    <a href={props.link}>
      {props.icon}
    </a>
  );
}

export default LinkButton;