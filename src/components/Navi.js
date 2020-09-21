import React from "react";
import Hamburger from "./simple/Hamburger";
import "./css/Navi.css";

const Menu = ({menu}) => (
    <div className={menu ? "show-menu navi-links" : "navi-links"}>
        <a href="#home" className="navi-link">Home</a>
        <a href="#about" className="navi-link">About Me</a>
        <a href="#career" className="navi-link">Career</a>
        <a href="#projects" className="navi-link">Projects</a>
        <a href="#contact" className="navi-link">Contact</a>
    </div>
)

const Navi = () => {
    const [menu, setMenu] = React.useState(false);
    const handleClick = () => {
        setMenu(!menu);
    }
    return (
        <nav className={menu ? "navi-fullwidth navi" : "navi"}>
            <Hamburger click={handleClick} />
            <Menu menu={menu} />
        </nav>
    )
};

export default Navi;