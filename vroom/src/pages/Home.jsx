import React from 'react';
import HeroSlider from '../UI/HeroSlider';
import Helmet from '../components/Helmet/Helmet';

import { Container, Row, Col } from 'reactstrap';
import FindCarForm from '../UI/FindCarForm';

const Home = () => {
  return (
   <Helmet title='Home'>



    {/* ============= hero section ======================= */}
    <section className="p-0 hero__slider-section">
      <HeroSlider/>

      <div className="hero__form">
        <Container>
          <Row className="form__row">
            <Col lg='4' md='4'>
              <div className="find__cars-left">
                <h2>For Instant Booking</h2>
              </div>
            </Col>


           <Col lg="8" md="8" sm="12">
            <FindCarForm/>
           </Col>
          </Row>
        </Container>
      </div>
    </section>

   </Helmet>
  )
}

export default Home; 
