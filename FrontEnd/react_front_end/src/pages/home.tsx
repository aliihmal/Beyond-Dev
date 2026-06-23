import './home.css';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from 'react-router-dom';
import Marketing from '../components/Marketing';

function Home() {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const LL =useRef<HTMLParagraphElement |null>(null);
  const desc= useRef<HTMLParagraphElement|null>(null);
  const mark  =useRef<HTMLDivElement|null>(null);
  const mark1 =useRef<HTMLDivElement|null>(null);
  const mark2 =useRef<HTMLDivElement|null>(null);
  const mark3 =useRef<HTMLDivElement|null>(null);

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
      x:100,
    },{
       opacity: 1,
      x:0,
      duration:1.5,
    }).fromTo([mark.current,mark1.current,mark2.current,mark3.current],{
      opacity:0,
      y:100,
    },{
      opacity:1,
      y:0,
      stagger:{
            amount:0.5,
          }
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
          <Link to="/loggedIn">
              <button>logged</button>
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
          <div id='mark'>
             <div ref={mark}><Marketing  title='security' descreption='Provide a high security for your data' /></div>
             <div ref={mark1}><Marketing title='efficient' descreption='boost your productivity ' /></div>
             <div ref={mark2}><Marketing  title='easy' descreption='Provide a very easy user interface'/></div> 
             <div ref={mark3}><Marketing title='expirence' descreption='created from college student to college student' /></div>
          </div>
          <Link to={"dashboard"}>
            <button>dashboard</button>
          </Link>
    </div>
  );
}

export default Home;