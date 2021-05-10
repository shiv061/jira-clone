import { useRef, useState } from 'react';
import BounceBall from './BounceBall';
import Main from './Main';

const RightColumn = () => {
  const [scroll, setScroll] = useState(0);
  const divRef = useRef(null);
  return (
    <>
      <Main divRef={divRef} setScroll={setScroll} />
      {scroll > 500 && <BounceBall divRef={divRef} />}
    </>
  );
};

export default RightColumn;
