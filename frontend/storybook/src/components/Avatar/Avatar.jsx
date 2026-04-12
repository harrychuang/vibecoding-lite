import styles from './Avatar.module.css';
import { resolveStaticImportUrl } from '../../utils/resolveStaticImportUrl.js';
import { defaultAvatarSrc } from './avatarDefaultAsset.js';

function cx(...parts) {
  return parts.filter(Boolean).join(' ');
}

/**
 * 圓形頭像（Figma `avatar`，node 102:62）。預設尺寸與設計稿一致，由 `--comp-avatar-size-default` 驅動。
 *
 * @param {object} props
 * @param {string} [props.src] 圖片網址；未傳則使用 Figma 預設素材
 * @param {string} [props.alt] 圖片替代文字；裝飾性可傳空字串
 * @param {number | string} [props.size] 邊長（數字視為 px，或任意 CSS 長度字串）
 * @param {string} [props.className]
 */
export function Avatar({ src, alt = '', size, className, ...rest }) {
  const resolvedSrc = resolveStaticImportUrl(src ?? defaultAvatarSrc);
  const dim =
    size === undefined || size === null
      ? null
      : typeof size === 'number'
        ? `${size}px`
        : size;

  const rootStyle = dim ? { width: dim, height: dim } : undefined;

  return (
    <div
      className={cx(styles.root, !dim && styles.defaultSize, className)}
      style={rootStyle}
      {...rest}
    >
      <div className={styles.frame}>
        <img className={styles.image} src={resolvedSrc} alt={alt} draggable={false} />
      </div>
    </div>
  );
}
