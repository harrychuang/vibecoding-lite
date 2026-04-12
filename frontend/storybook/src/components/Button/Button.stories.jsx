import { Button, BUTTON_ICON_OPTIONS } from './Button.jsx';
import galleryStyles from './Button.stories.module.css';

const variants = ['default', 'light', 'text', 'like'];

/** @type {import('@storybook/react').Meta} */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
      description: '對應 Figma 的 type（default / light / text / like）',
    },
    icon: {
      control: 'select',
      options: BUTTON_ICON_OPTIONS,
      description:
        '圖示（SocialIcon 平台或 Heart）。未傳則依 variant：default/light→Instagram、text→Apple、like→Heart',
    },
    iconVariant: {
      control: 'select',
      options: ['original', 'negative'],
      description:
        '選填，覆寫 SocialIcon 的 original/negative；未傳時 default 按鈕用 negative，其餘用 original',
    },
    active: { control: 'boolean' },
    actived: { control: 'boolean', description: 'Figma 拼字，等同 active（like）' },
    label: { control: 'text' },
    showIcon: { control: 'boolean' },
    disabled: { control: 'boolean' },
    type: { control: false, description: '原生 button type，預設 button' },
  },
  args: {
    variant: 'default',
    icon: 'Instagram',
    active: false,
    label: 'label',
    showIcon: true,
    disabled: false,
  },
};

export default meta;

/** @type {import('@storybook/react').StoryObj} */
export const Default = {};

/** 互動式：游標懸停以檢視 `--ref-opacity-hover-solid`。 */
export const Hover = {
  ...Default,
  parameters: {
    docs: {
      description: {
        story: '將游標移到按鈕上檢視 hover 狀態（透明度由 design token 驅動）。',
      },
    },
  },
};

/** @type {import('@storybook/react').StoryObj} */
export const Light = {
  args: { variant: 'light', icon: 'Instagram' },
};

/** @type {import('@storybook/react').StoryObj} */
export const Text = {
  args: { variant: 'text', icon: 'Apple' },
};

/** @type {import('@storybook/react').StoryObj} */
export const Like = {
  args: { variant: 'like', icon: 'Heart', active: false },
};

/** @type {import('@storybook/react').StoryObj} */
export const LikeActive = {
  args: { variant: 'like', icon: 'Heart', active: true },
};

/** @type {import('@storybook/react').StoryObj} */
export const Disabled = {
  args: { disabled: true },
};

/**
 * 鍵盤使用者可聚焦此 story 檢查 `:focus-visible` 外框（design token：`--comp-button-focus-ring`）。
 * @type {import('@storybook/react').StoryObj}
 */
export const FocusVisible = {
  args: { variant: 'default' },
  parameters: {
    docs: {
      description: {
        story: '使用 Tab 聚焦按鈕以檢視 focus ring。',
      },
    },
  },
};

/** 對齊 Figma 畫板：五種狀態並列 */
export const AllVariants = {
  render: () => (
    <div className={galleryStyles.board}>
      <Button variant="default" icon="Instagram" label="label" />
      <Button variant="light" icon="Instagram" label="label" />
      <Button variant="text" icon="Apple" label="label" />
      <Button variant="like" icon="Heart" label="label" active={false} />
      <Button variant="like" icon="Heart" label="label" active />
    </div>
  ),
};
