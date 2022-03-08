import FetchedPosts from './FetchedPosts';
import PostForm from './PostForm';
import Posts from './Posts';

const PostList = () => {
  return (
    <div className="container pt-3 bg-light bg-gradient">
      <div className='row'>
        <div className='col'>
          <PostForm />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h2>Async Posts</h2>
          <Posts />
        </div>
        {/* <div className='col'>
          <h2>Async Posts</h2>
          <FetchedPosts />
        </div> */}
      </div>
    </div>
  )
}

export default PostList