import { AxiosInstance } from 'axios';

export interface UserType {
  _id: string;
  username: string;
  email: string;
  avatarImage: string | null;
  createdAt: string;
  updatedAt: string;
  socketId: string | null;
  isOnline: boolean;
}

export interface MessageType {
  sender: string;
  message: string;
  createdAt: string;
  _id: string;
}

export interface ContextType {
  token: string | null;
  user: UserType | null;
  API: AxiosInstance | null;
  userSetter?: (user: UserType) => void;
  tokenSetter?: (token: string) => void;
  get_user?: () => Promise<void>;
  logout?: () => void;
  unreadchat: MessageType[];
  remove_unread_chat?: (user_id: string) => void;
}
