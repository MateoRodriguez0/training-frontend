import React, { useId } from 'react'

export const Component = () => {
    const id=useId();
    console.log(id);

  return (
    <div>
        <h1>useId</h1>
        <input type="text" id={id} name="nombre" placeholder='nombre' id="" />
    </div>
  )
}
