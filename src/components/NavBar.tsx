import navbarCss from "./navbarCss";

const NavBar: React.FC = () => {

    const { logo, containerCss, navbarFlexItems, flexContainer,navbarFlexCenter, flexItems, itemsCss, }
        
      = navbarCss;


  return (
    <div>
      <nav className={logo}>
<div className={containerCss}>
  <div className={navbarFlexItems}>    <div className={navbarFlexCenter}>
      
     <a href="#" className={flexContainer}>Jesus Oyervides</a>
   </div>
    <div className={flexItems}>
      
      <a href="#" className={itemsCss}>Home</a>
       <a href="#" className={itemsCss}>Projects</a>
      <a href="#" className={itemsCss}>About</a>
      <a href="#" className={itemsCss}>Contact</a>
    </div>
  </div>
 </div>
 </nav>
    </div>



  );
}

export default NavBar;