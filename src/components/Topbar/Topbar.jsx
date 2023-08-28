/* eslint-disable react/prop-types */

const Topbar = ({ name }) => {
  return (
    <div className='my-2 text-center'>
      <h1>{name}'s Invoice</h1>
    </div>
  );
};

export default Topbar;
