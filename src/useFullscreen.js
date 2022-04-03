import { useRef } from 'react';

const useFullScreen = () => {
  const ele = useRef();
  const triggerFull = () => {
    if (ele && ele.current) {
      ele.current.requestFullscreen();
    }
  };
  return { ele, triggerFull };
};

export const App = () => {
  const { ele, triggerFull } = useFullScreen();
  return (
    <div className="App" style={{ height: '1000vh' }}>
      <img
        ref={ele}
        alt="cat"
        style={{ width: '600px' }}
        src="https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_302/104_%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.jpg"
      />
      <button onClick={triggerFull}>Full Screen</button>
    </div>
  );
};
