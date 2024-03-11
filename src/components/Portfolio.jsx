import React from "react";
import social from "../../assets/social";
import commerce from "../../assets/commerce";
import tracker from "../../assets/tracker";
import editor from "../../assets/editor";
import note from "../../assets/note";
import svg from "../../assets/svg";


function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <div>
      <div>
        <img src={social} alt="Project Image" />
        <div className={style["project-info"]}>
          <h4>NoSQL Social Network API</h4>
          <a
            href="https://github.com/dnoon23/NoSQL-Social-Network-API"
          >
          </a>
        </div>
      </div>
      <div>
        <img src={commerce} alt="Project Image" />
        <div className={style["project-info"]}>
          <h4>ORM E-Commerce Back-End</h4>
          <a
            href="https://github.com/dnoon23/ORM-E-Commerce-Back-End"
          >
          </a>
        </div>
      </div>
      <div>
        <img src={tracker} alt="Project Image" />
        <div className={style["project-info"]}>
          <h4>SQL Employee Tracker</h4>
          <a
            href="https://github.com/dnoon23/SQL-Employee-Tracker"
          >
          </a>
        </div>
      </div>
      <div>
        <img src={editor} alt="Project Image" />
        <div className={style["project-info"]}>
          <h4>PWA Text Editor</h4>
          <a
            href="https://github.com/dnoon23/PWA-text-editor"
          >
          </a>
          <a href="https://dnoon23-pwa-text-editor-ab67b5afd607.herokuapp.com/">
          </a>
        </div>
      </div>
      <div>
        <img src={note} alt="Project Image" />
        <div className={style["project-info"]}>
          <h4>Express.js Note Taker</h4>
          <a
            href="https://github.com/dnoon23/Express.js-Note-Taker"
          >
          </a>
          <a href="https://dnoon23-note-taker-d95e855ca67c.herokuapp.com/">
          </a>
        </div>
      </div>
      <div>
        <img src={svg} alt="Project Image" />
        <div className={style["project-info"]}>
          <h4>SVG Logo Maker</h4>
          <a
            href="https://github.com/dnoon23/SVG-Logo-Maker"
          >
          </a>
        </div>
      </div>
      </div>
    </>
  )
}

export default Portfolio;