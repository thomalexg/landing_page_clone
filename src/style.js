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
  font-size: 1.3rem;
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
  }
  button:hover {
    color: white;
    background-color: purple;
    border: 1px solid white;
  }
`;

const headerStyle = css`
  display: grid;
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
    display: flex;
    flex-direction: row;
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
  }
  button {
    border-radius: 5px;
    background-color: purple;
    border: 1px solid green;
    color: #fff;
    padding: 0 10px;
    width: 100px;
    border-radius: 25px;
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
  }
`;
const ss1 = css`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  padding-top: 50px;
  margin-bottom: -52px;
  display: grid;
  grid-template-columns: 60% 40%;
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
    padding-top: 20%;
    width: 50%;
  }
  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 1.3rem;
    color: grey;
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
  text-align: center;
  h3 {
    font-size: 3rem;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
  }
  .s2text {
    display: block;
    width: 50%;
    margin: 0 auto;
  }
`;

export { ss2, ss1, headerStyle, fixedStyle };
