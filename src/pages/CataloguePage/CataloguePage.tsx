import React from 'react'
import { useParams } from 'react-router-dom';

type Props = {}

export default function CataloguePage({ }: Props) {
  const { category } = useParams<{ category: string }>();

  console.log(category);


  return (
    <div>{category} Page</div>
  )
}
