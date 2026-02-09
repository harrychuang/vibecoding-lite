import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'light', 'icon', 'like'],
      description: 'Button variant style',
    },
    size: {
      control: 'select',
      options: ['sm', 'med', 'lg'],
      description: 'Button size',
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
    icon: {
      control: 'select',
      options: [
        undefined,
        'facebook',
        'x',
        'instagram',
        'linkedin',
        'google',
        'youtube',
        'apple',
        'snapchat',
        'pinterest',
        'medium',
        'github',
        'threads',
        'whatsapp',
        'figma',
        'dribbble',
        'reddit',
        'discord',
        'tiktok',
        'tumblr',
        'telegram',
        'bluesky',
        'vk',
        'spotify',
        'twitch',
        'messenger',
        'heart',
        'heart-outline',
      ],
      description: 'Icon platform to display',
    },
    iconColor: {
      control: 'color',
      description: 'Custom icon color',
    },
    isLiked: {
      control: 'boolean',
      description: 'Whether the like button is in liked state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default button variant with filled black background
 */
export const Default: Story = {
  args: {
    variant: 'default',
    label: 'label',
    icon: 'instagram',
  },
};

/**
 * Light button variant with white background and border
 */
export const Light: Story = {
  args: {
    variant: 'light',
    label: 'label',
    icon: 'instagram',
  },
};

/**
 * Icon button variant - text button with icon, no background
 */
export const Icon: Story = {
  args: {
    variant: 'icon',
    label: 'label',
    icon: 'apple',
  },
};

/**
 * Like button variant - unliked state with heart outline
 */
export const LikeUnliked: Story = {
  args: {
    variant: 'like',
    label: 'label',
    icon: 'heart-outline',
    isLiked: false,
  },
};

/**
 * Like button variant - liked state with filled heart
 */
export const LikeLiked: Story = {
  args: {
    variant: 'like',
    label: 'label',
    icon: 'heart',
    isLiked: true,
  },
};

/**
 * All button variants displayed together
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <Button variant="default" label="label" icon="instagram" />
      <Button variant="light" label="label" icon="instagram" />
      <Button variant="icon" label="label" icon="apple" />
      <Button variant="like" label="label" icon="heart-outline" isLiked={false} />
      <Button variant="like" label="label" icon="heart" isLiked={true} />
    </div>
  ),
};

/**
 * Interactive Like button demo - click to toggle like/unlike state
 */
const LikeButtonDemo = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Button
      variant="like"
      label={isLiked ? '1' : 'like'}
      icon={isLiked ? 'heart' : 'heart-outline'}
      isLiked={isLiked}
      onClick={handleClick}
    />
  );
};

export const LikeInteractive: Story = {
  render: () => <LikeButtonDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive Like button - click to toggle between liked and unliked states. The label changes from "like" to "1" when liked.',
      },
    },
  },
};

/**
 * Button with custom icon color
 */
export const CustomIconColor: Story = {
  args: {
    variant: 'light',
    label: 'Custom Color',
    icon: 'instagram',
    iconColor: '#8b5cf6',
  },
};

/**
 * Small size button
 */
export const SizeSmall: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    label: 'Small',
    icon: 'instagram',
  },
};

/**
 * Medium size button (default)
 */
export const SizeMedium: Story = {
  args: {
    variant: 'default',
    size: 'med',
    label: 'Medium',
    icon: 'instagram',
  },
};

/**
 * Large size button
 */
export const SizeLarge: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    label: 'Large',
    icon: 'instagram',
  },
};

/**
 * All button sizes displayed together
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ width: '80px', fontSize: '14px', color: '#666' }}>Small</span>
        <Button variant="default" size="sm" label="Button" icon="instagram" />
        <Button variant="light" size="sm" label="Button" icon="instagram" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ width: '80px', fontSize: '14px', color: '#666' }}>Medium</span>
        <Button variant="default" size="med" label="Button" icon="instagram" />
        <Button variant="light" size="med" label="Button" icon="instagram" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ width: '80px', fontSize: '14px', color: '#666' }}>Large</span>
        <Button variant="default" size="lg" label="Button" icon="instagram" />
        <Button variant="light" size="lg" label="Button" icon="instagram" />
      </div>
    </div>
  ),
};
