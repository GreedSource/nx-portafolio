import { useNavigate } from 'react-router-dom';

export const useAppBarServices = () => {
  const navigate = useNavigate();
  const handleRedirect = (path: string) => {
    navigate(path);
  };
  return {
    handleRedirect,
  };
};

export default useAppBarServices;
