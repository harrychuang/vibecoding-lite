import { Profile } from './Profile.jsx';

/** @type {import('@storybook/react').Meta} */
const meta = {
  title: 'Components/Profile',
  component: Profile,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text' },
    info: { control: 'text' },
    avatarSrc: { control: 'text', description: '選填；未傳則使用 Avatar 預設圖' },
    avatarAlt: { control: 'text' },
    avatarSize: { control: 'number', description: '像素；未傳則為 design token 預設 120' },
  },
  args: {
    name: 'User name',
    info: 'User info',
  },
};

export default meta;

/** @type {import('@storybook/react').StoryObj} */
export const Default = {};

/** @type {import('@storybook/react').StoryObj} */
export const LongCopy = {
  args: {
    name: 'Alex Designer',
    info: 'Product design · Taipei · Available for collaboration',
  },
};
