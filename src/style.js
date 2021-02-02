/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';

const fixedStyle = css`
  position: fixed;
  background-color: purple;
  z-index: 1001;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
  font-size: 0.99rem;
  font-family: Monaco, monospace;
  color: #fff;

  button {
    margin: auto;
    border-radius: 15px;
    background-color: white;
    color: purple;
    border-style: none;
    margin-left: 20px;
    height: 2rem;
    padding: 5px;
    border: 1px solid transparent;
    vertical-align: middle;
    width: 115px;
    font-family: Monaco, monospace;
    font-weight: bold;
  }
  button:hover {
    color: white;
    background-color: purple;
    border: 1px solid white;
  }
`;

const headerStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  position: fixed;
  width: 100%;
  .box1-1 {
    padding: 40px 0 0 50px;
    color: white;
    font-family: Monaco, monospace;
  }
  h1 {
    display: inline;
    padding-left: 15px;
  }
  .box1-2 {
    justify-self: end;
    margin-right: 2.5rem;
    text-align: center;
  }
  p {
    padding-top: 10px;
    margin: 0 auto;
    z-index: 1001;
    line-height: 50px;
    font-size: 0.9rem;
    font-family: Monaco, monospace;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    line-height: 30px;
  }
  .input {
    background-color: #fff;
    width: 410px;
    border-radius: 30px;
    line-height: 48px;
  }
  input {
    border-style: none;
    padding-left: 33px;
    width: 251px;
    line-height: 36px;
    vertical-align: center;
    outline: none;
    display: inline;
    background-color: transparent;
    font-family: Monaco, monospace;
    font-size: 1.06rem;
  }
  button {
    font-family: Monaco, monospace;
    font-size: 1.05rem;
    letter-spacing: 0.1rem;
    line-height: 36px;
    display: inline;
    border-radius: 5px;
    background-color: purple;
    border: 1px solid green;
    color: #fff;
    padding: 0 10px;
    width: 115px;
    border-radius: 25px;
  }
  /* display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  color: #fff;
  padding-top: 2rem;
  .box1-1 {
    justify-self: start;
    padding-left: 2rem;
  }
  .box1-2 {
    justify-self: end;
    margin-right: 2rem;
    border: 1px solid grey;
    border-radius: 30px;
    padding: 2px 10px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas: 'p input';
    height: 40px;
    background-color: #fff;
    width: 300px;
  }
  input {
    border-style: none;
    width: 100%;
    line-height: 40px;
    vertical-align: center;
    flex-grow: 2;
    outline: none;
    grid-area: 'input';
  }
  p {
    grid-area: 'p';
  }
  button {
    border-radius: 5px;
    background-color: purple;
    border: 1px solid green;
    color: #fff;
    padding: 0 10px;
    width: 100px;
    border-radius: 25px;
    grid-area: 'input';
  }
  i {
    display: inline;
    position: relative;
    margin: 2rem 0 5rem 0.5rem;
  }
  h1 {
    display: inline;
    position: relative;
    margin: 2rem 0 1rem 0.5rem;
  }
  @media (max-width: 1350px) {
    grid-template-columns: 100%;
    position: relative;
    .box1-1 {
      margin: auto;
    }
    .box1-2 {
      display: none;
    }
  } */
`;
const ss1 = css`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  padding-top: 180px;
  margin-bottom: -4px;
  display: grid;
  grid-template-columns: 55% 45%;
  img {
    width: 810.23px;
    height: 718.25px;
    /* min-width: 80%; */
    /* max-height: 80%; */
    margin-left: auto;
    object-fit: cover;
  }
  .pic-1 {
    text-align: right;
  }
  .s1text {
    color: #fff;
    padding-top: 15%;
    width: 50%;
  }
  h2 {
    font-size: 3.3rem;
    letter-spacing: 90%;
    font-weight: bold;
    line-height: 1.1;
    font-family: usual, Inter-Regular, -apple-system, BlinkMacSystemFont,
      'Roboto', 'Open Sans', sans-serif;
  }
  p {
    font-size: 1.2rem;
    color: grey;
    font-family: usual, Inter-Regular, -apple-system, BlinkMacSystemFont,
      'Roboto', 'Open Sans', sans-serif;
  }
  @media (max-width: 1350px) {
    grid-template-columns: 100%;
    grid-template-areas: 'text photo';
    .pic-1 {
      text-align: center;
      grid-area: photo;
    }
    .img1 {
      width: 50vw;
      height: auto;
    }
    .s1text {
      text-align: center;
      margin: 0 auto;
      padding: 0;
      grid-area: 'text';
    }
  }
`;

const ss2 = css`
  background-color: black;
  color: #fff;
  width: 100%;
  height: 20rem;
  padding-top: 200px;
  .con2 {
    margin: 0 auto;
    width: 75%;
  }
  .texts2 {
    width: 50%;
    margin: 0 auto;
    text-align: left;
  }
  p {
    padding-bottom: 0;
    margin: 0;
  }
  h3 {
    margin-top: 0;
    padding-top: 0;
    font-size: 3rem;
    width: 75%;
    padding-bottom: 1.5rem;
    letter-spacing: -0.1rem;
    word-spacing: -0.9rem;
}
  }
  .s2text {
  }
`;

export { ss2, ss1, headerStyle, fixedStyle };
