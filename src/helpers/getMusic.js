import musicData from '../data/musicData'


const getMusic = (category) => {

    if (!category) {
        return musicData; // Mostrar todos los proyectos sin filtro
      }


      return musicData.filter(music => music.category === category)

    


}


export default getMusic