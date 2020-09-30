import React from 'react'
import { Button } from 'reactstrap';

function Home() {
  return (
    <div className='container home-border'>
      <div className='container home'>
        <div className='row'>
          <div className='col-12 col-md-8'>
            <img src='images/shoe.png' className='img-fluid' alt='shoe'/>
          </div>
          <div className='col-12 col-md-4 home-text'>
            <h1 className='home-title'>Finding Your Perfect Shoes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur.........</p>
            <Button className='home-button'>SHOP NOW</Button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row home-bottom'>
          <div className='col-12 col-md-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-4'>
                <i class="fas fa-truck fa-2x home-icon"></i>
                </div>
                <div className='col-8'>
                  <h6 className='home-bottom-title'>FREE SHIPPING</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-4'>
                <i class="fas fa-undo-alt fa-2x home-icon"></i>
                </div>
                <div className='col-8'>
                  <h6 className='home-bottom-title'>FREE RETURNS</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-4'>
                <i class="fas fa-question-circle fa-2x home-icon"></i>
                </div>
                <div className='col-8'>
                  <h6 className='home-bottom-title'>CUSTOMER SUPPORT</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
