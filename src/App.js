/** @jsxImportSource @emotion/react */ import './App.css';
import { fixedStyle, headerStyle, ss1, ss2, ss3, ss4, ss5 } from './style';

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
              bottom, left to right. But that’s not how our minds work. What if
              we had a tool that could work in straight lines or… well… not
              straight lines? We think it makes for a pretty powerful thinking
              tool. We built a new style of text editor from the ground up to
              better support creative thinking. Clover lets you explode
              traditional documents and work in a more free-form manner for
              better brainstorming, mind-mapping, and exploration.
            </p>
          </div>
          <div className="img-2">
            <img src="pics/web.png" alt="note app"></img>
          </div>
        </div>
      </div>
      <div id={3} css={ss3}>
        <div className="texts3">
          <p>FROM IDEA TO REALITY</p>
          <h3>Manage your tasks. Plan your days.</h3>
          <p className="s3text">
            Ideas are nothing without execution. Clover integrates tasks
            directly within your documents to make project management as simple
            as writing. The Agenda view lets you track notes and tasks per day,
            so you never forget anything.
          </p>
        </div>
        <div className="img-4">
          <img src="pics/phone-s-3.png" alt="phone"></img>
        </div>
      </div>
      <div id={4} css={ss4}>
        <div className="img-4">
          <img src="pics/s3.png" alt="alt"></img>
        </div>
        <div className="con4">
          <div className="texts4">
            <p>A COMMAND LINE FOR CREATIVITY</p>
            <h3>Quickly capture ideas, notes, and tasks.</h3>
            <p className="s4text">
              We know ideas can strike at any moment, so we made it as
              frictionless as possible to capture things as they pop up. Open
              Clover's command prompt with a simple keystroke, and it will
              interpret what you write to automatically log notes and schedule
              tasks for you so you can get back to work.
            </p>
          </div>
        </div>
      </div>

      <div id={5} css={ss5}>
        <div>
          <img src="pics/footer.png" alt="footer"></img>
          <div className="footer">
            <div className="left">
              <p className="cloner">Cloner</p>
              <p className="inc">2020 CLoner Software Inc.</p>
            </div>
            <div className="tags">
              <a href="#1">Twitter</a>
              <a href="#1">Privacy</a>
              <a href="#1">Terms</a>
              <a href="#1">Contact us</a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <img src="pics/footer.png" alt="footer"></img>
        <div className="footer">
          <div className="left">
            <p className="cloner">Cloner</p>
            <p className="inc">2020 CLoner Software Inc.</p>
          </div>
          <div className="tags">
            <a href="#1">Twitter</a>
            <a href="#1">Privacy</a>
            <a href="#1">Terms</a>
            <a href="#1">Contact us</a>
          </div>
        </div>
      </div> */}
      <div className="fixed" css={fixedStyle}>
        WE JUST RAISED A $1.1M SEED ROUND AND WE’RE HIRING ENGINEERS!
        <button>APPLY NOW</button>
      </div>
    </div>
  );
}
export default App;
