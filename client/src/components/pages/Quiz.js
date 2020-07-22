import React from "react";
import "./Quiz.css"


const Quiz = () => (

 <div className="wrap">
  <h1 className="quiz-header">Please answer a few questions:</h1>
  <form action="./search" method="get">
    <label className="statement">Are you more anxious or depressed?</label>
    <ul className='likert'>
      <li>
        <input type="radio" name="likert1" value="1" />
        <label>Anxious</label>
      </li>
      <li>
        <input type="radio" name="likert1" value="2" />
        <label></label>
      </li>
      <li>
        <input type="radio" name="likert1" value="3" />
        <label>Neutral</label>
      </li>
      <li>
        <input type="radio" name="likert1" value="4" />
        <label></label>
      </li>
      <li>
        <input type="radio" name="likert1" value="5" />
        <label>Depressed</label>
      </li>
    </ul>
    <label className="statement">Would you describe yourself as manic or lacking expression?</label>
    <ul className='likert'>
      <li>
        <input type="radio" name="likert2" value="1" />
        <label>Manic</label>
      </li>
      <li>
        <input type="radio" name="likert2" value="2" />
        <label></label>
      </li>
      <li>
        <input type="radio" name="likert2" value="3" />
        <label>Neutral</label>
      </li>
      <li>
        <input type="radio" name="likert2" value="4" />
        <label></label>
      </li>
      <li>
        <input type="radio" name="likert2" value="5" />
        <label>Expressionless</label>
      </li>
    </ul>
    <label className="statement">Are you struggling more with controlling your anger, or establishing healthy boundaries?</label>
    <ul className='likert'>
      <li>
        <input type="radio" name="likert3" value="1" />
        <label>Anger</label>
      </li>
      <li>
        <input type="radio" name="likert3" value="2" />
        <label></label>
      </li>
      <li>
        <input type="radio" name="likert3" value="3" />
        <label>Neutral</label>
      </li>
      <li>
        <input type="radio" name="likert3" value="4" />
        <label></label>
      </li>
      <li>
        <input type="radio" name="likert3" value="5" />
        <label>Boundaries</label>
      </li>
    </ul>
    <div className="buttons">
      {/* <button className="clear">Clear</button> */}
      <button className="submit">Submit</button>
    </div>
  </form>
</div>


);

export default Quiz;





















