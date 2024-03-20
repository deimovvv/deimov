import React, { useMemo } from 'react'
import getMusic from '../../helpers/getMusic'
import MusicCard from './MusicCard'
import styled from "styled-components"; 


const Container = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 0px;

`

const MusicList = ({category}) => {

    const music = useMemo(() => getMusic(category))

  return (
    <Container>
    {
        music.map((music) => (
            <MusicCard  key={music.id} {...music} />
        )) }
    
     </Container>
  )
}

export default MusicList