import { FC } from 'react';

interface CodeVerificationProps {}

const CodeVerification: FC<CodeVerificationProps> = ({}) => {
  return (
    <div>
      <p>Enter code that been sent to your email.</p>
      <form>
        <input name="code" type="text" />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default CodeVerification;
