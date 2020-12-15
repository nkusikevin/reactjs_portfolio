import React ,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../client'
import BlockContent from "@sanity/block-content-to-react"
const builder = imageUrlBuilder(sanityClient)
function urlFor(source){
    return builder.image(source)
}
function Singlepost() {
    const [singlepost , setpost] = useState('')
    const {slug} = useParams()
useEffect(()=>{
    sanityClient.fetch(`*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
            asset->{
                _id,
                url,
            }
        },
         body,
        "name":author->name,
        "authorImage":author->image
    }`).then((data)=> setpost(data[0]))
    .catch(console.error)
}, [slug])
if(!singlepost) return <div> Wait Loading.......🚦</div>
    return (
      <main className="bg-gray-700 min-h-screen p-12">
          <article className="container mx-auto shadoe-lg bg-gray-200 rounded-lg">
              <header className=" relative">
                  <div className=" absolute h-full w-full flex items-center justify-center p-8">
                      <div className=" bg-white bg-opacity-75 rounded p-12">
                          <h1 className=" cursive text-3xl lg:text-6xl mb-4">
                              {singlepost.title}
                          </h1>
                          <div className="flex justify-center text-gray-800"><img src={urlFor(singlepost.authorImage).url() } alt={singlepost.name}  className="w-10 h-10 rounded-full"/></div>
                          <p className="cursive flex justify-center items-center pl-2 text-2xl">
                          {singlepost.name}
                          </p>
                      </div>
                  </div>
                  <img src={singlepost.mainImage.asset.url} alt={singlepost.title} className="w-full object-cover rounded-t" style={{ height:"400px"}}/>
              </header>
              <div className="px-16 lg:px-48 py-12 prose lg:prose-xl max-w-full">
                  <BlockContent blocks={singlepost.body} projectId="f8s7d85o" dataset="production"/>
              </div>
          </article>
      </main>
    )
}

export default Singlepost
