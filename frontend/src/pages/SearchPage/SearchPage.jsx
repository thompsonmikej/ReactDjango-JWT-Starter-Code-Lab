// // Within the PostList component, create the feed where all your posts will be displayed in your app.All posts should be passed into this component using props.Then, utilize the “map” higher order array method to map each post to its own Post component.
// import React from "react";


// const SearchPage = (props) => {
//     return (
//         <div>
//             {props.parentList.map((entry, index) => {
//                 return (
//                     <Post entry={entry} index={index} />
//                 )
//             })}
//         </div>
//     )

// }
// export default PostList;
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
// Search results appear here
// is this necessary?

const SearchPage = (props) => {

    return (
        <div>SearchPage</div>
        // <h2><RelatedVideos /></h2>
    )
}

export default SearchPage;