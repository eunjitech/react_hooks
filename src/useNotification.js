const useNotification = (title, opt) => {
  if (!('Notification' in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, opt);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, opt);
    }
  };
  return fireNotif;
};
//Notification.permission 은 읽기 전용-default읽기허용안됨

export const App = () => {
  const triggerNotif = useNotification('Can I steel');
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};
