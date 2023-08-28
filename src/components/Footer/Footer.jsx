/* eslint-disable react/prop-types */
const Footer = ({
  name,
  email,
  phone,
  bankName,
  holderName,
  bankAccount,
  website,
}) => {
  return (
    <>
      <hr className='w-100 mx-auto border-3' />
      <ul className='d-flex flex-wrap justify-content-center align-item-center w-50 mx-auto'>
        <li className='me-2'>
          <span className='fw-bold fs-6'>Name:</span> {name}
        </li>
        <li className='me-2'>
          <span className='fw-bold fs-6'>Email: </span> {email}
        </li>
        <li className='me-2'>
          <span className='fw-bold fs-6'>Phone:</span> {phone}
        </li>
        <li className='me-2'>
          <span className='fw-bold fs-6'>Bank:</span> {bankName}
        </li>
        <li className='me-2'>
          <span className='fw-bold fs-6'>Account Holder Name: </span>
          {holderName}
        </li>
        <li className='me-2'>
          <span className='fw-bold fs-6'>Account Number:</span> {bankAccount}
        </li>
        <li className='me-2'>
          <span className='fw-bold fs-6'>Website: </span> {website}
        </li>
      </ul>
    </>
  );
};

export default Footer;
