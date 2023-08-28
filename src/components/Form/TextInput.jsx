/* eslint-disable react/prop-types */
const TextInput = ({ title, ...attributes }) => {
  return (
    <>
      <label htmlFor='exampleFormControlInput1' className='form-label'>
        {title}
      </label>
      <br />
      <input className='form-control w-100' {...attributes} />
    </>
  );
};

export default TextInput;
