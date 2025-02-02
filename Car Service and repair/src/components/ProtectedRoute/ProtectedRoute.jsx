import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if user is logged in
  const isAuthenticated = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  if (!isAuthenticated || !user) {
    // If not authenticated, redirect to home and open auth modal
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute; 