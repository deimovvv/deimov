import React, { useMemo } from 'react'
import { useParams } from 'react-router';
import getProjectByid from '../helpers/getProjectByid';

const Detail = () => {

  const { id } = useParams();

  const project = useMemo( () => getProjectByid( id ), [ id ]); 





  return (
    <div>  {project.id} {project.description} </div>
  )
}

export default Detail