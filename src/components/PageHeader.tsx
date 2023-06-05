import React from 'react';
import { PageHeaderItem } from '../../typings';
import Image from 'next/image';

const PageHeader = ({
  image,
  breadcrumb,
  heading,
  description,
}: PageHeaderItem) => {
  return (
    <div className='pageHeader'>
      <div className='pageHeader__background'>
        <Image src={image} alt={heading} fill />
      </div>
      <div className='pageHeader__content'>
        <span className='pageHeader__breadcrumb'>{breadcrumb}</span>
        <h1 className='pageHeader__heading'>{heading}</h1>
        <p className='pageHeader__description'>{description}</p>
      </div>
    </div>
  );
};

export default PageHeader;
