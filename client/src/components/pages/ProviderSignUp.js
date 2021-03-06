import React, { Component, useState, useRef } from "react";
import API from "../../utils/API";
import "./ProviderSignUp.css"




const ProviderSignUp = () => {
    
    const ref = useRef();

    const [inputs, setInputs]=useState({});
    const[file, setFile] = useState()

    const submit = (e) => {
        e.preventDefault();
        console.log("works")


        
        // let form = new FormData(e.target);
       
        // form.append("image", file)
        // console.log(form)
        // for (let value of form.values()) {
        //     console.log(value, form[value])
        // }
        API.saveProvider({...inputs})
        .then(res => {

            console.log("made it back to the front", res);

        })

        .catch(err => console.log(err));

        window.location.replace("https://therapist-specialty.herokuapp.com/search");

        console.log("something happened");

    }


    const handleInputs = (e) => {
        let name = e.target.name
        let value = e.target.value
        console.log(e.target);

        // if (name === "image") {
        //     console.log(e.target.files[0])
        // setFile(e.target.files[0])
        // //     let pFormData = new FormData(ref);

        // //     pFormData.append("image", e.target.files[0])

        // //     let clone = inputs
        // //     clone[name]=pFormData
        // //     console.log(clone)
        // //     setInputs(clone)

        // }
        //     else {
        // console.log(name)
        // console.log(value)
        let clone = inputs
        clone[name]=value
        console.log(clone)
        setInputs(clone)
        // }
    }


    // const fileImage = () => {
    //     var filename = document.getElementById("file-id").files[0].name; 
    //     document.getElementById("file-id").files[0].name; 
    //     alert(filename);
    // }

    // const fileSelectedHandler = event => {
    //     console.log(event.target.files[0]);
    // }
    
//     const nextPage = (e) => {
//         e.preventDefault();
        
//         document.getElementById("next").addEventListener("click", function () {

//         document.getElementById("page1").classList.add("hide")
    
//         document.getElementById("next").classList.add("hide")
    
//         document.getElementById("page2").classList.remove("hide")
        
//         document.getElementById("btn2").classList.remove("hide")
    
//         .then(response => {
//           console.log(response);
//         })
//         .catch(err => {
//           console.log(err);
//         });
//       })
// }
    return(

            <form onSubmit={submit} ref={ref} enctype="multipart/form-data">


                <div id="page1" >
                    <div class="form-icons">
                        <h3>Sign-Up to connect with your most compatible clients:</h3>

                        <br />

                        <p id="imgTxt" >Choose your profile image: </p>

                        <div class="input-group">
                        <span class="input-group-label" id="fa-img">
                            <i class="fa fa-image"></i>
                        </span>
                        <input name="image" onChange={handleInputs} class="input-group-field" type="text" required placeholder="Add a link to your professional photo" />
                        </div>

                        <div class="input-group">
                        <span class="input-group-label" id="fa-img1">
                            <i class="fa fa-user"></i>
                        </span>
                        <input name="name" onChange={handleInputs} class="input-group-field" type="text" required placeholder="Full name" />
                        </div>

                        <div class="input-group">
                        <span class="input-group-label" id="fa-img2">
                            <i class="fa fa-trophy"></i>
                        </span>
                        <input name="specialties" onChange={handleInputs} class="input-group-field" type="text" required placeholder="What do you specialize in?" />
                        </div>

                        <div class="input-group">
                        <span class="input-group-label" id="fa-img3">
                            <i class="fa fa-mobile"></i>
                        </span>
                        <input name="contact" onChange={handleInputs} class="input-group-field" type="text" required placeholder="Work phone number" />
                        </div>

                        <div class="input-group">
                        <span class="input-group-label" id="fa-img4">
                            <i class="fa fa-map-marker"></i>
                        </span>
                        <input name="location" onChange={handleInputs} class="input-group-field" type="text" required placeholder="Location" />
                        </div>

                        <div class="input-group">
                        <span class="input-group-label" id="fa-img4">
                            <i class="fa fa-connectdevelop"></i>
                        </span>
                        <input name="psychology" onChange={handleInputs} class="input-group-field" type="text" required placeholder="Psychology Today Profile Link" />
                        </div>
                    </div>
            {/* 
                    <button class="button expanded" id="next" >Next Page</button> */}
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
                    <label class="statement">Are better at dealing with issues involving Bipolar Disorder or Negative Symptomology?</label>
                    <ul class='likert'>
                    <li>
                        <input type="radio" onChange={handleInputs} name="matrix1" class="input-group-field" value="1" />
                        <label>Bipolar</label>
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
                        <label>- Symptoms</label>
                    </li>
                    </ul>
                    <label class="statement">Do you work better with those who are struggling with anger management or establishing health boundaries?</label>
                    <ul class='likert'>
                    <li>
                        <input type="radio" onChange={handleInputs} name="matrix2" class="input-group-field" value="1" />
                        <label>Anger</label>
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
                        <label>Boundaries</label>
                    </li>
                    </ul>
                    {/* <div class="buttons">
                    <button class="clear">Clear</button>
                    <button class="submit">Submit</button>
                    </div> */}

                </div>
                <br /> 

                    <button className="button expanded submit" id="btn2">Sign-Up</button>

            </form>

        );
};



export default ProviderSignUp;