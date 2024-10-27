import { useState } from 'react';

export const AlertButton = ({ onSubmit }) => {
  const [message, setMessage] = useState('Alert!');

  return (
    <div>
      <label>
        Message
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>

      <button onClick={() => onSubmit(message)}>Trigger Alert</button>
    </div>
  );
};
