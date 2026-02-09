import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined'],
      description: 'Input variant style',
    },
    label: {
      control: 'text',
      description: 'Label text displayed above the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the input',
    },
    error: {
      control: 'boolean',
      description: 'Error state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input takes full width',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Input type',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default input variant with subtle border
 */
export const Default: Story = {
  args: {
    variant: 'default',
    placeholder: 'Enter text...',
  },
};

/**
 * Input with label
 */
export const WithLabel: Story = {
  args: {
    variant: 'default',
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

/**
 * Outlined input variant with more prominent border
 */
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Username',
    placeholder: 'Enter username',
  },
};

/**
 * Input with helper text
 */
export const WithHelperText: Story = {
  args: {
    variant: 'default',
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    helperText: 'Must be at least 8 characters',
  },
};

/**
 * Input in error state
 */
export const Error: Story = {
  args: {
    variant: 'default',
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    error: true,
    errorMessage: 'Please enter a valid email address',
    defaultValue: 'invalid-email',
  },
};

/**
 * Disabled input
 */
export const Disabled: Story = {
  args: {
    variant: 'default',
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true,
  },
};

/**
 * Full width input
 */
export const FullWidth: Story = {
  args: {
    variant: 'default',
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * All input variants displayed together
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <Input variant="default" label="Default" placeholder="Default variant" />
      <Input variant="outlined" label="Outlined" placeholder="Outlined variant" />
      <Input
        variant="default"
        label="With Helper"
        placeholder="Enter text"
        helperText="This is helper text"
      />
      <Input
        variant="default"
        label="Error State"
        placeholder="Enter text"
        error
        errorMessage="This field has an error"
        defaultValue="Invalid value"
      />
      <Input variant="default" label="Disabled" placeholder="Cannot edit" disabled />
    </div>
  ),
};

/**
 * Interactive controlled input demo
 */
const ControlledInputDemo = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setError(newValue.length > 0 && newValue.length < 3);
  };

  return (
    <div style={{ width: '300px' }}>
      <Input
        label="Username"
        placeholder="Enter username"
        value={value}
        onChange={handleChange}
        error={error}
        errorMessage={error ? 'Username must be at least 3 characters' : undefined}
        helperText={!error ? 'Enter at least 3 characters' : undefined}
      />
      <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
        Current value: {value || '(empty)'}
      </p>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledInputDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive controlled input with validation - shows error when less than 3 characters.',
      },
    },
  },
};
