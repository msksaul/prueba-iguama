import React from 'react'
import { Button } from 'reactstrap'

function Sale() {
  return (
    <div className='container sale'>
      <h3 className='featured-title'>Featured Products</h3>
      <div className='row'>
        <div className='col-12 col-md-8'>
          <img src='images/blog_1.jpg' className='img-fluid' alt='blog'/>
        </div>
        <div className='col-12 col-md-4 home-text'>
          <h3 className='sale-title sale-text'>50% less in all items</h3>
          <p className='text-muted sale-text'>By <span className='sale-title'>Juan Carlos</span> - September 2020</p>
          <p className='sale-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <div className='sale-button'>
            <Button className='home-button'>SHOP NOW</Button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Sale
