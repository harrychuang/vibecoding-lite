/**
 * SVG/靜態檔 `import` 在各 bundler 下的形狀不同：
 * - Vite（Storybook）：多為 `string`
 * - Next/Turbopack：可能是 `string`、`{ default: string }`、`{ src: string }`、`{ default: { src: string } }` 等
 *
 * @param {unknown} mod
 * @param {number} [depth]
 * @returns {string}
 */
export function resolveStaticImportUrl(mod, depth = 0) {
  if (mod == null || depth > 8) return '';
  if (typeof mod === 'string') return mod;
  if (typeof mod === 'number') return String(mod);
  if (mod instanceof URL) return mod.href;
  if (typeof mod !== 'object') return '';

  // Next 靜態圖片模組常見形狀
  if (typeof mod.src === 'string') return mod.src;
  if (typeof mod.href === 'string') return mod.href;

  // ESM default（含巢狀）
  if ('default' in mod && mod.default != null && mod.default !== mod) {
    const inner = resolveStaticImportUrl(mod.default, depth + 1);
    if (inner !== '') return inner;
  }

  // 部分環境用 namespace / 其餘可枚舉字串欄位
  for (const key of Object.keys(mod)) {
    if (key === 'default') continue;
    const v = mod[key];
    if (typeof v === 'string' && (v.startsWith('/') || v.startsWith('http') || /\.[a-zA-Z0-9]+$/.test(v))) {
      return v;
    }
  }

  for (const v of Object.values(mod)) {
    if (v != null && typeof v === 'object' && v !== mod) {
      const s = resolveStaticImportUrl(v, depth + 1);
      if (s !== '') return s;
    }
  }

  return '';
}
