import styled from "styled-components";
import Icon from "../../atoms/Icon";
import logo from "../../../public/assets/logo-white.svg";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <div className="logo">
        <div className="logo-icon">
          <Icon src={logo} />
        </div>
        <h1>SCIHAN</h1>
      </div>
      <div className="profile">
        <Link href="/">ENTRAR</Link>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  padding: 16px 32px;

  background-color: #000;
  color: #fff;

  position: sticky;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & div.logo-icon {
    position: relative;

    width: 80px;
    height: 80px;
  }

  & div.logo {
    display: flex;
    align-items: center;
    gap: 20px;

    & h1 {
      margin: 0;
      font-size: 32px;

      user-select: none;
    }
  }

  & div.profile {
    & Link {
      font-size: 20px;
    }
  }
`;
