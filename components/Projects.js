import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Projects = ({ name, tech, imgUri, uri }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.a
      ref={ref}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      animate={controls}
      href={uri}
      target="_blank"
      className="grid grid-rows-3 w-full h-56 border-[1px] border-extra-100 my-6 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="row-span-2 overflow-hidden">
        <motion.img whileHover={{ scale: 1.1 }} src={imgUri} className="w-full h-full object-cover cursor-pointer" />
      </div>
      <div className="row-span-1 bg-primary p-2">
        <h1 className="text-extra-100 px-2">{name}</h1>
        <div>
          {tech.map((item, index) => (
            <span key={index} className="bg-black mx-2 rounded-full font-extralight text-xs text-extra-100 p-[1px] px-1 hover:bg-extra-100 hover:text-primary">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default Projects;
