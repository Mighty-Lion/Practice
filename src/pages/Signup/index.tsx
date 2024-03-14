import { SignupContentWrapper } from '@/pages/Signup/index.styles';
import ControlledForm from '@/components/ControlledForm';

export default function Signup() {
  return (
    <SignupContentWrapper>
      <ControlledForm linkTo="/login" textForLink="Login" />
    </SignupContentWrapper>
  );
}
