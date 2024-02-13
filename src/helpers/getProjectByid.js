import projectsData from '../data/projectsData'


const getProjectByid = (id) => {

    return projectsData.find(project => project.id === id)


}


export default getProjectByid