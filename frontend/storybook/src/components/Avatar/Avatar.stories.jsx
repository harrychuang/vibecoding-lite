import { Avatar } from './Avatar.jsx';
import scaleStyles from './Avatar.stories.module.css';

/** @type {import('@storybook/react').Meta} */
const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    src: { control: 'text', description: '留空則使用 Figma 預設圖' },
    alt: { control: 'text' },
    size: { control: 'number', description: '像素；留空則用 design token 預設' },
  },
  args: {
    src: undefined,
    alt: '使用者頭像',
    size: undefined,
  },
};

export default meta;

/** @type {import('@storybook/react').StoryObj} */
export const Default = {};

/** @type {import('@storybook/react').StoryObj} */
export const CustomSize = {
  args: { size: 64 },
};

/** 並列三種邊長，展示 token 預設與自訂像素 */
export const SizeScale = {
  render: () => (
    <div className={scaleStyles.row}>
      <Avatar alt="小" size={48} />
      <Avatar alt="中" size={80} />
      <Avatar alt="預設 120" />
    </div>
  ),
};
