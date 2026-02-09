import { Avatar } from './Avatar';

export default {
  component: Avatar,
};

export const Small = {
  args: {
    src: 'https://via.placeholder.com/40',
    alt: 'User avatar',
    size: 'sm',
  },
};

export const Medium = {
  args: {
    src: 'https://via.placeholder.com/80',
    alt: 'User avatar',
    size: 'md',
  },
};

export const Large = {
  args: {
    src: 'https://via.placeholder.com/120',
    alt: 'User avatar',
    size: 'lg',
  },
};
