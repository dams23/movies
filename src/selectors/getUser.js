import { users } from '../data/users';

export const getUser = (username='', password='')=>{
  if( username === '' || password === '' ){
    return {};
  }
  return users.find(u => u.username === username && u.password === password);
}