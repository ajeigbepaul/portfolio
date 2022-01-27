import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__side">
        <h2>My Skills</h2>
      </div>
      <div className="skills__body">
        <div className="react">
          <img src="images/react.png" alt="react" />
          <h6>React</h6>
        </div>
        <div className="node">
          <img src="images/node.png" alt="react" />
          <h6>Node</h6>
        </div>
        <div className="mongodb">
          <img src="images/mongodb.png" alt="react" />
          <h6>Mongodb</h6>
        </div>
        <div className="firebase">
          <img src="images/react.png" alt="react" />
          <h6>Firebase</h6>
        </div>
        <div className="git">
          <img src="images/git.png" alt="react" />
          <h6>Git</h6>
        </div>
        <div className="reactnative">
          <img src="images/react.png" alt="react" />
          <h6>ReactNative</h6>
        </div>
        <div className="html">
          <img src="images/html.png" alt="react" />
          <h6>Html5</h6>
        </div>
        <div className="css">
          <img src="images/css.png" alt="react" />
          <h6>css</h6>
        </div>
        <div className="boostrap">
          <img src="images/boostrap.jpg" alt="react" />
          <h6>Boostrap</h6>
        </div>
        <div className="figma">
          <img src="images/figma2.png" alt="react" />
          <h6>Figma</h6>
        </div>
        <div className="adobexd">
          <img src="images/adobexd.png" alt="react" />
          <h6>Adobexd</h6>
        </div>
        <div className="adobexd">
          <img src="images/redux.png" alt="react" />
          <h6>Redux</h6>
        </div>
      </div>
    </section>
  );
}

export default Skills;
