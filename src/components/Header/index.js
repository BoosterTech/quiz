import logo from "../Header/logo.png";
import { Image, Text } from './styled'
import { Wrapper } from "./styled";

function Header() {
  return (
    <Wrapper>
      <Image src={logo} alt="logo" />
      <Text>THE REACT QUIZ</Text>
    </Wrapper>
  );
}

export default Header;
