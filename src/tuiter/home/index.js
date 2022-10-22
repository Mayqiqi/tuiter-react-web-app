import posts from './post.json'
import PostItem from "./postItem.js"
import './index.css';
import './home.css';

const HomeComponent = () => {
  return(


    <div className="wd-grid-content">
      {posts.map(post=>
        <PostItem key={post.id}
         post={post}/>
          )
      }
    </div>

);
}
export default HomeComponent;