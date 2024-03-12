import React from "react";
import '../output.css';

//Footer with links
function Footer() {
  return(
    <div className="container flex flex-row bg-gray-200 max-w-full mt-auto text-center py-5 sticky bottom-0">
      <div className="basis-1/3">
      <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/dnoon23">Github</a>
      </div>
      <div className="basis-1/3">
      <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.linkedin.com/in/daniel-noonan-69a1b32ba/">Linkedin</a>
      </div>
      <div className="basis-1/3">
      <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://twitter.com/dannoon23">Twitter</a>
      </div>
    </div >
  )
}

export default Footer;