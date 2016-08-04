import { axios } from 'axios';

const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=benjamin_cooper';


export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
};


export function fetchpost(id) {
// axios get

  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`, id).then(response => {
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
    }).catch(error => {
      console.log('error');
    });
  };
}


export function fetchposts() {
  axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
    return (dispatch) => {
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
    };
  }).catch(error => {
    console.log('error');
  });
}

export function createPost(thePost) {
  const fields = { title: thePost.title, contents: thePost.content, tags: thePost.tags };
  axios.post(`${ROOT_URL}/posts${API_KEY}`, fields).then(response => {
    return (dispatch) => {
      dispatch({ type: ActionTypes.CREATE_POST, payload: response.data });
    };
  }).catch(error => {
    console.log('error');
  });
}


export function updatePost(thePost) {
  const fields = { title: thePost.title, contents: thePost.content, tags: thePost.tags };
  axios.put(`${ROOT_URL}/posts${API_KEY}`, fields).then(response => {
    return (dispatch) => {
      dispatch({ type: ActionTypes.UPDATE_POST, payload: response.data });
    };
  }).catch(error => {
    console.log('error');
  });
}


export function deletePost(id) {
  axios.delete(`${ROOT_URL}/posts${API_KEY}`, id).then(response => {
    return (dispatch) => {
      dispatch({ type: ActionTypes.DELETE_POST, payload: response.data });
    };
  }).catch(error => {
    console.log('error');
  });
}
