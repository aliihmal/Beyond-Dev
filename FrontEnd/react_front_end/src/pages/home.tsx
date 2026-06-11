import './home.css';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from 'react-router-dom';

function Home() {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const LL =useRef<HTMLParagraphElement |null>(null);
  const desc= useRef<HTMLParagraphElement|null>(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(logoRef.current, {
      opacity: 0,
      y:100,
    },{
       opacity: 1,
      y:0,
      duration:1.5,
    })
    .fromTo(LL.current,{
      opacity:0,
      x:100,
    },{
      opacity:1,
      x:0,
    }).fromTo(desc.current, {
      opacity: 0,
      y:-100,
    },{
       opacity: 1,
      y:0,
      duration:1.5,
    });
  }, []);

  return (
  <div>

  
    <div className="header">
      <div className="logoAndword">
        <img
          ref={logoRef}
          src="/BeyondDevLogo.png"
          style={{ opacity: 0 }}
        />
        <h1 id="bd">Beyond Dev</h1>
        
      </div>
      <div className='section'>
        <h2 id='sec'>Home</h2>
        <h2 id='sec' >courses</h2>
        <h2 id='sec'>Resources</h2>
        <h2 id='sec'>about</h2>
      </div>
      <div className='auth'>
          <button id='log'>Log In</button>
           <Link to="/signup">
              <button id='sign'>Sign Up</button>
          </Link>
      </div>
    </div>



    <div className='center'>
        <div className='first'>
            <p id='welcome'>Welcome to Beyond Dev</p>
            <h2 id="mot" ref={LL}>Learn Today ,<br/> Lead Tomorrow</h2>
            <p ref={desc} id='description'>Explore high-quality study materials ,courses,and resources <br/>designed to help you achieve your goals</p>
           
        </div>
        <div className='second'>
          <img id="study"src='/study.png'/>
        </div>
    </div>
    </div>
  );
}

export default Home;