const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault(); //새로고침 막아줌, submit
    e.returnValue = ''; //for chrome
  };
  const enablePreve = () => window.addEventListener('beforeunload', listener); //리소스 언로드 되기 전 이벤트 발생
  const disablePreve = () =>
    window.removeEventListener('beforeunload', listener);
  return { enablePreve, disablePreve };
};
export const App = () => {
  const { enablePreve, disablePreve } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePreve}>Protect</button>
      <button onClick={disablePreve}>Unprotect</button>
    </div>
  );
};
