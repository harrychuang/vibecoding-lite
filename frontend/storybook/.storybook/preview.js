import '../src/styles/tokens.css';

/** @type {import('@storybook/react-vite').Preview} */
const preview = {
  // 全域啟用 Autodocs：每個 CSF 檔在 `export default` 有 `component` 時會自動產生 Docs 分頁
  tags: ['autodocs'],
  parameters: {
    docs: {
      toc: true,
    },
    controls: {
      sort: 'requiredFirst',
    },
  },
};

export default preview;
