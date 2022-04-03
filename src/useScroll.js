//특정 position일 때 이벤트 출력
import { useState, useEffect } from 'react';

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.screenX });
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return state;
};

export const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: '1000vh' }}>
      <h1 style={{ position: 'fixed', color: y > 500 ? 'red' : 'blue' }}>Hi</h1>
    </div>
  );
};
