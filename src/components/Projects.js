import React,{useEffect,useState} from 'react'
import sanityClient from "../client"

function Projects() {
    const [projectData , setprojects] = useState('')
    useEffect(()=>{
        sanityClient.fetch(`*[_type== "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags,
             mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
        }`).then((data)=>setprojects(data))
        .catch(console.error)
    }, [])
    console.log(projectData)
    return (
        <main className="bg-gray-50 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive"> My Pojects</h1>
                <h2 className="text-lg  flex justify-center mb-12"> Welcome to my projects page</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project,index)=>(
                    <article className="relative rounded-lg shadow-xl max-w bg-white p-16" key={index} >
                         {/* <img src={project.mainImage.asset.url}
                            alt="{post.title}"
                             className="w-full rounded-r object-cover absolute"/> */}
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{project.title}
                            </a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{""}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">
                                    Company
                                </strong>:{''}
                                {project.place}
                            </span>
                            <span>
                                <strong className="font-bold">
                                    Type
                                </strong>:{""}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                {project.description}
                            </p>
                            <a className=" text-red-500 font-bold hover:underline hover:text-red-400" href={project.link}  rel="noopener noreferrer " target="_blank" >
                                View The Project
                            <span role="img" aria-label="right pointer">
                                👉
                            </span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}

export default Projects
