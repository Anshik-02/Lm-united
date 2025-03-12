"use client"
import * as React from 'react';



import { Card as MuiCard, CardMedia, CardContent, CardActions, Typography } from "@mui/material";

interface CardProps {
  heading: string;
  description: string;
  image: string;
  content: string;
}

export default function CardComponent({ heading, description, image, content }: CardProps) {
  return (
    <div className="flex gap-5 justify-center mb-10 flex-wrap">
   
      <MuiCard sx={{ maxWidth: 345, boxShadow: 2 }}>
        <CardMedia component="img" alt={heading} height="140" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" className="text-lg font-semibold">
            {heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </MuiCard>


      <div className="max-w-3xl h-auto bg-white border-1 shadow-sm text-black rounded-lg p-6">
        <p className="text-lg font-light">{content}</p>
      </div>
    </div>
  );
}
