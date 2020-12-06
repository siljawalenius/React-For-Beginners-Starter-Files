import React from "react";

//stateless react component here 

const Header = (props) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">of </span>
        <span className="the">the</span>
      </span>
      Day
    </h1>
    <h3 classname="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

// class Header extends React.Component{
//     render(){
//         return(
//             <header className = "top">
//                 <h1>
//                     Catch
//                     <span className = "ofThe">
//                         <span className = "of">of </span>
//                         <span className = "the">the</span>
//                     </span>
//                     Day
//                 </h1>
//                 <h3 classname = "tagline">
//                     <span>{ this.props.tagline }</span>
//                 </h3>
//             </header>
//         )
//     }
// }

export default Header;
