import { motion } from 'framer-motion';

const variant = {
  initial: {
    x: '-100vw',
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const zoomVariant = {
  initial: {
    width: '1px',
    height: '1px',
  },
  animate: {
    width: '7rem',
    height: '7rem',
    transition: {
      duration: 3,
    },
  },
  hover: {
    scale: 1.1,
  },
};

const LeftColumn = () => {
  return (
    <div className="grid grid-rows-4 h-full">
      <div className="w-full grid place-items-center">
        <motion.div variants={zoomVariant} initial="initial" animate="animate" whileHover="hover" className="w-28 h-28 bg-extra-100 rounded-full grid place-items-center cursor-pointer">
          <h1 className="text-6xl text-primary">SS</h1>
        </motion.div>
      </div>
      <div>
        <div className="py-1">
          <h1 className="text-secondary text-2xl px-6 tracking-widest">INFO</h1>
        </div>
        <div className="w-full ml-6 h-[2px] rounded-full bg-extra-200" />
        <div className="ml-10">
          <motion.div variants={variant} initial="initial" animate="animate" className="py-2">
            <h1 className="text-secondary">Name</h1>
            <h1 className="text-light text-extra-200">Shivansh Singh</h1>
          </motion.div>
          <motion.div variants={variant} initial="initial" animate="animate" className="py-2">
            <h1 className="text-secondary">E-Mail</h1>
            <h1 className="text-light text-extra-200">shivansh7503@gmail.com</h1>
          </motion.div>
        </div>
      </div>
      <div className="row-span-2">
        <div className="py-1">
          <h1 className="text-secondary text-2xl px-6 tracking-widest">SOCIAL</h1>
        </div>
        <div className="w-full ml-6 h-[2px] rounded-full bg-extra-200" />
        <div className="ml-10">
          <motion.div variants={variant} initial="initial" animate="animate" className="py-2">
            <h1 className="text-secondary">Github</h1>
            <a href="https://github.com/shiv061" target="_blank" className="link-btn">
              Link
            </a>
          </motion.div>
          <motion.div variants={variant} initial="initial" animate="animate" className="py-2">
            <h1 className="text-secondary">LinkedIn</h1>
            <a href="https://www.linkedin.com/in/shivansh-singh-1997present/" target="_blank" className="link-btn">
              Link
            </a>
          </motion.div>
          <motion.div variants={variant} initial="initial" animate="animate" className="py-2">
            <h1 className="text-secondary">Twitter</h1>
            <a href="https://github.com/shiv061" target="_blank" className="link-btn">
              Link
            </a>
          </motion.div>
          <motion.div variants={variant} initial="initial" animate="animate" className="py-2">
            <h1 className="text-secondary">Instagram</h1>
            <a href="https://github.com/shiv061" target="_blank" className="link-btn">
              Link
            </a>
          </motion.div>
          <motion.div variants={variant} initial="initial" animate="animate" className="py-2">
            <h1 className="text-secondary">Mail</h1>
            <a href="mailto:shivansh7503@gmail.com" className="link-btn">
              Link
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
