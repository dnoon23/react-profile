import React from "react";
import pic from "../assets/photo.jpg";
import '../output.css';

//About me with picture
function About() {
  return(
<div className="bg-red-800 h-screen">
<h1 className="text-4xl font-bold text-center py-5 ">About Me</h1>
<img src={pic} alt="Photo" className="object-scale-down mx-auto h-auto max-w-sm image-fluid"/>
<p className="px-10 py-5">I went to UW Stout and recieved a bachelo's degree in Math and Computer Science with a concentration in Math Education.  After that I worked as a Math teacher at various highschools and middle schools.  I also worked as the Lead Instructor at a Mathnasium and did some substitue teaching.  Most recently I went through a bootcamp for fullstack coding.</p>
</div>
  )
}

export default About;