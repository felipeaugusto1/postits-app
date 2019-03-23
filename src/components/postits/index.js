import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { EmptyText, Wrapper } from './style';
import Postit from '../postit';

export default class Postits extends Component {  
  static propTypes = {
    postits: PropTypes.array
  };

  static defaultProps = {
    postits: undefined,
  }

  render() {
    const { postits } = this.props;

    if (postits.length) {
      return (
        <Wrapper>
          <FlatList
            data={postits}
            keyExtractor={item => item.postit.text}
            renderItem={({ index, item }) => (
              <Postit index={index} text={item.postit.text} />
            )}
          />
        </Wrapper>
      );
    } else {
      return (
        <EmptyText>Sem registros</EmptyText>
      );
    }
  }
}