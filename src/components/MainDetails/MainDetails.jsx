/* eslint-disable react/prop-types */
const MainDetails = ({ name, address }) => {
  return (
    <>
      <div className='d-flex flex-column align-items-end mt-2'>
        <h2 className='fs-4 fw-bold owner_name'>{name}</h2>
        <p className='owner_add fw-normal fs-6'>{address}</p>
      </div>
    </>
  );
};

export default MainDetails;
