export default{
    name:"project",
    title:"Project",
    type:"document",
    fields:[{
        name:"title",
        type:"string",
    },{
        name:"date",
        type:"datetime",
    },{
        name:"place",
        type:"string",
    },{
        name:"description",
        type:"text",
    },{
        name:"projectType",
        type:"string",
        title:"project type",
        options:{
            list:[
                {value:"personal" ,title:"Personal"},
                {value:"client" ,title:"Client"},
                {value:"school" ,title:"School"}
            ]
        },
       
    }, {
            name:"link",
            type:'url'
        },
        {
            name:"tags",
            type:"array",
            of:[{
                type:"string",
            },],
            options:{
                layout:"tags"
            },
        },  {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
],
}