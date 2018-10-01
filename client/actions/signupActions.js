import axios from 'axios';

export const userSignupRequest = userData => () => axios.post('/api/users', userData);
