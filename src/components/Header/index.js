import logo from "../Header/logo.png";
import { Image, Text, Wrapper } from "../DateCounter/styled";

function Header() {
  return (
    <Wrapper>
      <Image src={logo} alt="logo" />
      <Text>The React Quiz</Text>
    </Wrapper>
  );
}

export default Header;
