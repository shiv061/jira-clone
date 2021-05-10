import { motion } from 'framer-motion';

const Skills = ({ skill, percentage }) => {
  return (
    <div>
      <h1>{skill}</h1>
      <div className="w-[90%] h-4 bg-extra-100 rounded-full">
        <motion.div
          whileHover={{
            backgroundColor: 'rgb(0,128,128)',
          }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}`, transition: { duration: 1 } }}
          className="h-full rounded-full bg-primary cursor-pointer"
          style={{ width: `${percentage}` }}
        />
      </div>
    </div>
  );
};

export default Skills;
