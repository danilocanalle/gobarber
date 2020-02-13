import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  height: 64px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 900px;

  nav {
    align-items: center;
    display: flex;

    img {
      border-right: 1px solid #eee;
      margin-right: 20px;
      padding-right: 20px;
    }
    a {
      color: red;
      font-weight: bold;
    }
  }

  aside {
    align-items: center;
    display: flex;
  }
`;

export const Profile = styled.div`
  border-left: 1px solid #eee;
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    margin-right: 10px;
    text-align: right;

    strong {
      color: #333;
      display: block;
    }
    a {
      color: #999;
      display: block;
      font-size: 12px;
      margin-top: 2px;
    }
  }

  img {
    border-radius: 50%;
    height: 32px;
    width: 32px;
  }
`;
