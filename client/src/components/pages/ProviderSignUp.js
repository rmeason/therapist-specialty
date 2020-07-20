import React, {useState} from "react";
import API from "../../utils/API";
import "./ProviderSignUp.css"




const ProviderSignUp = () => {
    
    const [inputs, setInputs]=useState({});

    const submit = (e) => {
        e.preventDefault();
        console.log("works")
        API.saveProvider(inputs)
        .then(res => {

            console.log("made it back to the front", res);


        })
        .catch(err => console.log(err));
    }

    const handleInputs = (e) => {
        let name = e.target.name
        let value = e.target.value
        // console.log(name)
        // console.log(value)
        let clone = inputs
        clone[name]=value
        console.log(clone)
        setInputs(clone)
    }
    
    return(
<form onSubmit={submit}>


    <div id="page1" >
        <div class="form-icons">
            <h3>Sign-Up to connect with your most compatible clients:</h3>

            <br />

            <p id="imgTxt" >Choose your profile image: </p>

            <div class="input-group">
            <span class="input-group-label" id="fa-img">
                <i class="fa fa-image"></i>
            </span>
            <input name="image" onChange={handleInputs} class="input-group-field" type="file" placeholder="Add a professional photo" />
            </div>

            <div class="input-group">
            <span class="input-group-label" id="fa-img1">
                <i class="fa fa-user"></i>
            </span>
            <input name="name" onChange={handleInputs} required class="input-group-field" type="text" placeholder="Full name" />
            </div>

            <div class="input-group">
            <span class="input-group-label" id="fa-img2">
                <i class="fa fa-trophy"></i>
            </span>
            <input name="specialties" onChange={handleInputs} class="input-group-field" type="text" placeholder="What do you specialize in?" />
            </div>

            <div class="input-group">
            <span class="input-group-label" id="fa-img3">
                <i class="fa fa-mobile"></i>
            </span>
            <input name="contact" onChange={handleInputs} class="input-group-field" type="text" placeholder="Work phone number" />
            </div>

            <div class="input-group">
            <span class="input-group-label" id="fa-img4">
                <i class="fa fa-map-marker"></i>
            </span>
            <input name="location" onChange={handleInputs} class="input-group-field" type="text" placeholder="Location" />
            </div>

            {/* <div class="input-group">
            <span class="input-group-label" id="fa-img4">
                <i class="fa fa-connectdevelop"></i>
            </span>
            <input name="psychology" onChange={handleInputs} class="input-group-field" type="text" placeholder="Psychology Today Profile Link" />
            </div> */}
        </div>

        {/* <button class="button expanded" id="next" >Next Page</button> */}
    </div>



    <div id="page2" >
        <label class="statement">Are you more comfortable treating anxiety or depression?</label>
        <ul class='likert'>
        <li>
            <input type="radio" onChange={handleInputs} name="matrix0" class="input-group-field" value="1" />
            <label>Anxiety</label>
        </li>
        <li>
            <input type="radio" onChange={handleInputs} name="matrix0" class="input-group-field" value="2" />
            <label></label>
        </li>
        <li>
            <input type="radio" onChange={handleInputs} name="matrix0" class="input-group-field" value="3" />
            <label>Neutral</label>
        </li>
        <li>
            <input type="radio" onChange={handleInputs} name="matrix0" class="input-group-field" value="4" />
            <label></label>
        </li>
        <li>
            <input type="radio" onChange={handleInputs} name="matrix0" class="input-group-field" value="5" />
            <label>Depression</label>
        </li>
        </ul>
        <label class="statement">Are better at dealing with issues involving happiness or saddness?</label>
        <ul class='likert'>
        <li>
            <input type="radio" onChange={handleInputs} name="matrix1" class="input-group-field" value="1" />
            <label>Happiness</label>
        </li>
        <li>
            <input type="radio" onChange={handleInputs} name="matrix1" class="input-group-field" value="2" />
            <label></label>
        </li>
        <li>
            <input type="radio" onChange={handleInputs} name="matrix1" class="input-group-field" value="3" />
            <label>Neutral</label>
        </li>
        <li>
            <input type="radio" onChange={handleInputs} name="matrix1" class="input-group-field" value="4" />
            <label></label>
        </li>
        <li>
            <input type="radio" onChange={handleInputs} name="matrix1" class="input-group-field" value="5" />
            <label>Saddness</label>
        </li>
        </ul>
        <label class="statement">Do you work better with those who are more worried or calm?</label>
        <ul class='likert'>
        <li>
            <input type="radio" onChange={handleInputs} name="matrix2" class="input-group-field" value="1" />
            <label>Worried</label>
        </li>
        <li>
            <input type="radio" onChange={handleInputs} name="matrix2" class="input-group-field" value="2" />
            <label></label>
        </li>
        <li>
            <input type="radio" onChange={handleInputs} name="matrix2" class="input-group-field" value="3" />
            <label>Neutral</label>
        </li>
        <li>
            <input type="radio" onChange={handleInputs} name="matrix2" class="input-group-field" value="4" />
            <label></label>
        </li>
        <li>
            <input type="radio" onChange={handleInputs} name="matrix2" class="input-group-field" value="5" />
            <label>Calm</label>
        </li>
        </ul>
        {/* <div class="buttons">
        <button class="clear">Clear</button>
        <button class="submit">Submit</button>
        </div> */}

    </div>
    <br />
    <button class="button expanded">Sign-Up</button>

</form>
);
};



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