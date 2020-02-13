import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  align-items: center;
  background: linear-gradient(-90deg, #54bbff, #48a0dc);
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 315px;
  text-align: center;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      color: #fff;
      height: 44px;
      margin: 0 0 10px;
      padding: 0 15px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #e6476c;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      background: #32ac52;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-size: 16px;
      height: 44px;
      margin: 5px 0 0;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#32ac52')};
      }
    }

    a {
      color: #fff;
      font-size: 16px;
      margin-top: 15px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
