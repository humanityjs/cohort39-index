import axios from 'axios';

import {
    GET_POSTS,
    ADD_NEW_POST
} from '../utils/types';


const BASE_URL = 'http://localhost:4500';

const setPostsToState = (posts) => ({
    type: GET_POSTS,
    posts
})

const setNewPostToState = (post) => ({
    type: ADD_NEW_POST,
    post
})

export const getAllPosts = () => {
    return (dispatch) => {
        return axios.get(`${BASE_URL}/posts`).then(res => {
            return dispatch(setPostsToState(res.data))
        })
    }
}

export const addNewPost = (post) => {
    return (dispatch) => {
        return axios.post(`${BASE_URL}/posts`, post).then(res => {
            dispatch(setNewPostToState(res.data))
        })
    }
}