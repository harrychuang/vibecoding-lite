import type { Meta, StoryObj } from '@storybook/react';
import { Profile } from './Profile';

const meta: Meta<typeof Profile> = {
  title: 'Components/Profile',
  component: Profile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: "User's display name",
    },
    info: {
      control: 'text',
      description: 'Additional user information',
    },
    avatarUrl: {
      control: 'text',
      description: 'Avatar image URL',
    },
    avatarAlt: {
      control: 'text',
      description: 'Alt text for the avatar image',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default profile with avatar image
 */
export const Default: Story = {
  args: {
    name: 'User Name',
    info: 'User info',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    avatarAlt: 'User avatar',
  },
};

/**
 * Profile without user info
 */
export const NameOnly: Story = {
  args: {
    name: 'User Name',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  },
};

/**
 * Profile without avatar image (shows placeholder)
 */
export const NoAvatar: Story = {
  args: {
    name: 'User Name',
    info: 'User info',
  },
};

/**
 * Profile with longer text content
 */
export const LongContent: Story = {
  args: {
    name: 'Alexander Hamilton',
    info: 'Senior Product Designer at Company',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  },
};
