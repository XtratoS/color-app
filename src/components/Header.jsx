import React from 'react';

export default function Header(props) {
  let { title, description } = props;

  return (
    <>
      <h1>
        {title}
      </h1>
      <p>
        {description}
      </p>
    </>
  )
}
