import React, { useMemo, useState } from 'react';

const CardItem: React.FC<{}> = () => {

  const [name, setName] = useState('');

  const nameChange = (e: any) => {
    setName(e.target.value);
  }

  const newName = useMemo(() => {
    return 'hello，' + name;
  }, [name])

  return (
    <div>
      <input
        type     = "text"
        onChange = {nameChange}
      />
      <h1>{ newName }</h1>
    </div>
  )
}

export default CardItem;