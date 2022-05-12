import { StyledForm, ColumInputs, StyledInput, StyledTextarea, FormInputs, FormInputsContainer, Checkboxes, CheckBox, SubmitButton, FormList, Phone, AlignedLabel, CenteredParagraph } from "./styles/ContactForm.styled"
import {  ContactLink, GreenLi } from './styles/List.styled'
import {FaEnvelope, FaFacebook, FaYoutube, FaHome} from 'react-icons/fa'
import { useState } from "react"


const ContactForm = () => {

  const [sender, setSender] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [auth, setAuth] = useState('')
  const [permission1, setPermission1] = useState(false)
  const [permission2, setPermission2] = useState(false)
  const [permission3, setPermission3] = useState(false)


  const onSubmit = (e) => {
    e.preventDefault()

    if(!sender || !email || !phone || !message) {
      alert('Please fill out all fields')
      return
    }

    if(auth !== '10'){
      alert('Incorrect auth code')
      setAuth('')
      return
    }

    if(permission1 === false || permission2 === false || permission3 === false){
      alert('Please accept all terms and conditions')
      return
    }

    const data = {
      sender,
      email,
      phone,
      message
    }

    console.log(data)

    setAuth('')
    setSender('')
    setEmail('')
    setPhone('')
    setMessage('')
    setPermission1(false)
    setPermission2(false)
    setPermission3(false)
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <FormList>
        <li><Phone/>Tomasz Kujawa: <ContactLink href='tel:604-342-038'>604-342-038</ContactLink></li>
        <li><Phone/>Michal Borowicz: <ContactLink href='tel:660-709-582'>660-709-582</ContactLink></li>
        <li><FaEnvelope/> <ContactLink href='mailto:biuro@ogrody-wlkp.pl'>660-709-582</ContactLink></li>
        <li><FaHome/> Budzyń woj. wielkopolskie</li>
        <GreenLi><FaFacebook/> <FaYoutube/></GreenLi>
      </FormList>
      <FormInputs>
        <FormInputsContainer>
          <ColumInputs>
            <StyledInput type="text" placeholder="Nadawca" value={sender} onChange={(e) =>{
              setSender(e.target.value)
            }} required/>
            <StyledInput type="text" placeholder="E-mail" value={email} onChange={(e) =>{
              setEmail(e.target.value)
            }} required/>
            <StyledInput type="phone" placeholder="Telefon" value={phone} onChange={(e) =>{
              setPhone(e.target.value)
            }}/>
          </ColumInputs>
          <StyledTextarea placeholder="Wiadomość" value={message} onChange={(e) =>{
              setMessage(e.target.value)
            }} required>
          
          </StyledTextarea>
        </FormInputsContainer>
        <AlignedLabel>
          Podaj wynik* 3+7 =
          <StyledInput mLeft="1rem" type="number" value={auth} onChange={(e) =>{
              setAuth(e.target.value)
            }} required/>
        </AlignedLabel>
        <Checkboxes>
          <label>
            <CheckBox required checked ={permission1} value={permission1} onChange={(e) => {
              setPermission1(e.target.checked)
            }}/>
            Zapoznałem się i akceptuję Regulamin, Politykę Prywatności oraz warunki serwisu www.ogrody-wlkp.pl*
          </label>
          <label>
            <CheckBox required checked ={permission2} value={permission2} onChange={(e) => {
              setPermission2(e.target.checked)
            }}/>
            Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w formularzu zgłoszeniowym w celu obsługi i realizacji zamówień oraz w celach rachunkowych i podatkowych. Administratorem danych jest firma ZHPU Panda Teresa Kujawa z siedzibą 64-840 Budzyń ul. Rynkowa 41 (zgodnie z ustawą z dnia 29.09.1997r. o Ochronie Danych Osobowych Dz. U. nr 133 poz. 883 oraz Art. 6 pkt 1 lit. B) i C ) RODO). Więcej informacji znajdziesz w naszej Polityce Prywatności.*
          </label>
          <label>
            <CheckBox required checked ={permission3} value={permission3} onChange={(e) => {
              setPermission3(e.target.checked)
            }}/>
            Wyrażam zgodę na otrzymywanie informacji o aktualnych promocjach, upustach, rabatach oraz innych materiałów promocyjnych i reklamowych i przetwarzanie moich danych osobowych w celach marketingowych.
          </label>
        </Checkboxes>
        <CenteredParagraph>Pola oznaczone * sa wymagane</CenteredParagraph>
        <SubmitButton value="Wyślij"/>
      </FormInputs>
    </StyledForm>
  )
}

export default ContactForm
