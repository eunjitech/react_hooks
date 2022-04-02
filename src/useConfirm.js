const useConfirm = (m = '', onConfirm, onCancel) => {
  if (!onConfirm && typeof onConfirm !== 'function') {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(m)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

export const App = () => {
  const deleteWorld = () => console.log('deleting the world..');
  const abort = () => console.log('Aborted');
  const confirmDelete = useConfirm('Are you sure', deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};
