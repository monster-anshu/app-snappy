import React, { useState } from 'react';
import { Container } from './Sender.style';
import Picker, { IEmojiPickerProps } from 'emoji-picker-react';
import Emoji from 'Assets/emoji.svg';
import Send from 'Assets/send.svg';

interface Proptypes {
  onSubmit?: (message: string) => void;
}

const Sender: React.FC<Proptypes> = ({ onSubmit }) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmoji = () => {
    setShowEmoji((showEmoji) => !showEmoji);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    message && onSubmit?.(message);
  };

  const handleEmojiEnter: IEmojiPickerProps['onEmojiClick'] = (
    event,
    emoji,
  ) => {
    setMessage((message) => message + emoji.emoji);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setMessage(event.target.value);
  };

  return (
    <Container>
      <div className={'button-container'}>
        <img src={Emoji} alt={'Emoji'} onClick={handleEmoji} />
        {showEmoji && <Picker onEmojiClick={handleEmojiEnter} />}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder={'type your message here'}
          onChange={handleChange}
          value={message}
        />
        <button type={'submit'}>
          <img src={Send} alt={'Send'} />
        </button>
      </form>
    </Container>
  );
};

export default Sender;
