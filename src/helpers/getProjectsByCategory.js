import projectsData from '../data/projectsData'

export const getProjectByCategory = (category) => {

    if (!category) {
        return projectsData; // Mostrar todos los proyectos sin filtro
      }

    const validCategory = ['All', 'Web', 'VR', '3D & Environment', 'Media & Interactive']

    if(!validCategory.includes( category )){
        throw new Error(`${category} is not valid category `)
    }

    return projectsData.filter( project => project.category === category  )


}