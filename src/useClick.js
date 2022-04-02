import { useEffect, useRef } from 'react';

const useClick = (onClick) => {
  const ele = useRef(); //reference 설정
  useEffect(() => {
    const cur = ele.current;
    if (typeof onClick !== 'function') {
      return;
    }
    if (cur) {
      cur.addEventListener('click', onClick);
      console.log('마운트됐을때');
    }
    return () => {
      if (cur) {
        cur.removeEventListener('click', onClick);
        console.log('언마운트됐을때');
      }
    };
  }, []);
  return ele;
};

export const App = () => {
  const sayHello = () => console.log('say hello');
  const title = useClick(sayHello);

  return (
    <div className="App">
      <div ref={title}>Hi</div>
      <input placeholder="type here" />
    </div>
  );
};
