import { useEffect, useRef } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
  const ele = useRef();
  useEffect(() => {
    if (ele.current) {
      const { current } = ele;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, [duration, delay]);
  if (typeof duration !== 'number' || typeof delay !== 'number') {
    //hook을 사용하기 전, 조건문으로 return 하는 코드가 있으면 error
    return;
  }
  return { ref: ele, style: { opacity: 0 } };
};

export const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 3);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalalalal</p>
    </div>
  );
};
