import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SocialIcon, SocialPlatform } from './SocialIcon';

const meta: Meta<typeof SocialIcon> = {
  title: 'Components/SocialIcon',
  component: SocialIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    platform: {
      control: 'select',
      options: [
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
      description: 'Social media platform',
    },
    variant: {
      control: 'select',
      options: ['colored', 'white'],
      description: 'Icon variant - colored (brand colors) or white',
    },
    color: {
      control: 'color',
      description: 'Custom color - overrides variant color when provided',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Icon size',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default colored icon
 */
export const Default: Story = {
  args: {
    platform: 'instagram',
    variant: 'colored',
    size: 'default',
  },
};

/**
 * White icon variant
 */
export const White: Story = {
  args: {
    platform: 'instagram',
    variant: 'white',
    size: 'default',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/**
 * Custom color icon - using the color prop
 */
export const CustomColor: Story = {
  args: {
    platform: 'instagram',
    color: '#ff2a6a',
    size: 'default',
  },
};

/**
 * Custom colors showcase - various icons with custom colors
 */
export const CustomColors: Story = {
  render: () => {
    const examples = [
      { platform: 'instagram' as SocialPlatform, color: '#ff2a6a' },
      { platform: 'facebook' as SocialPlatform, color: '#6366f1' },
      { platform: 'x' as SocialPlatform, color: '#22c55e' },
      { platform: 'github' as SocialPlatform, color: '#f59e0b' },
      { platform: 'google' as SocialPlatform, color: '#ec4899' },
      { platform: 'figma' as SocialPlatform, color: '#06b6d4' },
      { platform: 'heart' as SocialPlatform, color: '#ef4444' },
      { platform: 'heart-outline' as SocialPlatform, color: '#8b5cf6' },
    ];

    return (
      <div
        style={{
          display: 'flex',
          gap: 'var(--abcd-sys-spacing-med)',
          padding: 'var(--abcd-sys-spacing-med)',
        }}
      >
        {examples.map(({ platform, color }) => (
          <SocialIcon key={`${platform}-${color}`} platform={platform} color={color} />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Icons with custom colors using the `color` prop. This overrides the default brand colors.',
      },
    },
  },
};

/**
 * All platforms - Colored variant
 */
export const AllColored: Story = {
  render: () => {
    const platforms: SocialPlatform[] = [
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
    ];

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(13, 1fr)',
          gap: 'var(--abcd-sys-spacing-med)',
          padding: 'var(--abcd-sys-spacing-med)',
        }}
      >
        {platforms.map((platform) => (
          <SocialIcon key={platform} platform={platform} variant="colored" />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'All social media icons in their original brand colors.',
      },
    },
  },
};

/**
 * All platforms - White variant
 */
export const AllWhite: Story = {
  render: () => {
    const platforms: SocialPlatform[] = [
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
    ];

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(13, 1fr)',
          gap: 'var(--abcd-sys-spacing-med)',
          padding: 'var(--abcd-sys-spacing-med)',
        }}
      >
        {platforms.map((platform) => (
          <SocialIcon key={platform} platform={platform} variant="white" />
        ))}
      </div>
    );
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'All social media icons in white, suitable for dark backgrounds.',
      },
    },
  },
};

/**
 * Size comparison
 */
export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--abcd-sys-spacing-lg)',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <SocialIcon platform="instagram" variant="colored" size="small" />
        <p style={{ margin: 'var(--abcd-sys-spacing-sm) 0 0', fontSize: '12px' }}>
          Small
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SocialIcon platform="instagram" variant="colored" size="default" />
        <p style={{ margin: 'var(--abcd-sys-spacing-sm) 0 0', fontSize: '12px' }}>
          Default
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SocialIcon platform="instagram" variant="colored" size="large" />
        <p style={{ margin: 'var(--abcd-sys-spacing-sm) 0 0', fontSize: '12px' }}>
          Large
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons in three different sizes: small, default, and large.',
      },
    },
  },
};

/**
 * Heart icons - filled and outline
 */
export const HeartIcons: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--abcd-sys-spacing-med)',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <SocialIcon platform="heart" variant="colored" />
        <p style={{ margin: 'var(--abcd-sys-spacing-sm) 0 0', fontSize: '12px' }}>
          Heart (Filled)
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SocialIcon platform="heart-outline" variant="colored" />
        <p style={{ margin: 'var(--abcd-sys-spacing-sm) 0 0', fontSize: '12px' }}>
          Heart (Outline)
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Heart icons in filled and outline variants. Useful for like/favorite functionality.',
      },
    },
  },
};

/**
 * Both variants side by side for comparison
 */
export const VariantComparison: Story = {
  render: () => {
    const platforms: SocialPlatform[] = [
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
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--abcd-sys-spacing-med)' }}>
        {/* Colored row */}
        <div
          style={{
            display: 'flex',
            gap: 'var(--abcd-sys-spacing-med)',
            padding: 'var(--abcd-sys-spacing-med)',
            backgroundColor: 'var(--abcd-sys-color-light-default)',
            borderRadius: '8px',
          }}
        >
          {platforms.map((platform) => (
            <SocialIcon key={platform} platform={platform} variant="colored" />
          ))}
        </div>
        {/* White row */}
        <div
          style={{
            display: 'flex',
            gap: 'var(--abcd-sys-spacing-med)',
            padding: 'var(--abcd-sys-spacing-med)',
            backgroundColor: 'var(--abcd-sys-color-primary-default)',
            borderRadius: '8px',
          }}
        >
          {platforms.map((platform) => (
            <SocialIcon key={platform} platform={platform} variant="white" />
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of colored and white variants. Colored on light background, white on dark background.',
      },
    },
  },
};
