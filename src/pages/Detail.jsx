import React from 'react'
import{ useParams } from "react-router-dom";

 const Detail = () => {
    const params = useParams()
  return (
    <div>Detail ID: {params.id}</div>
  )
}

export default Detail
