import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAsyncPost } from './redux/actions';
import PropTypes from 'prop-types'

const Post = ({ post }) => {
    const dispatch = useDispatch();

    return (
        <div className='card mb-3 '>
            <div className='card-body d-flex justify-content-between'>
                <h5 className='card-title'>{post.title}</h5>
                <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="alert" 
                aria-label="Close"
                onClick={() => dispatch(deleteAsyncPost(post))}
            ></button>
            </div>
        </div>
    )
}


Post.propTypes = {
    post: PropTypes.shape({
        uid: PropTypes.string,
        id: PropTypes.string,
        title: PropTypes.string,
        body: PropTypes.string,
    }),
    deleteAsyncPost: PropTypes.func
}

export default Post