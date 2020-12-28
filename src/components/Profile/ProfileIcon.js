import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'


const ProfileIcon = ({ signOut, toggleModal }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => {
    setDropdownOpen(prevState => !prevState)
  }

  

  return (
    <div className="pa4 tc">

      <Dropdown isOpen={dropdownOpen} toggle={toggle} drop='left'>
        <DropdownToggle 
          tag="span"
          data-toggle="dropdown"
          aria-expanded={dropdownOpen}
        >
          <img 
            src="http://tachyons.io/img/logo.jpg"
            className="br-100 ba h3 w3 dib"
            alt="avatar"
          />
        </DropdownToggle>
        <DropdownMenu 
          right
          className="b--transparent shadow-5" 
          style={{marginTop: "20px", backgroundColor: 'rgba(255, 255, 255, .5)'}}
        >
          <DropdownItem onClick={toggleModal}>View profile</DropdownItem>
          <DropdownItem onClick={() => signOut()}>Sign out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
     
    </div>
  )
}

export default ProfileIcon