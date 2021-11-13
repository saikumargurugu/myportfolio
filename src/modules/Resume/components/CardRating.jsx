import { Avatar, Card, Typography } from '@mui/material'
import React from 'react'
import Rating from '@mui/material/Rating';

function CardRating({image, rating, name}) {
    return (
        <Card sx={{
            display:'flex',
            flexDirection:"column",
            borderRadius:4,
            marginX:'20px',
            backgroundColor:'rgba(0, 0, 0, 0.1)'

        }} >
            <Avatar
                 sx={{
                   marginTop:'30px',
                    height: 155,
                    width: 155,
                    }} 
                   alt="Sai Kumar GUrugubelli"
                    src={image}
                     />
            <Typography>{name}</Typography>
      <Rating name="read-only" value={rating} readOnly />
        </Card>
    )
}

export default CardRating
