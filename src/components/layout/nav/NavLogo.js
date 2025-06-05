import React from 'react';
import { AshLogo } from '../../svgs';

const NavLogo = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <AshLogo className="text-5xl 2xl:text-8xl" style={{ height: '1.3em' }}/>
    </a>
  );
});

NavLogo.displayName = 'NavLogo';

export default NavLogo;
