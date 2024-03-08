import React, { useEffect } from 'react';
import Aside from '../components/admin/Aside';
import '../components/admin/style.css';
import Right from '../components/admin/Right';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/actions/users';
import Loader from '../components/loader/Loader';
import { userLog } from '../redux/auth/user_authentication';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);
  const navigation = useNavigate()
  useEffect(() => {
    // dispatch(getUser());
    dispatch(userLog())
  }, []);
 console.log(user)
  const logout = () => {
    localStorage.setItem('phoenix_auth', null);
    navigation('/auth/login')
  }

  if (loading) {
    return (<Loader />);
  }
  if (error) {
    <div>
      {' '}
      <h3>No internet</h3>
      {' '}
    </div>;
  }
  if(user == null){
    (navigation('/auth/admin/login'))
  }else{
  
    if(user.role === "client"){
      return(
        <>
        <h1 className='text-gray text-center my-4'>You are not Authorized to view this page</h1>
        <h2 className='text-gray text-center my-4'><a onClick={logout}>Login</a> </h2>
        </>

      )
    }else{


  return (
    <div className="admin contain">
      <Aside />
      <main className='overflow-auto'>
        {children}
      </main>

      <Right/>

    </div>
  );
}
};
    
}



export default AdminLayout;
