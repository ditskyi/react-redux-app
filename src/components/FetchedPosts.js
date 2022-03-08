import React from 'react'
import PropTypes from 'prop-types'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Loader } from './Loader'
import Post from './Post'
import { fetchPosts } from './redux/actions'

const FetchedPosts = () => {
    const dispatch = useDispatch()
    const { posts, loading } = useSelector(state => ({
        posts: state.posts.fetchedPosts,
        loading: state.app.loading,
    }))
    
    if(loading) {
        return (
            <Loader />
        )
    }

    if(!posts.length) {
        const newAlert = {     
        message: 'Ups something went wrong!',
        id: Date.now(),
        }
        return <button 
        type="button" 
        className='btn btn-primary'
        onClick={() => dispatch(fetchPosts(newAlert)) }
        >Download</button>
    }   else
    return posts.map(post => <Post post={post}/>)
}

fetchPosts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        userId: PropTypes.number,
        id: PropTypes.number,
        title: PropTypes.string,
        body: PropTypes.string,
    })).isRequired,
    loading: PropTypes.bool.isRequired
}

export default FetchedPosts

// using connect HOC

// const fetchedPosts = (props) => {

//     if(props.loading) {
//         return (
//             <Loader />
//         )
//     }

//     if(!props.posts.length) {
//         return <button 
//         type="button" 
//         className='btn btn-primary'
//         onClick={() => props.fetchPosts() }
//         >Download</button>
//     }   else
//     return props.posts.map(post => <Post post={post} key={post.id}/>)
// }

// const mapStateToProps = state => {
//     return {
//         posts: state.posts.fetchedPosts,
//         loading: state.app.loading
//     }
// }

// const mapDispatchToProps = {
//     fetchPosts
// }

// export default connect(mapStateToProps, mapDispatchToProps)(fetchedPosts)