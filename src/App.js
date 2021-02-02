/** @jsxImportSource @emotion/react */ import './App.css';
import { fixedStyle, headerStyle, ss1, ss2 } from './style';

// const fixedStyle = css`
//   position: fixed;
//   background-color: purple;
//   z-index: 1001;
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   height: 50px;
//   text-align: center;
//   vertical-align: middle;
//   line-height: 50px;
//   font-size: 1.3rem;
//   font-family: Monaco, monospace;
//   color: #fff;

//   button {
//     margin: auto;
//     border-radius: 15px;
//     background-color: white;
//     color: purple;
//     border-style: none;
//     margin-left: 20px;
//     height: 2rem;
//     padding: 5px;
//     border: 1px solid transparent;
//   }
//   button:hover {
//     color: white;
//     background-color: purple;
//     border: 1px solid white;
//   }
// `;

// const headerStyle = css`
//   display: grid;
//   width: 100%;
//   grid-template-columns: 1fr 1fr;
//   position: fixed;
//   color: #fff;
//   padding-top: 2rem;
//   .box1-1 {
//     justify-self: start;
//     padding-left: 2rem;
//   }
//   .box1-2 {
//     justify-self: end;
//     margin-right: 2rem;
//     border: 1px solid grey;
//     border-radius: 30px;
//     padding: 2px 10px;
//     display: flex;
//     flex-direction: row;
//     height: 40px;
//     background-color: #fff;
//     width: 40%;
//   }
//   input {
//     border-style: none;
//     line-height: 40px;
//     vertical-align: center;
//     flex-grow: 2;
//     outline: none;
//   }
//   button {
//     border-radius: 5px;
//     background-color: purple;
//     border: 1px solid green;
//     color: #fff;
//     padding: 0 10px;
//     width: 100px;
//     border-radius: 25px;
//   }
//   i {
//     display: inline;
//     position: relative;
//     margin: 2rem 0 5rem 0.5rem;
//   }
//   h1 {
//     display: inline;
//     position: relative;
//     margin: 2rem 0 1rem 0.5rem;
//   }
// `;
// const ss1 = css`
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   padding-top: 50px;
//   margin-bottom: -52px;
//   display: grid;
//   grid-template-columns: 60% 40%;
//   img {
//     width: 810.23px;
//     height: 718.25px;
//     /* min-width: 80%; */
//     /* max-height: 80%; */
//     margin-left: auto;
//     object-fit: cover;
//   }
//   .pic-1 {
//     text-align: right;
//   }
//   .s1text {
//     color: #fff;
//     padding-top: 20%;
//     width: 50%;
//   }
//   h2 {
//     font-size: 3rem;
//   }
//   p {
//     font-size: 1.3rem;
//     color: grey;
//   }
//   @media (max-width: 1350px) {
//     grid-template-columns: 100%;
//     .pic-1 {
//       text-align: center;
//     }
//     .s1text {
//       text-align: center;
//       margin: 0 auto;
//       padding: 0;
//     }
//   }
// `;

// const ss2 = css`
//   background-color: black;
//   color: #fff;
//   width: 100%;
//   height: 20rem;
//   text-align: center;
//   h3 {
//     font-size: 3rem;
//     padding-bottom: 1.5rem;
//     padding-top: 1.5rem;
//   }
//   .s2text {
//     display: block;
//     width: 50%;
//     margin: 0 auto;
//   }
// `;

function App() {
  return (
    <div className="App">
      <div css={headerStyle} className="App-header container-1">
        <div className="box1-1">
          <i class="fab fa-pagelines fa-3x"></i>
          <h1>Cloner</h1>
        </div>
        <form className="box1-2">
          <p>Sign up for early access</p>
          <div className="input">
            <input type="email" placeholder="EMAIL ADDRESS"></input>
            <button>SIGN UP</button>
          </div>
        </form>
      </div>
      <div id={1} css={ss1}>
        <div className="pic-1">
          <img
            className="img1"
            src="pics/tabphone-s-1.jpg"
            alt="Tablet and phone"
          ></img>
        </div>
        <div className="grid-item-1 s1text">
          <h2>The all-in-one notebook for creatives.</h2>
          <p>Brainstorm, write, and plan in a single tool.</p>
        </div>
      </div>
      <div id={2} css={ss2}>
        <div className="con2">
            <div className="texts2">
              <p>REIMAGINING THE PAGE</p>
              <h3>Designed for better writing and thinking.</h3>
              <p className="s2text">
                Word processors have always worked in straight lines – top to
                bottom, left to right. But that’s not how our minds work. What
                if we had a tool that could work in straight lines or… well… not
                straight lines? We think it makes for a pretty powerful thinking
                tool. We built a new style of text editor from the ground up to
                better support creative thinking. Clover lets you explode
                traditional documents and work in a more free-form manner for
                better brainstorming, mind-mapping, and exploration.
              </p>
            </div>
        </div>
      </div>
      <div id={3}>Section 3</div>
      <div id={4}>Section 4</div>
      <div id={5}>Section 5</div>
      <div id={6}>Section 6</div>
      <div className="fixed" css={fixedStyle}>
        WE JUST RAISED A $1.1M SEED ROUND AND WE’RE HIRING ENGINEERS!
        <button>APPLY NOW</button>
      </div>
    </div>
  );
}
export default App;
