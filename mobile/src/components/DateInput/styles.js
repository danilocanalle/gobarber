import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 60px 0 30px;
`;

export const DateButton = styled.TouchableOpacity`
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  flex-direction: row;
  height: 46px;
  margin: 0 30px;
  padding: 0 15px;
`;

export const DateText = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 15px;
`;

export const Picker = styled.View`
  background: #fff;
  margin-top: 30px;
  padding: 15px 30px;
`;
