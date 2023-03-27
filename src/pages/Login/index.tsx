import {
  Wrapper,
  Container,
  Card,
  FormWrapper,
  Form,
  Buttons,
  Button,
} from './styles'

import LogoHorizontal from '../../assets/icons/logo-horizontal.svg'
import Pets from '../../assets/icons/pets.svg'

export function Login() {
  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={LogoHorizontal} className="logo" alt="" />
          <img src={Pets} alt="" />
        </Card>
        <FormWrapper>
          <h1>Boas-vindas!</h1>
          <Form>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" placeholder="Email" />

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
            />
          </Form>

          <Buttons>
            <Button onClick={() => {}} className="primary">
              Login
            </Button>
            <Button onClick={() => {}} className="secondary">
              Cadastrar minha organização
            </Button>
          </Buttons>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
