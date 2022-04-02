import { useEffect, useState } from 'react';

const useTitle = (init) => {
  const [title, setTitle] = useState(init);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerHTML = title;
  };
  useEffect(updateTitle, [title]); //title 업데이트 될 때마다 함수 실행
  return setTitle; //titleUpdate
};
export const App = () => {
  const titleUpdate = useTitle('loading..');
  setTimeout(() => {
    titleUpdate('Home');
    setTimeout(() => titleUpdate('jaja'), 2000);
  }, 1000);
};
