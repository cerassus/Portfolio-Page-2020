import React from "react";
import "../css/Hamburger.css";

const Hamburger = (props) => (
        <div className="hamburger-container">
            <input type="checkbox" id="checkbox3" className="checkbox3 visuallyHidden" />
            <label onClick={() => props.click()} className="hamburger-label" htmlFor="checkbox3">
                <div className="hamburger hamburger3">
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar3"></span>
                    <span className="bar bar4"></span>
                </div>
            </label>
        </div>
)

export default Hamburger;