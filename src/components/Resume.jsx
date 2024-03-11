import React from "react";
import resume from "../assets/resume.pdf"

function Resume() {
  return(
<>
<p>
  <h1>Resume</h1>
  <a href={resume}>Click to download my resume</a>
</p>
</>
  )
}

export default Resume;