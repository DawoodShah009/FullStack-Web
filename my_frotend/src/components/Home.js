import React , {useEffect}from "react";
import { useNavigate } from "react-router-dom";
import { SliderData } from "./SliderData";
import {useState} from 'react'
import {Button} from 'react-bootstrap'
import {useGlobalState, setGlobalState} from './Globalstates'
import {FaCommentDots, FaLocationArrow} from 'react-icons/fa'
import * as Icon from 'react-bootstrap-icons';


function Home() {
  const nav = useNavigate()
  setGlobalState('infostate',false)

  const [state] = useGlobalState('homestate')
  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(SliderData.length);

  const nextSlide = () => {
    if(length==0){
      setCurrent(0);
      console.warn('here')
    }
    else{
      setCurrent(current === length-1 ? 0 : current + 1 );
    }
  }
  const prevSlide = () => {
    if(length==0){
      setCurrent(0);
    }
    else{
      setCurrent(current === 0 ? length-1 : current - 1 );
    }
  }
  useEffect(() => {
    if(!state){
      setGlobalState('infostate',false)
      alert("Login first to view items")
      nav("/login")
    }
  }, []); 
    return (

        <section  className='slider'>
        <div style={{display: 'flex', justifyContent: 'space-between'}} >

        <Icon.ArrowLeftCircleFill color="royalblue" size={47} onClick={prevSlide}/>
        <Icon.ArrowRightCircleFill color="royalblue" size={47} onClick={nextSlide}/>

        </div>

        {SliderData.map((slide, index) => {
            return(
              <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
                <>
                <div style={{display:'inline-block', justifyContent: "center", objectfit:'cover'}}>
                  <img height='470'src={slide.image} alt="Dragon ball z" className='image'/>
                </div>
              <div style={{display:'inline-block', justifyContent: "center", paddingLeft:"10%"}}>
                <h1> {slide.name}</h1>
                <h2><FaLocationArrow/>{slide.location}</h2>
                <h3>{slide.owner}</h3>
                <h4><FaCommentDots/>{slide.contact}</h4>
                <h5>{slide.area}</h5>
              </div>
              </>
                )}

              
              </div>
            )
              
        })}
        </section>

      );}

export default Home;

// /*<Button variant="outline-success" onClick={prevSlide}>Left</Button>*/