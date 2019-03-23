import styled from 'styled-components';
import { Platform } from 'react-native';
import { colors } from './src/styles/color';

export const ButtonText = styled.Text`
  fontSize: 16px;
  align-self: center;
  color: ${colors.orange};
`;

export const Slide = styled.View`
  flex: 1;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`;

export const TextInput = styled.TextInput.attrs({
  textAlignVertical: 'top',
  autoCorrect: false,
  multiline: true,
  placeholder: 'New message',
})`
  height: 100px;
  padding: 4px;
  margin-right: 5px;
  font-size: 16;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.lightGray};
  color: ${colors.black};
  background-color: ${colors.white};
`;

export const Title = styled.Text`
  margin-top: ${Platform.OS === 'ios' ? 40 : 20}px;
  margin-bottom: 20px;
  font-size: 25;
  color: ${colors.black};
  text-align: center;
`;

export const TouchableButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.3,
  underlayColor: `${colors.white}`,
})`
  height: 45px;
  flex-direction: row;
  background-color: ${colors.white};
  border-color: ${colors.orange};
  border-width: 1px;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-top: 10px;
  align-self: stretch;
  justify-content: center;
`;

export const Wrapper = styled.View`
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.white};
`;