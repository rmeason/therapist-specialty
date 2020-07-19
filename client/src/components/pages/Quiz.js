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
    <label className="statement">Are you more happy or sad?</label>
    <ul className='likert'>
      <li>
        <input type="radio" name="likert2" value="1" />
        <label>Happy</label>
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
        <label>Sad</label>
      </li>
    </ul>
    <label className="statement">Are you more worried or calm?</label>
    <ul className='likert'>
      <li>
        <input type="radio" name="likert3" value="1" />
        <label>Worried</label>
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
        <label>Calm</label>
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





















