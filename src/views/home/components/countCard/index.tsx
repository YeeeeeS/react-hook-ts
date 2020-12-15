import React, { useEffect, useState } from 'react';

const CountCard: React.FC<{callback: any}> = ({ callback }) => {
  
  const [count, setCount] = useState(() => callback());

  useEffect(() => {
    setCount(callback())
  }, [callback])

  return (
    <div>
      { count }
    </div>
  )
}

export default CountCard;