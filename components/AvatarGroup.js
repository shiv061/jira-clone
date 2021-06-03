import { motion } from 'framer-motion';
import { useState } from 'react';
import Tooltip from '@atlaskit/tooltip';
import Image from 'next/image';

const location = [
  { tech: 'React', path: '/react-2.svg' },
  { tech: 'React Native', path: '/react-native-firebase-1.svg' },
  { tech: 'JavaScript', path: '/logo-javascript.svg' },
  { tech: 'Redux', path: '/redux.svg' },
  { tech: 'TypeScript', path: '/typescript.svg' },
  { tech: 'HTML5', path: '/html5.svg' },
  {
    tech: 'CSS',
    path: '/css-5.svg',
  },
  { tech: 'Next', path: '/next-js.svg' },
  { tech: 'WebPack', path: '/webpack-icon.svg' },
  {
    tech: 'GIT',
    path: '/git-icon.svg',
  },
];

const AvatarGroup = ({ tech = [], size }) => {
  const filterLocation = location.filter((loc) => tech.includes(loc.tech));
  const [hoverEl, setHoverEl] = useState('');
  return tech.length === 0 ? (
    <div className="flex items-center justify-center h-full px-2 ml-2 relative">
      {location.map((loc, index) => (
        <Tooltip key={loc.tech} content={loc.tech}>
          <motion.div className="absolute cursor-pointer transition-all" style={{ top: hoverEl === loc.path ? -10 : -5, left: index * 26, zIndex: hoverEl === loc.path ? 100 : index, transform: hoverEl === loc.path ? 'scale(1.1)' : 'scale(1)' }} onMouseEnter={() => setHoverEl(loc.path)} onMouseLeave={() => setHoverEl('')}>
            <Image src={`${loc.path}`} height={40} width={40} className="border-2 rounded-full bg-white" />
          </motion.div>
        </Tooltip>
      ))}
    </div>
  ) : (
    <div className="flex items-center justify-center h-full px-2 ml-2 relative">
      {filterLocation.map((loc, index) => (
        <Tooltip key={loc.tech} content={loc.tech}>
          <motion.div className="absolute cursor-pointer transition-all" style={{ top: hoverEl === loc.path ? -10 : -5, left: index * 26, zIndex: hoverEl === loc.path ? 100 : index, transform: hoverEl === loc.path ? 'scale(1.1)' : 'scale(1)' }} onMouseEnter={() => setHoverEl(loc.path)} onMouseLeave={() => setHoverEl('')}>
            <Image src={`${loc.path}`} height={size === 'lg' ? 40 : 20} width={size === 'lg' ? 40 : 20} className="border-2 rounded-full bg-white" />
          </motion.div>
        </Tooltip>
      ))}
    </div>
  );
};

export default AvatarGroup;
