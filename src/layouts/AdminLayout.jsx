import React, { useEffect } from 'react';
import Aside from '../components/admin/Aside';
import '../components/admin/style.css';
import Right from '../components/admin/Right';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/actions/users';
import Loader from '../components/loader/Loader';
import { userLog } from '../redux/auth/user_authentication';
import { useNavigate } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);
  const navigation = useNavigate()
  useEffect(() => {
    dispatch(getUser());
    dispatch(userLog())
  }, []);
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
    (navigation('/auth/admin_login '))
  }else{

    user.role === "admin" && <h1 className='text-gray'>You are not Authorized to view this page</h1>

  return (
    <div className="admin container">
      <Aside />
      <main>
        {children}
      </main>

      <Right />

    </div>
  );
};
    
}



export default AdminLayout;
