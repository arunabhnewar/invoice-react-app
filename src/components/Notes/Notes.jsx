/* eslint-disable react/prop-types */
const Notes = ({ notes }) => {
  return (
    <>
      <div className='my-2'>
        <p className='fs-6 fw-semibold w-50'>
          {" "}
          <span className='fw-bold'>Notes:</span> {notes}
        </p>
      </div>
    </>
  );
};

export default Notes;
