import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showAlert, hideAlert, createAsyncPost, fetchPosts } from './redux/actions'
import AlertForm from './alertForm'
import { Loader } from './Loader'

function PostForm(props) {

    const [title, setTitle] = useState('');

    function newAlert(text) {
        return {
            message: text,
            id: Date.now(),
        }
    }

    useEffect(() => {
        if(props.user) return props.fetchPosts(newAlert('Ups something went wrong!'), props.user.user.uid)
    }, [props.user])

    if(props.loading) {
        return (
            <Loader />
        )
    }
    
    const submitHandler = event => {
        event.preventDefault();

        if(!title.trim()) {
           props.showAlert(newAlert('Название поста не может быть пустым'))
           console.log('props.alerts', props.alerts)
           return props.hideAlert(newAlert('Название поста не может быть пустым'))
        }

        const newPost = {
            title,
            uid: props.user.user._delegate.uid 
        }
    
        props.createAsyncPost(newPost);
        setTitle('');
    }

    // const changeInputHandler = event => {
    //     setTitle(prev => ({...prev, ...{
    //         [event.target.name]: event.target.value
    //     }}))
    // }
    
    return (
        <form onSubmit={submitHandler}>
            {props.alerts && <AlertForm />}
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="title"
                    value={title}
                    name='title'
                    onChange={event => setTitle(event.target.value)}    
                />
            </div>
            <button type="submit" className="btn btn-success">Create</button>
        </form> 
        )
}

const mapDispatchToProps = {
    showAlert, hideAlert, createAsyncPost, fetchPosts
}

const mapStateToProps = state => ({
    alerts: state.app.alerts,
    user: state.app.user,
    loading: state.app.loading
})

PostForm.propTypes = {
    showAlert: PropTypes.func,
    hideAlert: PropTypes.func,
    createAsyncPost: PropTypes.func,
    fetchPosts: PropTypes.func,

}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)