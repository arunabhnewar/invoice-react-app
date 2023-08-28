/* eslint-disable react/prop-types */
const Dates = ({ invoiceNumber, dueDate, invoiceDate }) => {
  return (
    <>
      <article className='mt-2 d-flex justify-content-end '>
        <ul>
          <li>
            <span className='fw-bold'>Invoice Number: </span>{" "}
            <span className='fw-semibold'>{invoiceNumber}</span>
          </li>
          <li>
            <span className='fw-bold'>Invoice Date:</span>{" "}
            <span className='fw-semibold'>{invoiceDate}</span>
          </li>
          <li>
            <span className='fw-bold'>Due Date:</span>{" "}
            <span className='fw-semibold'>{dueDate}</span>
          </li>
        </ul>
      </article>
    </>
  );
};

export default Dates;
