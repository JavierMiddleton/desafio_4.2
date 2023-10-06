const Alert = ({ messageAlert, colorAlert }) => {
  const alertClass = `alert ${colorAlert} align-items-center`;
  return (
    <div>
      <h5 class={alertClass}>{messageAlert}</h5>
    </div>
  );
};

export default Alert;
