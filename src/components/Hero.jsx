
import { styles } from '../styles';

import video from '../assets/video.mp4';


const Hero = () => {
  return (
    <>
    <section className='w-full h-[700px] relative mx-auto'>
      
       <video className=" w-full h-[700px] object-cover" src={video} autoPlay loop muted />
       <div className='absolute w-full h-full top-0 left-0 bg-gray-900/60'></div>
      <div className={`${styles.paddingX} absolute inset-0 justify-center items-center text-center flex flex-col  text-white`}>
      
        <h1 className={`${styles.heroHeadText}`}><span className="text-[#3DAC78]">POPULAR</span> DIAGNOSTIC <span className="text-[#3DAC78]">CENTER</span> LTD<span className="text-[#3DAC78]">.</span></h1>
        <p className={`${styles.heroSubText} `}>#1 Largest Diagnostic Service in Bangladesh</p>
        <button className="w-[240px] rounded-[10px] mx-auto m-5 h-[60px] bg-[#3DAC78]">Patient Register Here..</button>
        
      </div>
     
      
      
      
    </section>
    
   
       
      
      
      
      
      
   
    </>
  );
};

export default Hero;
