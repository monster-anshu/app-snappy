import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { MessageType, UserType } from 'Types';
import { Container } from './Chat.style';
import defaultUser from 'Assets/user.svg';
import { Sender, Message } from 'Components';
import { send_message, get_messages } from 'Utils/APIRoutes';
import { Context } from 'Context';
interface Proptypes {
  user: UserType;
}
const Chat: React.FC<Proptypes> = ({ user }) => {
  const {
    API,
    user: current_user,
    remove_unread_chat,
    unreadchat,
  } = useContext(Context);
  const [messages, setMessages] = useState<MessageType[]>([]);

  const ref = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    ref.current?.scrollIntoView();
  };

  const handleUnread = useCallback(() => {
    const my_unread_message = unreadchat.filter(
      (message) => message.sender === user._id,
    );
    if (!my_unread_message.length) return;
    setMessages((messages) => messages.concat(my_unread_message));
    remove_unread_chat?.(user._id);
  }, [unreadchat, user, remove_unread_chat]);

  const handleSend = (text: string) => {
    API?.post(send_message(user._id), { message: text });
    const _id = Math.random().toString();
    const message: MessageType = {
      message: text,
      sender: current_user?._id ?? '',
      createdAt: new Date().toISOString(),
      _id,
    };
    const new_messages = messages.concat(message);
    setMessages(new_messages);
  };

  const fetchMessages = useCallback(() => {
    setMessages([]);
    API?.get(get_messages(user._id)).then(({ data }) => {
      setMessages(data);
    });
  }, [API, user]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages, user]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    handleUnread();
  }, [handleUnread]);

  return (
    <Container>
      <div className={'chat-header'}>
        <div className={'chat-user'}>
          <img
            src={
              user.avatarImage
                ? `data:image/svg+xml;base64,${user.avatarImage}`
                : defaultUser
            }
            alt={user.username}
          />
          <h3>{user.username}</h3>
        </div>
      </div>
      <div className={'messages'}>
        {messages.map((message) => (
          <div ref={ref} key={message._id}>
            <Message
              {...message}
              isMine={message.sender === current_user?._id}
            />
          </div>
        ))}
      </div>
      <Sender onSubmit={handleSend} />
    </Container>
  );
};

export default Chat;
