import { StyledStripe } from "./styles/Stripe.styled"

const Stripe = ({children, bgColor, justify}) => {
  return (
    <StyledStripe bgColor={bgColor} justify={justify}>
        {children}
    </StyledStripe>
  )
}

export default Stripe
