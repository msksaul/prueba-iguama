import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

function Featured() {
  return (
    <div className='container featured'>
      <i class="fal fa-horizontal-rule"></i>
      <h3 className='featured-title'>Featured Products</h3>
      <div className='row d-flex justify-content-around'>
        <div className='col-12 col-md-4 p-3'>
          <Card>
            <CardImg top width="100%" src="images/cloth_1.jpg" alt='card' />
            <CardBody>
              <CardTitle className='featured-text'>Tank Top</CardTitle>
              <CardSubtitle className='text-muted featured-text'>Finding perfect t-shirt</CardSubtitle>
              <CardText className='featured-text'>$ 50</CardText>
            </CardBody>
          </Card>
        </div>
        <div className='col-12 col-md-4 p-3'>
          <Card>
            <CardImg top width="100%" src="images/cloth_2.jpg" alt='card' />
            <CardBody>
              <CardTitle className='featured-text'>Corater</CardTitle>
              <CardSubtitle className='text-muted featured-text'>Finding perfect products</CardSubtitle>
              <CardText className='featured-text'>$ 50</CardText>
            </CardBody>
          </Card>
        </div>
        <div className='col-12 col-md-4 p-3'>
          <Card>
            <CardImg top width="100%" src="images/cloth_3.jpg" alt='card' />
            <CardBody>
              <CardTitle className='featured-text'>Polo Shirt</CardTitle>
              <CardSubtitle className='text-muted featured-text'>Finding perfect products</CardSubtitle>
              <CardText className='featured-text'>$ 50</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Featured
