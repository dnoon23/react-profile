import React from "react";
import pic from "../assets/photo.jpg";


function About() {
  return(
<>
<h1>About Me</h1>
<img src={pic} alt="Photo" />
<p>I went to UW Stout and recieved a bachelo's degree in Math and Computer Science with a concentration in Math Education.  After that I worked as a Math teacher at various highschools and middle schools.  I also worked as the Lead Instructor at a Mathnasium and did some substitue teaching.  Most recently I went through a bootcamp for fullstack codeing.</p>
</>
  )
}

export default About;