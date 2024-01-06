import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { logo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, projects1  } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#00a884] p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-[200px] object-cover opacity-95 rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='green-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={logo}
                alt='source code'
                className='w-1/2 h-1/2 object-contain '
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Card = ({
  index,
  name1,
  description1,
  
  image1,
  
}) => {
  return (
    <Tilt
        className='mx-auto xs:w-[250px] w-full'
      >
    <motion.div  className='w-full  p-[1px] rounded-[20px]' variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 950,
        }}
        className='bg-white border-[1px] border-[#00a884] rounded-[10px] p-2 min-h-[130px] flex justify-evenly items-center flex-col'
      >
        <div>
          <img
            src={image1}
            alt='project_image'
            className='w-12 h-12 rounded-[50px] object-contain'
          />
           
          
        </div>

        <div>
        <h3 className='text-[#00a884] text-[20px] ml-3 font-bold text-center'>{name1}</h3>
          <p className=' text-[#00a884] text-[40px] ml-3 font-bold text-center'>{description1}</p>
        </div>

        
     </div>
    </motion.div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
    <div className='mb-20 max-w-7xl  flex flex-wrap gap-12'>
        {projects1.map((project, index) => (
          <Card key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
 <motion.div variants={textVariant()}>
        <h2 className='text-[#00a884] text-center text-[40px] font-bold'>Our Services</h2>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </motion.div>

      

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
