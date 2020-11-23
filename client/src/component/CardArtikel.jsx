import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
// import Card from "react-bootstrap/Card";
import "../pages/DetailKelas/DetailKelas.css";
// import Rating from './Rating'

const CardArtikel = ({ article }) => {
    return (
      <Fragment>
    <Card className='my-3 p-3 rounded'>
      <Link to={`/article/${article._id}`}>
        <Card.Img src={article.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/article/${article._id}`}>
          <Card.Title as='div'>
            <strong>{article.articleName}</strong>
          </Card.Title>
        </Link>
        <Card.Body>
        <Link to={`/article/${article._id}`}>
          <Card.Title as='div'>
            <strong>{article.articleDetail}</strong>
          </Card.Title>
        </Link>
        {/* <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text> */}

        {/* <Card.Text as='h3'>${product.price}</Card.Text> */}
                    </Card.Body>
                    </Card.Body>
    </Card>
    </Fragment>
  )
}

export default CardArtikel;