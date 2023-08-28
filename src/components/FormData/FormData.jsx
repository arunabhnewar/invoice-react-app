/* eslint-disable react/prop-types */
import TextField from "../Form/TextField";
import TextInput from "../Form/TextInput";
import TableForm from "../TableForm/TableForm";

const FormData = ({
  setShowInvoice,
  name,
  setName,
  address,
  setAddress,
  email,
  setEmail,
  phone,
  setPhone,
  bankName,
  setBankName,
  holderName,
  setHolderName,
  bankAccount,
  setBankAccount,
  website,
  setWebsite,
  clientName,
  setClientName,
  clientAddress,
  setClientAddress,
  invoiceNumber,
  setInvoiceNumber,
  invoiceDate,
  setInvoiceDate,
  dueDate,
  setDueDate,
  notes,
  setNotes,
  description,
  setDescription,
  quantity,
  setQuantity,
  setPrice,
  price,
  amount,
  setAmount,
}) => {
  return (
    <div className='mt-5 container '>
      <h1 className='text-center mb-3'>Invoice Form</h1>
      <form action=''>
        <div className='row'>
          <div className='col-md-6 col-sm-12 my-2'>
            <TextInput
              placeholder='Type your name'
              autoComplete='off'
              className=''
              type='text'
              title='Name'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <TextInput
              placeholder='Type your address'
              autoComplete='off'
              className=''
              type='text'
              title='Address'
              name='address'
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <TextInput
              placeholder='Type your email'
              autoComplete='off'
              className=''
              type='email'
              title='Email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <TextInput
              placeholder='Type your phone'
              autoComplete='off'
              className=''
              type='phone'
              title='Phone'
              name='phone'
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <TextInput
              placeholder='Type bank name'
              autoComplete='off'
              className=''
              type='text'
              title='Bank Name'
              name='bankName'
              value={bankName}
              onChange={e => setBankName(e.target.value)}
            />
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <TextInput
              placeholder='Type holder name'
              autoComplete='off'
              className=''
              type='text'
              title='Holder Name'
              name='holderName'
              value={holderName}
              onChange={e => setHolderName(e.target.value)}
            />
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <TextInput
              placeholder='Type bank account'
              autoComplete='off'
              className=''
              type='text'
              title='Bank Account'
              name='bankAccount'
              value={bankAccount}
              onChange={e => setBankAccount(e.target.value)}
            />
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <TextInput
              placeholder='Type website'
              autoComplete='off'
              className=''
              type='url'
              title='Website'
              name='website'
              value={website}
              onChange={e => setWebsite(e.target.value)}
            />
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <TextInput
              placeholder='Type client name'
              autoComplete='off'
              className=''
              type='text'
              title='Client Name'
              name='clientName'
              value={clientName}
              onChange={e => setClientName(e.target.value)}
            />
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <TextInput
              placeholder='Type client address'
              autoComplete='off'
              className=''
              type='text'
              title='Client Address'
              name='clientAddress'
              value={clientAddress}
              onChange={e => setClientAddress(e.target.value)}
            />
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <TextInput
              placeholder='Type invoice number'
              autoComplete='off'
              className=''
              type='text'
              title='Invoice Number'
              name='invoiceNumber'
              value={invoiceNumber}
              onChange={e => setInvoiceNumber(e.target.value)}
            />
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <TextInput
              placeholder='Type invoice date'
              autoComplete='off'
              className=''
              type='date'
              title='Invoice Date'
              name='invoiceDate'
              value={invoiceDate}
              onChange={e => setInvoiceDate(e.target.value)}
            />
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <TextInput
              placeholder='Type due date'
              autoComplete='off'
              className=''
              type='date'
              title='Due Date'
              name='dueDate'
              value={dueDate}
              onChange={e => setDueDate(e.target.value)}
            />
          </div>
          <TableForm
            description={description}
            setDescription={setDescription}
            quantity={quantity}
            setQuantity={setQuantity}
            setPrice={setPrice}
            price={price}
            amount={amount}
            setAmount={setAmount}
          />
          <div className='col-md-12 col-sm-12 my-2'>
            <TextField
              placeholder='Type notes'
              autoComplete='off'
              className=''
              type='text'
              title='Notes'
              name='notes'
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>
        </div>

        <div className='d-flex justify-content-end'>
          <button
            className='my-3 p-3 text-white'
            onClick={() => setShowInvoice(true)}>
            Preview Invoice
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormData;
