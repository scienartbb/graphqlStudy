import { enumType } from 'nexus';
export const UserRole = enumType({
  name: 'UserRole',
  // members: {
  //   USER: 'USER',
  //   ADMIN: 'ADMIN',
  // },
  members: ['USER', 'ADMIN'],
});
