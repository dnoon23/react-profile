import React from "react";
import social from "../assets/social.png";
import commerce from "../assets/commerce.png";
import tracker from "../assets/tracker.png";
import editor from "../assets/editor.png";
import note from "../assets/note.png";
import svg from "../assets/svg.png";
import '../output.css';


function Portfolio() {
  return (
    <div className="bg-red-800">
      <h1 className="text-4xl font-bold text-center py-5">Portfolio</h1>
      <div>
      <div className="text-center">
        <img src={social} alt="Project Image"  className="mx-auto h-auto max-w-lg" />
        <div >
          <h4>NoSQL Social Network API</h4>
          <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href="https://github.com/dnoon23/NoSQL-Social-Network-API"
          >Github
          </a>
        </div>
      </div>
      <div className="text-center">
        <img src={commerce} alt="Project Image"  className="mx-auto h-auto max-w-lg pt-5" />
        <div >
          <h4>ORM E-Commerce Back-End</h4>
          <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href="https://github.com/dnoon23/ORM-E-Commerce-Back-End"
          >Github
          </a>
        </div>
      </div>
      <div className="text-center">
        <img src={tracker} alt="Project Image"  className="mx-auto h-auto max-w-lg pt-5" />
        <div >
          <h4>SQL Employee Tracker</h4>
          <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href="https://github.com/dnoon23/SQL-Employee-Tracker"
          >Github
          </a>
        </div>
      </div>
      <div className="text-center">
        <img src={editor} alt="Project Image"  className="mx-auto h-auto max-w-lg pt-5" />
        <div >
          <h4>PWA Text Editor</h4>
          <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href="https://github.com/dnoon23/PWA-text-editor"
          >Github
          </a><br/>
          <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
          href="https://dnoon23-pwa-text-editor-ab67b5afd607.herokuapp.com/"
          >Deployment
          </a>
        </div>
      </div>
      <div className="text-center">
        <img src={note} alt="Project Image"  className="mx-auto h-auto max-w-lg pt-5" />
        <div >
          <h4>Express.js Note Taker</h4>
          <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href="https://github.com/dnoon23/Express.js-Note-Taker"
          >Github
          </a><br/>
          <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
          href="https://dnoon23-note-taker-d95e855ca67c.herokuapp.com/"
          >Deployment
          </a>
        </div>
      </div>
      <div className="text-center">
        <img src={svg} alt="Project Image"  className="mx-auto h-auto max-w-lg pt-5" />
        <div className="pb-5">
          <h4>SVG Logo Maker</h4>
          <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href="https://github.com/dnoon23/SVG-Logo-Maker"
          >Github
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Portfolio;