import React from "react";
import "./ProviderSignUp.css"

const ProviderSignUp = () => (
<form>


    <div id="page1" >
        <div class="form-icons">
            <h3>Sign-Up to connect with your most compatible clients:</h3>

            <br />

            <p id="imgTxt" >Choose your profile image: </p>

            <div class="input-group">
            <span class="input-group-label" id="fa-img">
                <i class="fa fa-image"></i>
            </span>
            <input class="input-group-field" type="file" placeholder="Add a professional photo" />
            </div>

            <div class="input-group">
            <span class="input-group-label" id="fa-img1">
                <i class="fa fa-user"></i>
            </span>
            <input class="input-group-field" type="text" placeholder="Full name" />
            </div>

            <div class="input-group">
            <span class="input-group-label" id="fa-img2">
                <i class="fa fa-trophy"></i>
            </span>
            <input class="input-group-field" type="text" placeholder="What do you specialize in?" />
            </div>

            <div class="input-group">
            <span class="input-group-label" id="fa-img3">
                <i class="fa fa-mobile"></i>
            </span>
            <input class="input-group-field" type="text" placeholder="Work phone number" />
            </div>

            <div class="input-group">
            <span class="input-group-label" id="fa-img4">
                <i class="fa fa-map-marker"></i>
            </span>
            <input class="input-group-field" type="text" placeholder="Location" />
            </div>
        </div>

        {/* <button class="button expanded" id="next" >Next Page</button> */}
    </div>



    <div id="page2" >
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

    </div>
    <br />
    <button class="button expanded">Sign-Up</button>

</form>
);



export default ProviderSignUp;




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