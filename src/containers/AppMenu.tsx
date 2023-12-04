import { Link, NavLink } from 'react-router-dom';
import { privateRoute } from 'routes';

type MenuProps = {
  path: string;
  name?: string;
};

const navLinkCssClasses = ({ isActive }: { isActive: boolean }): string => {
  return `hover:text-[#FF6600] ${isActive ? 'text-[#FF6600]' : ''}`;
};

const MenuItem = ({ path, name }: MenuProps) => {
  return (
    <NavLink to={path} className={navLinkCssClasses}>
      <div className='text-black px-5 text-xs font-extrabold'>{name}</div>
    </NavLink>
  );
};

const AppMenu = () => {
  return (
    <>
      <MenuItem {...privateRoute.home} />
      <MenuItem {...privateRoute.intro} />
      <MenuItem {...privateRoute.hotel} />
      <MenuItem {...privateRoute.tours} />
      <MenuItem {...privateRoute.news} />
      <MenuItem {...privateRoute.contact} />
    </>
  );
};

export default AppMenu;
