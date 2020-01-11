import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall'

const posts = [{
    id: "0",
    description: "beautiful landscape",
    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/"
}, {
    id: "1",
    description: "Aliens???",
    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/"
 
},
{
    id: "2",
    description: "On a vacation!",
    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/"
}]


class Main extends Component {
    render() {
        return <div>
                 <Title title={'PhotoWall'}/>
                 <PhotoWall posts={posts}/>
               </div>
    }
}

export default Main