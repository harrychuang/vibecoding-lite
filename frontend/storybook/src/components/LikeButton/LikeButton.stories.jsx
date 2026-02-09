import { LikeButton } from './LikeButton';

export default {
  component: LikeButton,
};

export const Default = {
  args: {
    liked: false,
    label: 'Like',
  },
};

export const Liked = {
  args: {
    liked: true,
    label: 'Like',
  },
};
