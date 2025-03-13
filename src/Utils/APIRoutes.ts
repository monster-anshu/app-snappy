export const registerRoute = '/api/auth/register';
export const loginRoute = '/api/auth/login';
export const setAvatar = '/api/user/setAvatar';
export const getAllusers = (page: number) => `/api/user/allusers?page=${page}`;
export const get_me = '/api/user/me';
export const send_message = (id: string) => `/api/chat/${id}`;
export const get_messages = (id: string) => `/api/chat/${id}`;
