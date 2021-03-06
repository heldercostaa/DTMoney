import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
};

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="DT Money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          New transaction
        </button>
      </Content>
    </Container>
  );
}
