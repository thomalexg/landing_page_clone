/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
import './App.css';

const headerStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .box1-1 {
    justify-self: start;
  }
  .box1-2 {
    justify-self: end;
  }
  i {
    display: inline;
  }
  h1 {
    display: inline;
  }
`;
const ss1 = css`
  padding-top: 50px;
  display: grid;
  grid-template-columns: 60% 40%;
  img {
    width: 80%;
    margin-left: auto;
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
`;

function App() {
  return (
    <div className="App">
      <div css={headerStyle} className="App-header container-1">
        <div className="box1-1">
          <i class="fab fa-pagelines fa-3x"></i>
          <h1>Cloner</h1>
        </div>
        <form className="box1-2">
          <input
            type="email"
            placeholder="Enter mail to subscribe, asshole!"
          ></input>
          <button>Subscribe!</button>
        </form>
      </div>
      <div id={1} css={ss1}>
        <div className="pic-1">
          <img src="pics/tabphone-s-1.jpg" alt="Tablet and phone"></img>
        </div>
        <div className="grid-item-1 s1text">
          <h2>The all-in-one notebook for creatives.</h2>
          <p>Brainstorm, write, and plan in a single tool.</p>
        </div>
      </div>
      <div id={2}>Section 2</div>
      <div id={3}>Section 3</div>
      <div id={4}>Section 4</div>
      <div id={5}>Section 5</div>
      <div id={6}>Section 6</div>
    </div>
  );
}
export default App;
