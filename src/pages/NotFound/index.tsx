import { NotFoundButton, NotFoundTitle } from './index.styles';

function NotFound() {
  return (
    <>
      <NotFoundTitle>Not Found</NotFoundTitle>
      <NotFoundButton to="/">Go Home</NotFoundButton>
    </>
  );
}

export default NotFound;
