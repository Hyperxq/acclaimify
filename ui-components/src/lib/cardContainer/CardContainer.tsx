import React from 'react';
import { IProps } from '../interfaces/props.interface';

interface Props extends IProps {
  classList?: string
  id: string;
  skipBorders?: boolean
}

export const CardContainer = ({ children, classList = "", id, skipBorders = false }: Props) => {
  const borderRounded = !skipBorders ? 'rounded-custom' : '';

  return (
    <section id={id} className={`${borderRounded} border-custom border-white border-opacity-30 bg-custom-radial shadow-custom backdrop-blur-custom ${classList}`}>
      {children}
    </section>
  )
}
