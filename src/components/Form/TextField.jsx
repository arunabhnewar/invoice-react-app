/* eslint-disable react/prop-types */

const TextField = ({ title, ...attributes }) => {
  return (
    <>
      <label htmlFor='exampleFormControlInput1' className='form-label'>
        {title}
      </label>
      <br />
      <textarea
        {...attributes}
        className='form-control w-100 px-3 py-2'
        rows='5'
      />
    </>
  );
};

export default TextField;
