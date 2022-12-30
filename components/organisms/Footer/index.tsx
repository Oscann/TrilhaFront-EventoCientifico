import Link from "next/link";
import styled from "styled-components";
import Icon from "../../atoms/Icon";
import facebookIcon from "../../../public/assets/Facebook.svg";
import twitterIcon from "../../../public/assets/Twitter.svg";
import instagramIcon from "../../../public/assets/Instagram.svg";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="contacts-and-about">
        <div>
          <h3>CONTATOS</h3>
          <span className="contact">scihan@gmail.com</span>
          <span className="contact">+55 (84) 94002-8922</span>
        </div>
        <div>
          <h3>SOBRE</h3>
          <nav>
            <ul>
              <li>
                <Link href="/about?a=history">Nossa história</Link>
              </li>
              <li>
                <Link href="/about?a=staff">Equipe</Link>
              </li>
              <li>
                <Link href="/about?a=collabs">Colaborações</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <nav>
        <ul className="social-media">
          <Link href="https://www.facebook.com/louise.sarneas/">
            <li>
              <div className="social-media-icon">
                <Icon src={facebookIcon} />
              </div>
              <span>Facebook</span>
            </li>
          </Link>
          <Link href="https://www.instagram.com/thunder_cross_split_attack_/">
            <li>
              <div className="social-media-icon">
                <Icon src={instagramIcon} />
              </div>
              <span>Instagram</span>
            </li>
          </Link>
          <Link href="https://twitter.com/ThunderSplit">
            <li>
              <div className="social-media-icon">
                <Icon src={twitterIcon} />
              </div>
              <span>Twitter</span>
            </li>
          </Link>
        </ul>
      </nav>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  height: 368px;

  background: #000;
  color: #fff;

  padding: 72px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & h3 {
    font-size: 20px;
    margin-bottom: 16px;
  }

  & span.contact {
    display: block;
    margin-bottom: 8px;
  }

  & div.contacts-and-about {
    display: flex;
    gap: 112px;
  }

  & li {
    list-style: none;
    font-size: 14px;
    margin-bottom: 8px;
  }

  & li:hover {
    text-decoration: underline;
  }

  & div.social-media-icon {
    position: relative;

    width: 32px;
    height: 32px;
  }

  & ul.social-media {
    & li {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
    }
  }
`;
