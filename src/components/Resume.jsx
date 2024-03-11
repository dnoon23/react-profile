import React from "react";
import resume from "../assets/resume.pdf"

function Resume() {
  return(
<>

  <h1>Resume</h1>
  <p>
  <a href={resume}>Click to download my resume</a>
</p>
</>
  )
}

export default Resume;