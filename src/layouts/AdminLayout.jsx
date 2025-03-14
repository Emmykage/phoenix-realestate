import React, { useEffect, useState } from 'react';
import Aside from '../components/admin/Aside';
import '../components/admin/style.css';
import Right from '../components/admin/Right';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/actions/users';
import Loader from '../components/loader/Loader';
import { useNavigate } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  console.log("User:", user, "Loading:", loading);

  useEffect(() => {
    if (!user) {
      dispatch(getUser()); // Fetch user data if not in Redux
    }
  }, [user, dispatch]);

  useEffect(() => {

    if (!user && !loading || (!loading && user?.role !== "admin")) {
      navigate('/auth/admin_login');
    }
  }, [user, loading, navigate]);

  if (loading) return <Loader />; // Show loader while checking auth

  return (
    <div className="admin contain">
      <Aside isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="overflow-auto h-screen py-4">
        {children}
      </main>
      <Right setIsOpen={setIsOpen} />
    </div>
  );
};

export default AdminLayout;
