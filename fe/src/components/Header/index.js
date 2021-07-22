import { StyledHeader } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="MyContacts" width="201" />
    </StyledHeader>
  );
}
