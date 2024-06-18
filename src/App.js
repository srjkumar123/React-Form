import React, { useState } from "react";
import './App.css';

function App() {

  const [fistName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: true,
    physics: true
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [selectedOptions, setSelectedOptions] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
         e.preventDefault();
         console.log(fistName,lastName,email,contact, gender, subjects, resume, url, about)
  }

  const handleSubjectChange = (sub) =>{
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub]
    }))
  }

  const handleReset = () =>{
    //reset all variables
    setFirstName("")
    setLastName("")
    setEmail("");
    setContact("");
    setGender("");
    setSubjects("");
    setResume("");
    setUrl("");
    setAbout("");
    setSelectedOptions("")

  }


  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form>
          <label for="firstname">Firstname</label>
          <input type="text" name="firstname" id="firstname" value={fistName} onChange={ (e) =>{
            setFirstName(e.target.value)
          } } placeholder="Enter First Name" />

          <label for="lastname">Last Name</label>
          <input type="text" name="lastname" id="lastname" value={lastName} onChange={ (e) =>{
            setLastName(e.target.value)
          }} placeholder="Enter Last Name" />

          <label for="email">Email</label>
          <input type="text" name="email" id="email" value={email} onChange={(e) =>{
            setEmail(e.target.value)
          }} placeholder="Enter Email" />

          <label for="contact">Conatct</label>
          <input type="tel" name="contact" id="contact" value={contact} onChange={ (e) =>{
            setContact(e.target.value)
          }} placeholder="Enter Conatct" />

          <label for="gender">Gender</label>
          <input type="radio" name="gender" id="male" value="male" checked={gender === "male"} onChange={(e)=>{setGender(e.target.value)} } />Male
          <input type="radio" name="gender" id="female" value="female" checked={gender === "female"} onChange={(e)=>{setGender(e.target.value)} } />Female
          <input type="radio" name="gender" id="other" value="other" checked={gender === "other"} onChange={(e)=>{setGender(e.target.value)} } />Others

          <label for="lang">Your Best Subjects</label>
          <input type="checkbox" name="lang" id="english" checked={subjects.english === true} onChange={(e)=>{handleSubjectChange("english")} } />English
          <input type="checkbox" name="lang" id="maths" checked={subjects.maths === true} onChange={(e)=>{handleSubjectChange("maths")} } />Maths
          <input type="checkbox" name="lang" id="physics" checked={subjects.physics === true} onChange={(e)=>{handleSubjectChange("physics")} } />Physics

          <label for="file">Upload Resume*</label>
          <input type="file" name="file" id="file" placeholder="Upload Resume" onChange={(e) => e.target.files[0]} required />

          <label for="url">Enter URL</label>
          <input type="url" name="url" id="url" placeholder="Enter URL" onChange={(e)=>setUrl(e.target.value)} required />

          <label >Select Your Choice</label>
          <select name="select" id="select" value={selectedOptions} onChange={(e) =>{
            setSelectedOptions(e.target.value)
          }}>
            <option value="" selected={selectedOptions === ""} disabled>Select your Ans</option>
            <optgroup label="Beginners">
              <option value="1" >HTML</option>
              <option value="2" >CSS</option>
              <option value="3" >Javascript</option>
            </optgroup>

            <optgroup label="Advance">
              <option value="1" >React</option>
              <option value="2" >Node</option>
              <option value="3" >Express</option>
              <option value="t" >MongoDB</option>
            </optgroup>
          </select>

          <label for="about">About</label>
          <textarea name="about" cols="30" rows="10" onChange={(e) =>{
            setAbout(e.target.value)
          }} placeholder="About Yourself" required></textarea>

          <button type="reset" value="reset" onClick={() => handleReset()}>Reset</button>

          <button type="submit" value="submit" onClick={()=>handleSubmit()}>Submit</button>


        </form>
      </fieldset>

    </div>
  );
}

export default App;
