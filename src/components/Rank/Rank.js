import React, { useState, useEffect } from 'react';

const Rank = ({ name, entries }) => {
  const [emoji, setEmoji] = useState('')

  useEffect(() => {
    generateEmoji(entries)
  }, [entries]);

  const generateEmoji = (entries) => {
    fetch(`${process.env.AWS_LAMBDA_ENDPOINT}?rank=${entries}`)
      .then(res => res.json())
      .then(res => setEmoji(res.input))
      .catch(console.log)
  }
  return (
    <div>
      <div className='white f3'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
      <div className='white f3'>
        {`Rank Badge: ${emoji}`}
      </div>
    </div>
  );
}

export default Rank;