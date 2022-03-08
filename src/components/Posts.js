import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from './Post'

const Posts = ({syncPosts}) => {
    // console.log('syncPosts', syncPosts)
    if(!syncPosts.length) {
        return <p className='text-center'>Постов пока нет!</p>
    } else
    return syncPosts.map(post => <Post post={post} key={post.id}/>)
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

Posts.propTypes = {
    syncPosts: PropTypes.arrayOf(PropTypes.shape({
        uid: PropTypes.string,
        id: PropTypes.string,
        title: PropTypes.string
    })).isRequired
}

export default connect(mapStateToProps, null)(Posts)