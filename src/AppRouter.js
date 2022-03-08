import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthForm from './components/Auth/AuthForm'
import PostList from './components/PostList'
import PrivateRoute from './components/CustomRoute';
import LoginForm from './components/Auth/LoginForm';

export default function AppRouter() {

  return (
    <Routes>
      <Route path="/" element={<LoginForm/>}/>
      <Route path="/posts" element={
        <PrivateRoute>
          <PostList />
        </PrivateRoute>
      }/>
    </Routes>
  )
}