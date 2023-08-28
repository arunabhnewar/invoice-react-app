/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import TextInput from "../Form/TextInput";

const TableForm = ({
  description,
  setDescription,
  quantity,
  setQuantity,
  setPrice,
  price,
  amount,
  setAmount,
}) => {
  useEffect(() => {
    const calculateAmount = amount => {
      setAmount(quantity * price);
    };
    calculateAmount();
  }, [price, quantity, setAmount]);

  return (
    <>
      <div className='col-md-6 col-sm-12 my-2'>
        <TextInput
          placeholder='Type description'
          autoComplete='off'
          className=''
          type='text'
          title='Description'
          name='description'
          value={description}
          onChange={e => setDescription(e.target.value)}
          readOnly
        />
      </div>
      <div className='col-md-6 col-sm-12 my-2'>
        <TextInput
          placeholder='Type quantity'
          autoComplete='off'
          className=''
          type='number'
          title='Quantity'
          name='quantity'
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
          readOnly
        />
      </div>
      <div className='col-md-6 col-sm-12 my-2'>
        <TextInput
          placeholder='Type price'
          autoComplete='off'
          className=''
          type='number'
          title='Price'
          name='price'
          value={price}
          onChange={e => setPrice(e.target.value)}
          readOnly
        />
      </div>
      <div className='col-md-6 col-sm-12 my-2'>
        <TextInput
          placeholder='Type amount'
          autoComplete='off'
          className=''
          type='number'
          title='Amount'
          name='amount'
          value={amount}
          readOnly
        />
      </div>
    </>
  );
};

export default TableForm;
