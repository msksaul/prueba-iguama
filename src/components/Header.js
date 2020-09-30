import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

function Header() {
  return (
    <div className='container header'>
      <div className='row p-5'>
        <div className='col-12 col-md-3 p-2'>
          <InputGroup>
            <InputGroupAddon className='input-header' addonType="prepend">
              <InputGroupText><i class="fas fa-search"></i></InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Search" />
          </InputGroup>
        </div>
        <div className='col-12 col-md-auto p-2 mx-md-auto'>
          <h1 className='title'>SHOPPERS</h1>
        </div>
        <div className='col-12 col-md-3 p-2 header-icons'>
          <span className='icon'><i class="fas fa-user"></i></span>
          <span className='icon'><i class="far fa-heart"></i></span>
          <span className='icon'><i class="fas fa-shopping-cart"></i></span>
        </div>
      </div>
    </div>
  )
}

export default Header
