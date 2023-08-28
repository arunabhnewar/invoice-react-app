/* eslint-disable react/prop-types */
const Table = ({ description, quantity, price, amount }) => {
  return (
    <div className='table-responsive'>
      <table className='table table-hover table-light'>
        <thead>
          <tr>
            <th scope='col'>SL</th>
            <th scope='col'>Description</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Price</th>
            <th scope='col'>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>{description}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{amount}</td>
          </tr>
          <tr>
            <th scope='row'>1</th>
            <td>{description}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{amount}</td>
          </tr>
          <tr>
            <th scope='row'>1</th>
            <td>{description}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
