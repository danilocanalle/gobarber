import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;

  max-width: 600px;

  header {
    align-items: center;
    align-self: center;
    display: flex;

    button {
      background: none;
      border: 0;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  background: #fff;
  border-radius: 4px;
  opacity: ${props => (props.past ? 0.6 : 1)};
  padding: 20px;

  strong {
    color: ${props => (props.available ? '#999' : '#48a0dc')};
    display: block;
    font-size: 20px;
    font-weight: normal;
  }

  span {
    color: ${props => (props.available ? '#999' : '#666')};
    display: block;
    margin-top: 3px;
  }
`;
