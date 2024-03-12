import React from "react";
import '../output.css';

function Footer() {
  return(
    <div className="container flex flex-row bg-gray-200 max-w-full mt-auto text-center py-5 sticky bottom-0">
      <div className="basis-1/3">
      <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/dnoon23">Github</a>
      </div>
      <div className="basis-1/3">
      <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/dnoon23">Linkedin</a>
      </div>
      <div className="basis-1/3">
      <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/dnoon23">Other</a>
      </div>
    </div >
  )
}

export default Footer;