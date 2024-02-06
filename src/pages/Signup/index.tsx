import { SignupContentWrapper } from '@/pages/Signup/index.styles';
import ControlledForm from '@/components/ControlledForm';

export function Signup() {
  return (
    <SignupContentWrapper>
      <ControlledForm linkTo="/login" textForLink="Login" />
    </SignupContentWrapper>
  );
}
