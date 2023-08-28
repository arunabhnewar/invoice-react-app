import { useRef, useState } from "react";

import ReactToPrint from "react-to-print";
import ClientDetails from "../../components/ClientDetails/ClientDetails";
import Dates from "../../components/Dates/Dates";
import Footer from "../../components/Footer/Footer";
import FormData from "../../components/FormData/FormData";
import MainDetails from "../../components/MainDetails/MainDetails";
import Notes from "../../components/Notes/Notes";
import Table from "../../components/Table/Table";
import Topbar from "../../components/Topbar/Topbar";

const Home = () => {
  const [showInvoice, setShowInvoice] = useState(false);

  const [name, setName] = useState("Jamboo");
  const [address, setAddress] = useState("Tabalchari, Rangamati");
  const [email, setEmail] = useState("jamboo@rip.com");
  const [phone, setPhone] = useState("+880123456789");
  const [bankName, setBankName] = useState("Lewora Bank");
  const [holderName, setHolderName] = useState("Jamboo Papa");
  const [bankAccount, setBankAccount] = useState("Rip123456");
  const [website, setWebsite] = useState("www.ripjamboo.com");
  const [clientName, setClientName] = useState("Goolgool");
  const [clientAddress, setClientAddress] = useState("Majherbasti, Rangamati");
  const [invoiceNumber, setInvoiceNumber] = useState("Fuk420");
  const [invoiceDate, setInvoiceDate] = useState("03-08-2023");
  const [dueDate, setDueDate] = useState("09-08-2023");
  const [notes, setNotes] = useState(
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
  );
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  );
  const [quantity, setQuantity] = useState(200);
  const [price, setPrice] = useState(5);
  const [amount, setAmount] = useState();

  const componentRef = useRef();

  return (
    <div className='container-fluid'>
      {showInvoice ? (
        <>
          {/* <Header setShowInvoice={setShowInvoice} /> */}
          <nav className='navbar bg-transparent'>
            <div className='container'>
              <a className='navbar-brand' href='#'>
                Navbar
              </a>

              <div className='d-flex'>
                <button
                  className=' me-2'
                  type='submit'
                  onClick={() => setShowInvoice(false)}>
                  Edit Information
                </button>
                <ReactToPrint
                  trigger={() => <button className='me-2'>Print</button>}
                  content={() => componentRef.current}
                />
              </div>
            </div>
          </nav>

          <div ref={componentRef} className='container'>
            <Topbar name={name} />
            <MainDetails name={name} address={address} />
            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />
            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />
            <Table
              description={description}
              quantity={quantity}
              price={price}
              amount={amount}
            />

            <Notes notes={notes} />
            <Footer
              name={name}
              email={email}
              phone={phone}
              bankName={bankName}
              holderName={holderName}
              bankAccount={bankAccount}
              website={website}
            />
          </div>
        </>
      ) : (
        <FormData
          name={name}
          setName={setName}
          address={address}
          setAddress={setAddress}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          bankName={bankName}
          setBankName={setBankName}
          holderName={holderName}
          setHolderName={setHolderName}
          bankAccount={bankAccount}
          setBankAccount={setBankAccount}
          website={website}
          setWebsite={setWebsite}
          clientName={clientName}
          setClientName={setClientName}
          clientAddress={clientAddress}
          setClientAddress={setClientAddress}
          invoiceNumber={invoiceNumber}
          setInvoiceNumber={setInvoiceNumber}
          invoiceDate={invoiceDate}
          setInvoiceDate={setInvoiceDate}
          dueDate={dueDate}
          setDueDate={setDueDate}
          notes={notes}
          setNotes={setNotes}
          description={description}
          setDescription={setDescription}
          quantity={quantity}
          setQuantity={setQuantity}
          price={price}
          setPrice={setPrice}
          amount={amount}
          setAmount={setAmount}
          setShowInvoice={setShowInvoice}
        />
      )}
    </div>
  );
};

export default Home;
