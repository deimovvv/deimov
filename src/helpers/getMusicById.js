import musicData from '../data/musicData'


const getProjectByid = (id) => {

    return musicData.find(music => music.id === id)


}


export default getProjectByid