import React from 'react';
import { IProps } from '../interfaces/props.interface';
import './CardContainer.css';

interface Props extends IProps {
  classList?: string
}

export const CardContainer = ({ children, classList = "" }: Props) => {
  return (
    <section className={`rounded-custom border-custom border-white border-opacity-30 bg-custom-radial shadow-custom backdrop-blur-custom ${classList}`}>
      {children}
    </section>
  )
}
