/* eslint-disable react/prop-types */

const Header = ({ setShowInvoice }) => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-white'>
        <div className='container-fluid'>
          <div className='collapse navbar-collapse' id='navbarScroll'>
            <div className='navbar-nav me-auto my-lg-0 navbar-nav-scroll'></div>
            <form className='d-flex'>
              <button
                className='btn btn-success me-2'
                type='submit'
                onClick={() => setShowInvoice(false)}>
                Edit Information
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
