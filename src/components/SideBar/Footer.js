import { NavigationTile } from "./Navigation";
import headphones from "../../assets/images/headphones.svg";
import settings from "../../assets/images/settings.svg";
import styled from "styled-components";
import Avatar from "../../assets/images/Avatar.svg";
import logout from "../../assets/images/Button.svg";

export default function Footer() {
  return (
    <Container>
      <NavigationTile>
        <img src={headphones}></img>
        <p>Support</p>
      </NavigationTile>
      <NavigationTile>
        <img src={settings}></img>
        <p>Settings</p>
      </NavigationTile>

      <Divider />
      <Account>
        <AccountLeft>
          <img src={Avatar} width="40px" height="40px" />
          <NameBox>
            <Name>Olivia Rhye</Name>
            <Email>olivia@untitledui.com</Email>
          </NameBox>
        </AccountLeft>
        <img src={logout} />
      </Account>
    </Container>
  );
}

const Container = styled.div`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const Divider = styled.div`
  border: 0.5px solid #475467;
  margin: 8px 0;
`;

const Account = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

const AccountLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NameBox = styled.div`
  margin-left: 6px;
`;

const Name = styled.p`
  padding: 0;
  margin: 0;
  color: #344054;
  font-size: 14px;
`;

const Email = styled.p`
  padding: 0;
  margin: 0;
  color: #667085;
  font-size: 14px;
`;
