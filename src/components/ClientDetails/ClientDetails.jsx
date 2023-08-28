/* eslint-disable react/prop-types */
const ClientDetails = ({ clientName, clientAddress }) => {
  return (
    <>
      <div className='mt-2'>
        <h2 className='fs-4 fw-bold client_name'>{clientName}</h2>
        <p className='client_add fw-normal fs-6'>{clientAddress}</p>
      </div>
    </>
  );
};

export default ClientDetails;
