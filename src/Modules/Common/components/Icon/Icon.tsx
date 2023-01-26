import React, { useMemo } from 'react';
import styled from '@emotion/styled';

const convertIconNameToFontAwesome = (names: string[]) => {

  return names.reduce((acc, name) => {
    return `${acc} fa-${name}`;
  }, '');
};

const AnimatedIcon = styled.i`
  &:hover {
    transition: all 0.5s ease-in-out;
    scale: 1.1;
  }
`;


const Icon = ({ names, size = 1, ...props }: IconProps) => {
  const iconClassname = useMemo(() => convertIconNameToFontAwesome(names), [names]);

  return (
    <AnimatedIcon className={iconClassname} style={{ fontSize: `${size}rem` }} {...props}>
    </AnimatedIcon>
  );
};


type IconProps = {
  names: string[];
  size?: number;
}


export default Icon;
