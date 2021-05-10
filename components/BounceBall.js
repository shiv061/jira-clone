import { motion } from 'framer-motion';

const BounceBall = ({ divRef }) => {
  return (
    <motion.div
      className="shadow-2xl bg-primary text-extra-100 hover:bg-extra-200 hover:text-primary py-2 px-4 rounded-full cursor-pointer"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        position: 'absolute',
        top: 30,
        right: 40,
      }}
      animate={{
        scale: [1, 1.1],
        transition: {
          repeat: Infinity,
          repeatType: 'reverse',
        },
      }}
      onClick={() => {
        if (divRef.current) {
          divRef.current.scrollTop = 0;
        }
      }}
    >
      <h1>Back To Top</h1>
    </motion.div>
  );
};

export default BounceBall;
