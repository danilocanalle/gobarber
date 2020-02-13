import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 50px auto;
  max-width: 600px;

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
      align-self: flex-start;
      color: #e6476c;
      font-weight: bold;
      margin: 0 0 10px;
    }

    hr {
      background: rgba(255, 255, 255, 0.2);
      border: 0;
      height: 1px;
      margin: 10px 0 20px;
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

  button {
    background: #f64c75;
    border: 0;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    height: 44px;
    margin: 10px 0 0;
    transition: background 0.2s;
    width: 100%;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;
