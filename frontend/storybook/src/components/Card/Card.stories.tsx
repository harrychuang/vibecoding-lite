import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
      description: 'Card variant style',
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether the card has hover effect',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the card is clickable',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the card takes full width',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default card variant with subtle shadow
 */
export const Default: Story = {
  args: {
    variant: 'default',
    children: (
      <div style={{ padding: '8px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600 }}>Card Title</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          This is a default card with subtle shadow styling.
        </p>
      </div>
    ),
  },
};

/**
 * Outlined card variant with border
 */
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div style={{ padding: '8px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600 }}>Outlined Card</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          This card has a border instead of shadow.
        </p>
      </div>
    ),
  },
};

/**
 * Elevated card variant with prominent shadow
 */
export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div style={{ padding: '8px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600 }}>Elevated Card</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          This card has a more prominent shadow for emphasis.
        </p>
      </div>
    ),
  },
};

/**
 * Hoverable card with shadow effect on hover
 */
export const Hoverable: Story = {
  args: {
    variant: 'default',
    hoverable: true,
    children: (
      <div style={{ padding: '8px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600 }}>Hoverable Card</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          Hover over this card to see the shadow effect.
        </p>
      </div>
    ),
  },
};

/**
 * Clickable card with interaction feedback
 */
export const Clickable: Story = {
  args: {
    variant: 'default',
    clickable: true,
    hoverable: true,
    onClick: () => alert('Card clicked!'),
    children: (
      <div style={{ padding: '8px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600 }}>Clickable Card</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          Click this card to trigger an action.
        </p>
      </div>
    ),
  },
};

/**
 * Full width card
 */
export const FullWidth: Story = {
  args: {
    variant: 'outlined',
    fullWidth: true,
    children: (
      <div style={{ padding: '8px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600 }}>Full Width Card</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          This card takes the full width of its container.
        </p>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * All card variants displayed together
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '320px' }}>
      <Card variant="default">
        <div style={{ padding: '8px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600 }}>Default</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Subtle shadow styling</p>
        </div>
      </Card>
      <Card variant="outlined">
        <div style={{ padding: '8px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600 }}>Outlined</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Border instead of shadow</p>
        </div>
      </Card>
      <Card variant="elevated">
        <div style={{ padding: '8px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600 }}>Elevated</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Prominent shadow</p>
        </div>
      </Card>
      <Card variant="default" hoverable>
        <div style={{ padding: '8px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600 }}>Hoverable</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Hover for effect</p>
        </div>
      </Card>
    </div>
  ),
};

/**
 * Interactive card selection demo
 */
const CardSelectionDemo = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    { id: 1, title: 'Option 1', description: 'First selectable option' },
    { id: 2, title: 'Option 2', description: 'Second selectable option' },
    { id: 3, title: 'Option 3', description: 'Third selectable option' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      {items.map((item) => (
        <Card
          key={item.id}
          variant={selectedId === item.id ? 'elevated' : 'outlined'}
          clickable
          hoverable
          onClick={() => setSelectedId(item.id)}
        >
          <div style={{ padding: '8px' }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600 }}>
              {item.title}
              {selectedId === item.id && ' ✓'}
            </h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{item.description}</p>
          </div>
        </Card>
      ))}
      <p style={{ fontSize: '14px', color: '#666' }}>
        Selected: {selectedId ? `Option ${selectedId}` : 'None'}
      </p>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <CardSelectionDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive card selection - click cards to select them.',
      },
    },
  },
};

/**
 * Card with complex content
 */
export const WithComplexContent: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <img
          src="https://via.placeholder.com/280x140"
          alt="Placeholder"
          style={{ width: '100%', borderRadius: '4px', marginBottom: '16px' }}
        />
        <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: 600 }}>Featured Article</h3>
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666', lineHeight: 1.5 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span
            style={{
              padding: '4px 8px',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px',
              fontSize: '12px',
            }}
          >
            Design
          </span>
          <span
            style={{
              padding: '4px 8px',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px',
              fontSize: '12px',
            }}
          >
            UI/UX
          </span>
        </div>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};
