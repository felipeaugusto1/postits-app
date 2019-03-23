import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, Wrapper } from './style';

export default class Postit extends Component {  
  static propTypes = {
    index: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  };

  render() {
    const { index, text } = this.props;

    return (
      <Wrapper key={index}>
        <Text>{text}</Text>
      </Wrapper>
    );
  }
}