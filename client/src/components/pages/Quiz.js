import React from "react";
import "./Quiz.css"


const Quiz = () => (

<div class="wrap">
  <h1 class="likert-header">Please answer a few questions:</h1>
  <form action="">
    <label class="statement">Are you more anxious or depressed?</label>
    <ul class='likert'>
      <li>
        <input type="radio" name="likert" value="strong_agree" />
        <label>Anxious</label>
      </li>
      <li>
        <input type="radio" name="likert" value="strong_agree" />
        <label></label>
      </li>
      <li>
        <input type="radio" name="likert" value="strong_agree" />
        <label>Neutral</label>
      </li>
      <li>
        <input type="radio" name="likert" value="disagree" />
        <label></label>
      </li>
      <li>
        <input type="radio" name="likert" value="strong_agree" />
        <label>Depressed</label>
      </li>
    </ul>
    <label class="statement">Are you more happy or sad?</label>
    <ul class='likert'>
      <li>
        <input type="radio" name="likert" value="strong_agree" />
        <label>Happy</label>
      </li>
      <li>
        <input type="radio" name="likert" value="strong_agree" />
        <label></label>
      </li>
      <li>
        <input type="radio" name="likert" value="strong_agree" />
        <label>Neutral</label>
      </li>
      <li>
        <input type="radio" name="likert" value="disagree" />
        <label></label>
      </li>
      <li>
        <input type="radio" name="likert" value="strong_agree" />
        <label>Sad</label>
      </li>
    </ul>
    <label class="statement">Are you more worried or calm?</label>
    <ul class='likert'>
      <li>
        <input type="radio" name="likert" value="strong_agree" />
        <label>Worried</label>
      </li>
      <li>
        <input type="radio" name="likert" value="strong_agree" />
        <label></label>
      </li>
      <li>
        <input type="radio" name="likert" value="strong_agree" />
        <label>Neutral</label>
      </li>
      <li>
        <input type="radio" name="likert" value="disagree" />
        <label></label>
      </li>
      <li>
        <input type="radio" name="likert" value="strong_agree" />
        <label>Calm</label>
      </li>
    </ul>
    <div class="buttons">
      <button class="clear">Clear</button>
      <button class="submit">Submit</button>
    </div>
  </form>
</div>

);

export default Quiz;































// import React from 'react';
// import PropTypes from 'prop-types';
// import Question from "../Question";
// import QuestionCount from '../QuestionCount';
// import AnswerOption from '../AnswerOption';




// render (
//     <div className="App">
//       <div className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2>React Quiz</h2>
//       </div>
//       <Question content="What is your favourite food?" />
//     </div>
//   );





//     const Quiz = () => (

//         <div class="about-the-author">
//         <h3 class="author-title">Quiz Page</h3>
//         <div class="row">
//             <div class="small-12 medium-4 columns">
//             <div class="author-image">
//                 {/* <img src={depression} /> */}
//             </div>
//             </div>
//             <div class="small-12 medium-8 columns">
//             <h4 class="separator-left">This is the quiz page</h4>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eum, iusto vel repudiandae, quaerat soluta sequi officia. Blanditiis atque, illo eaque sint in architecto illum nostrum repudiandae labore tenetur! Eaque impedit pariatur odio ad ipsum qui aspernatur dolorem consequuntur a molestias nisi, quae voluptatem expedita, inventore voluptatibus dolores, veritatis corporis facilis laudantium explicabo vero! Non hic quia facilis blanditiis eum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eum, iusto vel repudiandae, quaerat soluta sequi officia. Blanditiis atque, illo eaque sint in architecto illum nostrum repudiandae labore tenetur! Eaque impedit pariatur odio ad ipsum qui aspernatur dolorem consequuntur a molestias nisi, quae voluptatem expedita, inventore voluptatibus dolores, veritatis corporis facilis laudantium explicabo vero! Non hic quia facilis blanditiis eum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eum, iusto vel repudiandae, quaerat soluta sequi officia. Blanditiis atque, illo eaque sint in architecto illum nostrum repudiandae labore tenetur! Eaque impedit pariatur odio ad ipsum qui aspernatur dolorem consequuntur a molestias nisi, quae voluptatem expedita, inventore voluptatibus dolores, veritatis corporis facilis laudantium explicabo vero! Non hic quia facilis blanditiis eum.</p>
//             </div>
//         </div>
//         </div>
    
    
    
//     );


// export default Quiz;