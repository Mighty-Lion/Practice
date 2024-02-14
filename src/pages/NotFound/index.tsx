import { css } from '@emotion/css';
import { NotFoundButton, NotFoundTitle } from './index.styles';

function Index() {
  return (
    <>
      <NotFoundTitle>Not Found</NotFoundTitle>
      <NotFoundButton to="/">Go Home</NotFoundButton>
    </>
  );
}

export default Index;
