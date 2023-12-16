import React from "react";
const date =new Date();
const yr =date.getFullYear();
function Footer(){
    return(<footer className="foot"><p>copyright @{yr}</p></footer>)
}
export default Footer;