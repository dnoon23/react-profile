import React from "react";
import resume from "../assets/resume.pdf"
import '../output.css';

//Resume page with link
function Resume() {
  return(
<div className="h-screen bg-red-800">

  <h1 className="text-4xl font-bold py-5 text-center">Resume</h1>
  <p className="text-center pb-5">
  <a href={resume} className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Click to view my resume</a>
</p>
</div>
  )
}

export default Resume;