import React from "react";
import "./Quiz.css"


const Quiz = () => (

 <div class="wrap">
  <h1 class="quiz-header">Please answer a few questions:</h1>
  <form action="./Search" method="get">
    <label class="statement">Are you more anxious or depressed?</label>
    <ul class='likert'>
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
    <label class="statement">Are you more happy or sad?</label>
    <ul class='likert'>
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
    <label class="statement">Are you more worried or calm?</label>
    <ul class='likert'>
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
    <div class="buttons">
      {/* <button class="clear">Clear</button> */}
      <button class="submit">Submit</button>
    </div>
  </form>
</div>


);

export default Quiz;





















