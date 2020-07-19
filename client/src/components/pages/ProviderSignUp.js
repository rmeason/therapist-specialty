import React from "react";
import "./ProviderSignUp.css"

const ProviderSignUp = () => (
<form>


    <div id="1stPage" >
        <div class="form-icons">
            <h4>Sign-Up to connect with your most compatible clients:</h4>

            <div class="input-group">
            <span class="input-group-label">
                <i class="fa fa-image"></i>
            </span>
            <input class="input-group-field" type="file" placeholder="Add a professional photo" />
            </div>

            <div class="input-group">
            <span class="input-group-label">
                <i class="fa fa-name"></i>
            </span>
            <input class="input-group-field" type="text" placeholder="Full name" />
            </div>

            <div class="input-group">
            <span class="input-group-label">
                <i class="fa fa-specialty"></i>
            </span>
            <input class="input-group-field" type="text" placeholder="List what you prefer to treat (Anxiety or Depression)" />
            </div>

            <div class="input-group">
            <span class="input-group-label">
                <i class="fa fa-contact"></i>
            </span>
            <input class="input-group-field" type="text" placeholder="Work phone number" />
            </div>

            <div class="input-group">
            <span class="input-group-label">
                <i class="fa fa-location"></i>
            </span>
            <input class="input-group-field" type="text" placeholder="Location" />
            </div>
        </div>

        {/* <button class="button expanded" id="next" >Next Page</button> */}
    </div>



    <div id="2ndPage" >
        <label class="statement">Are you more comfortable treating anxiety or depression?</label>
        <ul class='likert'>
        <li>
            <input type="radio" name="likert01" value="1" />
            <label>Anxiety</label>
        </li>
        <li>
            <input type="radio" name="likert01" value="2" />
            <label></label>
        </li>
        <li>
            <input type="radio" name="likert01" value="3" />
            <label>Neutral</label>
        </li>
        <li>
            <input type="radio" name="likert01" value="4" />
            <label></label>
        </li>
        <li>
            <input type="radio" name="likert01" value="5" />
            <label>Depression</label>
        </li>
        </ul>
        <label class="statement">Are better at dealing with issues involving happiness or saddness?</label>
        <ul class='likert'>
        <li>
            <input type="radio" name="likert02" value="1" />
            <label>Happiness</label>
        </li>
        <li>
            <input type="radio" name="likert02" value="2" />
            <label></label>
        </li>
        <li>
            <input type="radio" name="likert02" value="3" />
            <label>Neutral</label>
        </li>
        <li>
            <input type="radio" name="likert02" value="4" />
            <label></label>
        </li>
        <li>
            <input type="radio" name="likert02" value="5" />
            <label>Saddness</label>
        </li>
        </ul>
        <label class="statement">Do you work better with those who are more worried or calm?</label>
        <ul class='likert'>
        <li>
            <input type="radio" name="likert03" value="1" />
            <label>Worried</label>
        </li>
        <li>
            <input type="radio" name="likert03" value="2" />
            <label></label>
        </li>
        <li>
            <input type="radio" name="likert03" value="3" />
            <label>Neutral</label>
        </li>
        <li>
            <input type="radio" name="likert03" value="4" />
            <label></label>
        </li>
        <li>
            <input type="radio" name="likert03" value="5" />
            <label>Calm</label>
        </li>
        </ul>
        <div class="buttons">
        {/* <button class="clear">Clear</button> */}
        {/* <button class="submit">Submit</button> */}
        </div>

        <button class="button expanded">Sign-Up</button>
    </div>


</form>
);




// document.getElementById("next").addEventListener("click", function () {

//   document.getElementById("1stPage").classList.add("hide")

//   document.getElementById("2ndPage").classList.remove("hide")


// });
//   {{!-- .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   }); --}}


export default ProviderSignUp;
