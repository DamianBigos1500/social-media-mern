import useClickOutside from '../../../hooks/useClickOutside';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  FC,
  ReactNode,
  forwardRef,
  useContext,
  useState,
} from 'react';
import { createContext } from 'react';

interface DropdownProps {
  children: ReactNode;
}

const DropdownContext = createContext({
  isOpen: false,
  setIsOpen: (state: boolean) => {},
});
const { Provider } = DropdownContext;

const Dropdown: FC<DropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(isOpen);

  return <Provider value={{ isOpen, setIsOpen }}>{children}</Provider>;
};

interface DropdownTriggerProps {
  children: ReactNode;
}

const DropdownTriger: FC<DropdownTriggerProps> = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);

  return <div onClick={() => setIsOpen(!isOpen)}>{children}</div>;
};

const DropdownContent = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<any> & {
    children: ReactNode;
  }
>(({ children, ...props }, ref) => {
  // useClickOutside();
  const { isOpen } = useContext(DropdownContext);

  return (
    <div data-state={`${isOpen ? 'open' : 'closed'}`} {...props} ref={ref}>
      {children}
    </div>
  );
});

export { Dropdown, DropdownTriger, DropdownContent };

// export default Dropdown;
