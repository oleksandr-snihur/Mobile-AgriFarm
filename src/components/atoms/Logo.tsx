import React from 'react';

import tw from '../../helpers/tailwind';
import LogoSvg from '../../assets/images/logo.svg';

type LogoProps = {
  width?: number;
};


/**
 * component definition
 * @returns ReactNode
 */
const Logo = ({ width=267 }: LogoProps) => {
  return (
    <LogoSvg
      width={width}
      height={width/267.0*232}
      style={tw`self-center`}
    />
  );
};

export default Logo;
