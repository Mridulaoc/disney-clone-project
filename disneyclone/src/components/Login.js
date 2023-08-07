import styled from 'styled-components'

const Login = () => {

  const Container = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
 `

  const Content = styled.div`
  width: 100%;
  height:auto;
  display: flex;
  flex-direction: column;`

  const BgImg = styled.div`
  width: 100%;  
  background-image: url('/images/login-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position:top center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index:-1`

  const CTA = styled.div`
  max-width:40%;
  display:flex;
  flex-direction:column;
  margin:20rem auto;
  width:100%;
  `

  const CTALogo1 = styled.img`
  width:100%;
  max-width:600px;
  margin-bottom:2rem;
  `

  const SignUp = styled.a`
  text-transform:uppercase;
  text-decoration:none;
  margin:auto;
  padding:2rem;
  background-color:#0063e5;
  color:#f9f9f9;
  font-size:1.8rem;
  font-weight:bold;
  letter-spacing:1.5px;
  border:1px solid transparent;
  border-radius:4px;
  cursor:pointer;
  

  &:hover {
    background-color: #0483ee;
  }
  `

  const Description = styled.p`
  width: 100%;
  text-align: center;
  margin:2rem auto;
  line-height:1.5;
  color: #f9f9f9;`

  const CTALogo2 = styled.img`
  width:100%;
  max-width:600px;
  margin-top:1rem;`

 

  return (
    <div>
      <Container>
        <Content>
          <BgImg />
          <CTA>
          <CTALogo1 src="/images/cta-logo-one.svg" alt="" />          
          <SignUp>get all there</SignUp>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, magnam dolorum? Aliquid molestias omnis soluta quidem! Sed saepe soluta illo!</Description>
          <CTALogo2 src="/images/cta-logo-two.png" alt="" />           
          </CTA>         
         </Content>        
     </Container>
    </div>
  )

 
}

export default Login
