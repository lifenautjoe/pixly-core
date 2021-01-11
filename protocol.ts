const actions = {
  AUTHENTICATE: 'authenticate',
  JOIN_ROOM: 'joinRoom',
  SEND_MESSAGE: 'sendMessage',
  UPDATE_STATUS: 'updateStatus',
};

const events = {
  AUTHENTICATED: 'authenticated',
  JOINED_ROOM: 'joinedRoom',
  NEW_MESSAGE: 'newMessage',
  USER_STATUS_UPDATE: 'userStatusUpdate',
  ROOM_STATUS_UPDATE: 'roomStatusUpdate',
  ERROR: 'error',
};

export const PixlyProtocol = {
  events,
  actions,
};

export default PixlyProtocol;
