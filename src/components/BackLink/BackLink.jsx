import { useLocation } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { GoBack } from './BackLink.styled';

const BackLink = () => {
  const location = useLocation();
  return (
    <GoBack to={location?.state?.from ?? '/'}>
      <MdOutlineKeyboardBackspace />
      Go back
    </GoBack>
  );
};

export default BackLink;
