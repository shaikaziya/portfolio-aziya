
import Button from '@mui/material/Button';

import "../Styles/Home.css";
import develop from "../images/develop.png";
const Home = () => {
  return (
    <>
      <div className='home-page'>
  <div className='home-content'>
        <h2>Hello,<span style={{fontSize:"30px",color:"crimson"}}>Welcome to my Portfolio Website</span></h2>
      <h1>I'm <span style={{fontSize:"35px",color:"crimson"}} >Shaik Aziya Sulthana</span></h1>
      <h2>Full Stack Developer</h2>
           
        <div className="homes">
         <Button  variant="outlined" target="_blank" href="https://github.com/shaikaziya" rel="noreferrer" className='home-btn'   >Github</Button>
        <Button variant="outlined" target="_blank" href="https://www.linkedin.com/in/shaik-aziya-sulthana-6053b6249/" rel="noreferrer" className='home-btn'>LinkedIn</Button>
        </div>
      </div>  

      <div className='home-right'>
        <img  src={develop} alt={develop} />
      </div>
 </div>
   
   </>
  )
}

export default Home

