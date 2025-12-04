import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/admin/submissions');
  }, [navigate]);

  return null;
};

export default DashboardPage;
