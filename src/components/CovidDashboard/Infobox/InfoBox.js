import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function InfoBox({title, cases , total, ...props}) {
  return (
    <Card onClick={props.onClick}>
        <CardContent className='infoBox'>
            <Typography className='infoBox__title' color="textSecondary">{title}</Typography>

            <h2 className='infoBox__cases'>{cases}</h2>

            <Typography className='infoBox__total' color="textSecondary">{total} Total</Typography>
        </CardContent>
    </Card>
  )
}

export default InfoBox
