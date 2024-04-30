import styled from "styled-components";

// Definir el estilo para el footer
const FooterContainer = styled.footer`
  background-color: var(--Reseda-green);
  color: var(--WhiteSmoke);
  padding: 1rem 2rem;
  text-align: center;

  // Medios de comunicación para la adaptabilidad
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.5rem;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const FooterLink = styled.a`
  color: var(--WhiteSmoke);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #00a7e1;
  }
`;

const SocialMedia = styled.div`
  width: 20%;
  gap: 0.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const ContainerRight = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-end;
  }
`;

// Crear el componente del footer
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="/terms">Términos y condiciones</FooterLink>
        <FooterLink href="/privacy">Política de privacidad</FooterLink>
        <FooterLink href="/contact">Contáctanos</FooterLink>
      </FooterLinks>
      <ContainerRight>
        <SocialMedia>
          <a href="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.643 4.93695C22.808 5.30695 21.911 5.55696 20.968 5.66996C21.941 5.08775 22.669 4.17142 23.016 3.09195C22.1019 3.63494 21.1014 4.01715 20.058 4.22196C19.3564 3.47282 18.4271 2.97628 17.4143 2.80943C16.4016 2.64258 15.3621 2.81475 14.4572 3.29921C13.5524 3.78367 12.8328 4.55332 12.4102 5.48866C11.9875 6.424 11.8855 7.4727 12.12 8.47195C10.2677 8.37895 8.45564 7.8975 6.80144 7.05886C5.14723 6.22022 3.68785 5.04312 2.51801 3.60396C2.11801 4.29396 1.88801 5.09396 1.88801 5.94596C1.88757 6.71295 2.07644 7.4682 2.43789 8.14469C2.79934 8.82118 3.32217 9.39799 3.96001 9.82396C3.22029 9.80042 2.49688 9.60054 1.85001 9.24095V9.30095C1.84994 10.3767 2.22204 11.4193 2.90319 12.252C3.58434 13.0846 4.53258 13.6559 5.58701 13.869C4.9008 14.0547 4.18135 14.082 3.48301 13.949C3.78051 14.8746 4.36001 15.684 5.14038 16.2639C5.92075 16.8438 6.86293 17.1651 7.83501 17.183C6.18484 18.4784 4.1469 19.181 2.04901 19.178C1.67739 19.1781 1.30609 19.1564 0.937012 19.113C3.06649 20.4821 5.54535 21.2088 8.07701 21.206C16.647 21.206 21.332 14.108 21.332 7.95195C21.332 7.75196 21.327 7.54995 21.318 7.34995C22.2293 6.69093 23.0159 5.87485 23.641 4.93995L23.643 4.93695Z"
                fill="#F5F5F5"
              />
            </svg>
          </a>
          <a href="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0001 8.8758C10.2798 8.8758 8.87589 10.2797 8.87589 12C8.87589 13.7203 10.2798 15.1242 12.0001 15.1242C13.7204 15.1242 15.1243 13.7203 15.1243 12C15.1243 10.2797 13.7204 8.8758 12.0001 8.8758ZM21.3704 12C21.3704 10.7063 21.3821 9.42423 21.3095 8.13283C21.2368 6.63283 20.8946 5.30158 19.7978 4.2047C18.6986 3.10548 17.3696 2.76564 15.8696 2.69298C14.5759 2.62033 13.2939 2.63204 12.0025 2.63204C10.7087 2.63204 9.42667 2.62033 8.13527 2.69298C6.63527 2.76564 5.30402 3.10783 4.20714 4.2047C3.10792 5.30392 2.76808 6.63283 2.69542 8.13283C2.62277 9.42658 2.63449 10.7086 2.63449 12C2.63449 13.2914 2.62277 14.5758 2.69542 15.8672C2.76808 17.3672 3.11027 18.6985 4.20714 19.7953C5.30636 20.8945 6.63527 21.2344 8.13527 21.307C9.42902 21.3797 10.711 21.368 12.0025 21.368C13.2962 21.368 14.5782 21.3797 15.8696 21.307C17.3696 21.2344 18.7009 20.8922 19.7978 19.7953C20.897 18.6961 21.2368 17.3672 21.3095 15.8672C21.3845 14.5758 21.3704 13.2938 21.3704 12ZM12.0001 16.807C9.33996 16.807 7.19308 14.6602 7.19308 12C7.19308 9.33986 9.33996 7.19298 12.0001 7.19298C14.6603 7.19298 16.8071 9.33986 16.8071 12C16.8071 14.6602 14.6603 16.807 12.0001 16.807ZM17.004 8.11876C16.3829 8.11876 15.8814 7.6172 15.8814 6.99611C15.8814 6.37501 16.3829 5.87345 17.004 5.87345C17.6251 5.87345 18.1267 6.37501 18.1267 6.99611C18.1269 7.14359 18.0979 7.28966 18.0416 7.42595C17.9852 7.56224 17.9026 7.68607 17.7983 7.79036C17.694 7.89464 17.5702 7.97733 17.4339 8.03368C17.2976 8.09004 17.1515 8.11895 17.004 8.11876Z"
                fill="#F5F5F5"
              />
            </svg>
          </a>
          <a href="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z"
                fill="#F5F5F5"
              />
            </svg>
          </a>
        </SocialMedia>
        <FooterText>
          <br />
          &copy; {new Date().getFullYear()} Aromito Librería. Todos los derechos
          reservados.
        </FooterText>
      </ContainerRight>
    </FooterContainer>
  );
};

export default Footer;
