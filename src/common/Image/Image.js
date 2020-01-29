import React from 'react';

const Image = ({ className, src, alt }) => (<img className={`${className} img`} src={src} alt={alt} />);

export default Image;
