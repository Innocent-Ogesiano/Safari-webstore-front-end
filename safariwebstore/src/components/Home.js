import React, { Component,useRef } from 'react';
import ReactDOM from 'react-dom';
import { Container,Grid } from '@mui/material';
import Product from '../components/Product'
import Slider from './Slider';
import products from '../products';
import home from '../stylesheets/home.module.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import pic from '../asset/img1.png'
import prod1 from '../asset/prod1.png'
import prod2 from '../asset/prod2.png'
import prod3 from '../asset/prod3.png'
import prod4 from '../asset/prod4.png'
import prod5 from '../asset/prod5.png'
import prod6 from '../asset/prod6.png'
import prod7 from '../asset/prod7.png'
import prod8 from '../asset/prod8.png'
import bag4 from '../asset/bag4.png'
import bag3 from '../asset/bag3.png'
import navI from '../asset/Vector.png'
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Home() {
  return (
  
<div className={home.container}>
  <Slider />

<div className = 'my-3 p-3 shop-yourstyle' id='shopYourStyle'>Shop your style</div>
<p className='about-products container'> do not mass-produce any of our range, but operate a batch 
    process system. This means that all our items are made with that bit more care and 
    love - and you can see that in the finished item!</p>
    <Grid container spacing={2}>
  <Grid item xs={6} md={8}>
    <Item>xs=6 md=8</Item>
  </Grid>
  </Grid>
{/* <Container fluid > */}
<Grid container spacing={2} >

  <Grid item container spacing={3} alignItems="center"
  justifyContent="center">
    {products.map((product) => (
      <Item>
          <Product product={product} />
          </Item>
    ))}
</Grid>
  </Grid>
{/* </Container> */}

{/* Pagination part */}
{/* <Row className='p-3'>
  <Col></Col>
  <Col sm ={12} md={6} lg={4} xl={3} >
  <nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Previous</span>
        </a>
      </li>
      <li className="page-item"><a className="page-link" href="#">1</a></li>
      <li className="page-item"><a className="page-link" href="#">2</a></li>
      <li className="page-item"><a className="page-link" href="#">3</a></li>
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
  </Col>
  <Col className='d-flex justify-content-end mx-5'><a href ='#'><img src={navI} alt=''/></a></Col>
</Row> */}
</div>
  
  );
}
