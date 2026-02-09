import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownOption } from './Dropdown';

const sampleOptions: DropdownOption[] = [
  { value: 'apple', label: '蘋果' },
  { value: 'banana', label: '香蕉' },
  { value: 'cherry', label: '櫻桃' },
  { value: 'date', label: '椰棗' },
  { value: 'elderberry', label: '接骨木莓' },
  { value: 'fig', label: '無花果' },
  { value: 'grape', label: '葡萄' },
];

const countryOptions: DropdownOption[] = [
  { value: 'tw', label: '台灣' },
  { value: 'jp', label: '日本' },
  { value: 'kr', label: '韓國' },
  { value: 'us', label: '美國' },
  { value: 'uk', label: '英國' },
  { value: 'de', label: '德國' },
  { value: 'fr', label: '法國' },
];

const optionsWithDisabled: DropdownOption[] = [
  { value: 'option1', label: '選項一' },
  { value: 'option2', label: '選項二' },
  { value: 'option3', label: '選項三 (已停用)', disabled: true },
  { value: 'option4', label: '選項四' },
  { value: 'option5', label: '選項五 (已停用)', disabled: true },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: 'Array of options to display',
    },
    value: {
      control: 'text',
      description: 'Currently selected value(s)',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no selection',
    },
    label: {
      control: 'text',
      description: 'Label text displayed above the dropdown',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the dropdown',
    },
    error: {
      control: 'boolean',
      description: 'Error state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple selection',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width mode',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default dropdown
 */
export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: '請選擇水果',
  },
};

/**
 * Dropdown with label
 */
export const WithLabel: Story = {
  args: {
    options: sampleOptions,
    label: '選擇水果',
    placeholder: '請選擇',
  },
};

/**
 * Dropdown with helper text
 */
export const WithHelperText: Story = {
  args: {
    options: sampleOptions,
    label: '選擇水果',
    helperText: '請選擇您喜歡的水果',
    placeholder: '請選擇',
  },
};

/**
 * Dropdown with pre-selected value
 */
export const WithValue: Story = {
  args: {
    options: sampleOptions,
    label: '選擇水果',
    value: 'banana',
  },
};

/**
 * Dropdown with error state
 */
export const WithError: Story = {
  args: {
    options: sampleOptions,
    label: '選擇水果',
    error: true,
    errorMessage: '此欄位為必填',
    placeholder: '請選擇',
  },
};

/**
 * Disabled dropdown
 */
export const Disabled: Story = {
  args: {
    options: sampleOptions,
    label: '選擇水果',
    value: 'apple',
    disabled: true,
  },
};

/**
 * Dropdown with disabled options
 */
export const WithDisabledOptions: Story = {
  args: {
    options: optionsWithDisabled,
    label: '選擇選項',
    placeholder: '請選擇',
  },
};

/**
 * Interactive single select dropdown
 */
const SingleSelectDemo = () => {
  const [value, setValue] = useState<string>('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Dropdown
        options={countryOptions}
        value={value}
        label="選擇國家"
        helperText="請選擇您的國家"
        onChange={(v) => setValue(v as string)}
      />
      <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
        已選擇: {value || '(無)'}
      </p>
    </div>
  );
};

export const SingleSelectInteractive: Story = {
  render: () => <SingleSelectDemo />,
  parameters: {
    docs: {
      description: {
        story: '互動式單選下拉選單',
      },
    },
  },
};

/**
 * Multiple selection dropdown
 */
const MultiSelectDemo = () => {
  const [values, setValues] = useState<string[]>(['tw', 'jp']);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Dropdown
        options={countryOptions}
        value={values}
        multiple
        label="選擇國家"
        helperText="可選擇多個國家"
        onChange={(v) => setValues(v as string[])}
      />
      <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
        已選擇: {values.length > 0 ? values.join(', ') : '(無)'}
      </p>
    </div>
  );
};

export const MultipleSelect: Story = {
  render: () => <MultiSelectDemo />,
  parameters: {
    docs: {
      description: {
        story: '多選模式 - 可選擇多個選項',
      },
    },
  },
};

/**
 * Full width dropdown
 */
export const FullWidth: Story = {
  args: {
    options: sampleOptions,
    label: '選擇水果',
    placeholder: '請選擇',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * All states comparison
 */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <Dropdown
        options={sampleOptions}
        label="預設狀態"
        placeholder="請選擇"
      />
      <Dropdown
        options={sampleOptions}
        label="已選擇"
        value="banana"
      />
      <Dropdown
        options={sampleOptions}
        label="錯誤狀態"
        error
        errorMessage="此欄位為必填"
        placeholder="請選擇"
      />
      <Dropdown
        options={sampleOptions}
        label="停用狀態"
        value="apple"
        disabled
      />
    </div>
  ),
};

/**
 * Form example with multiple dropdowns
 */
const FormDemo = () => {
  const [country, setCountry] = useState<string>('');
  const [fruit, setFruit] = useState<string>('');
  const [interests, setInterests] = useState<string[]>([]);

  const interestOptions: DropdownOption[] = [
    { value: 'music', label: '音樂' },
    { value: 'sports', label: '運動' },
    { value: 'movies', label: '電影' },
    { value: 'reading', label: '閱讀' },
    { value: 'travel', label: '旅遊' },
    { value: 'cooking', label: '烹飪' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <Dropdown
        options={countryOptions}
        value={country}
        label="國家"
        placeholder="請選擇國家"
        onChange={(v) => setCountry(v as string)}
      />
      <Dropdown
        options={sampleOptions}
        value={fruit}
        label="喜歡的水果"
        placeholder="請選擇水果"
        onChange={(v) => setFruit(v as string)}
      />
      <Dropdown
        options={interestOptions}
        value={interests}
        multiple
        label="興趣愛好"
        helperText="可選擇多個"
        placeholder="請選擇興趣"
        onChange={(v) => setInterests(v as string[])}
      />
      <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
        <p style={{ margin: '0 0 8px', fontWeight: 500 }}>表單資料:</p>
        <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
          國家: {country || '(未選)'}<br />
          水果: {fruit || '(未選)'}<br />
          興趣: {interests.length > 0 ? interests.join(', ') : '(未選)'}
        </p>
      </div>
    </div>
  );
};

export const FormExample: Story = {
  render: () => <FormDemo />,
  parameters: {
    docs: {
      description: {
        story: '表單範例 - 結合多個下拉選單',
      },
    },
  },
};
