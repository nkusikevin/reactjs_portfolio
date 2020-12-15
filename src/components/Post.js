import React,{useState ,useEffect} from 'react'
import {Link }from 'react-router-dom' 
// import sanityClient from "../client.js"
import sanityClient from "../client"
function Post() {
const [postData,setposts] = useState('')
useEffect(()=>{
    sanityClient.fetch(`*[_type=="post"]{
        title,
        slug,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
    }`
    ).then(data=> setposts(data))
    .catch(console.error)
}, [])
console.log(postData)
    return (
        
        <main className="bg-gray-700 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Blog Post Page </h1>
                <h1 className="text-lg text-gray-50 flex justify-center mb-12"> Welcome To The Blog Post Page</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post,index)=>(
                    <article>
                        <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400 " key={index}>
                            <img src={post.mainImage.asset.url}
                            alt="{post.title}"
                             className="w-full rounded-r object-cover absolute"/>
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
    <h3 className="text-gray text-lg font-blog px-3 py-4 bg-gray-800 text-gray-50 bg-opacity-75 rounded">{post.title}</h3>
                            </span>
                        </span>
                        </Link>
                    </article>
))}
                </div>
            </section>
        </main>
       
    )
}

export default Post
