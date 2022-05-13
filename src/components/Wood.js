import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Location from './Location'
import { LocationLink, LocationP, GreaterThan } from './styles/Location.styled'
import InfoNav from './InfoNav'
import Footer from './Footer'


const Wood = () => {
  return (
    <>
      <Header/>
      <Menu pageTitle="Drewno kominkowe"/>
      <Location>
        <LocationLink to={'/'}>Strona główna <GreaterThan/></LocationLink>
        <LocationLink to={'/gardening-services'}>Usługi ogrodnicze <GreaterThan/></LocationLink>
        <LocationP>Drewno kominkowe</LocationP>
      </Location>
    </>
  )
}

export default Wood
