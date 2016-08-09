import axios from 'axios';

// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
const ROOT_URL = 'https://benblog-cs52.herokuapp.com/';
const API_KEY = '?key=benjamin_cooper';
import { browserHistory } from 'react-router';


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
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };
}


export function fetchposts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };


  // axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
  //   return (dispatch) => {
  //     dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
  //   };
  // }).catch(error => {
  //   console.log('error');
  // });
}

export function createPost(thePost) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, thePost).then(response => {
      dispatch({ type: ActionTypes.CREATE_POST, payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };
  // const fields = { title: thePost.title, contents: thePost.content, tags: thePost.tags };
  // axios.post(`${ROOT_URL}/posts${API_KEY}`, fields).then(response => {
  //   return (dispatch) => {
  //     dispatch({ type: ActionTypes.CREATE_POST, payload: response.data });
  //   };
  // }).catch(error => {
  //   console.log('error');
  // });
}


export function updatePost(id, newPost) {
  console.log('FROM ACTIONS: ' + newPost);
  // const fields = { title: thePost.title, contents: thePost.content, tags: thePost.tags };
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, newPost).then(response => {
      dispatch({ type: ActionTypes.UPDATE_POST, payload: response.data });
    }).catch(error => {
      console.log('error');
    });
  // axios.put(`${ROOT_URL}/posts${API_KEY}`, fields).then(response => {
  //   return (dispatch) => {
  //     dispatch({ type: ActionTypes.UPDATE_POST, payload: response.data });
  //   };
  // }).catch(error => {
  //   console.log('error');
  // });
  };
}


export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      dispatch({ type: ActionTypes.DELETE_POST, payload: response.data });
    }, browserHistory.push('/')).catch(error => {
      console.log(error);
    });
  };


  // axios.delete(`${ROOT_URL}/posts${API_KEY}`, id).then(response => {
  //   return (dispatch) => {
  //     dispatch({ type: ActionTypes.DELETE_POST, payload: response.data });
  //   };
  // }).catch(error => {
  //   console.log('error');
  // });
}
