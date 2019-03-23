import React, { Component, Fragment } from 'react';  
import { filter } from 'lodash';
import { Wrapper, Title, TouchableButton, ButtonText, Slide, TextInputt } from './style';
import { addPostit, postitsRef } from './src/config';
import Swiper from 'react-native-swiper';
import Postits from './src/components/postits';

export default class App extends Component {  
  state = {
    selectedIndex: 0,
    postits: [],
    text: '',
  }

  componentDidMount() {
    postitsRef.on('value', snapshot => {
      const data = snapshot.val();

      if (data !== null) {
        const items = Object.values(data);
        this.setState({ postits: items });
      }
    });
  }

  handleSubmit = () => {
    const { selectedIndex } = this.state;

    const postit = {
      text: this.state.text,
      type: selectedIndex,
    }

    this.setState({ text: '' });

    addPostit(postit);
  };

  getTitle = () => {
    const { selectedIndex } = this.state;

    switch (selectedIndex) {
      case 0:
        return 'Elogios';
      case 1:
        return 'Críticas Construtivas';
      case 2:
        return 'Parabenizações';
      case 3:
        return 'Ideias';
      default:
        break;
    }
  };

  render() {
    const { postits } = this.state;

    return (
      <Fragment>
        <Wrapper>
          <Title>{this.getTitle()}</Title>
          
          <TextInput
            value={this.state.text}
            onChangeText={(text) => this.setState({text})}
          />

          <TouchableButton onPress={() => this.handleSubmit()}>
            <ButtonText>Enviar</ButtonText>
          </TouchableButton>
        </Wrapper> 

        <Swiper
          loop={false}
          onIndexChanged={(index) => this.setState({ selectedIndex: index })}
        >
          <Slide>
            <Postits postits={filter(postits, item => item.postit.type == 0)} />
          </Slide>
          <Slide>
            <Postits postits={filter(postits, item => item.postit.type == 1)} />
          </Slide>
          <Slide>
            <Postits postits={filter(postits, item => item.postit.type == 2)} />
          </Slide>
          <Slide>
            <Postits postits={filter(postits, item => item.postit.type == 3)} />
          </Slide>
        </Swiper>
      </Fragment>
    );
  }
}