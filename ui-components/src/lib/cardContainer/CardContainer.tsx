import React from 'react';
import { IProps } from '../interfaces/props.interface';

interface Props extends IProps {
  classList?: string
  id: string;
}

export const CardContainer = ({ children, classList = "", id }: Props) => {
  return (
    <section id={id} className={`rounded-custom border-custom border-white border-opacity-30 bg-custom-radial shadow-custom backdrop-blur-custom ${classList}`}>
      {children}
    </section>
  )
}
