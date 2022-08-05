import {useEffect,React} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
export const Footer = () => {
    let footerStyle = {
        width: '100%',
        top:'20px',
        position:"relative",
    }
    useEffect(()=>{
      Aos.init({duration: 2000});
    },[]);
  return (
    <footer className='text-light' style = {footerStyle}>
        <p className='text-center p-7 mb-5'>
            Copyright &copy; 2022 @Nij Mehar Grover
        </p>
    </footer>
  )
}
