const Input = ({ name, value, label, onChange, type }) => {
  return (
    <>
      <div className='m-3'>
        <label htmlFor={name}>{label}:</label>
        <input
          onChange={onChange}
          value={value}
          name={name}
          id={name}
          className='form-control'
          type={type}></input>
      </div>
    </>
  );
};

export default Input;
