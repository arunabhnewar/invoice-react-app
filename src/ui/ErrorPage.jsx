import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className='error-page'>
      <div className='bg-white shadow-lg p-5 rounded text-center'>
        <h1 className='fw-bold'>Oops!</h1>

        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
