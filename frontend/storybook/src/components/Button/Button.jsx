import styles from './Button.module.css';
import {
  SocialIcon,
  SOCIAL_ICON_PLATFORMS_ROW1,
  SOCIAL_ICON_PLATFORMS_ROW2,
} from '../SocialIcon/SocialIcon.jsx';
import { heartOutline, heartFilled } from './likeIconAssets.js';

function cx(...parts) {
  return parts.filter(Boolean).join(' ');
}

/** 與 Figma 按鈕內圖示框一致（24×24） */
const BUTTON_ICON_SIZE = 24;

/** 愛心圖示（非 SocialIcon 平台） */
export const BUTTON_ICON_HEART = 'Heart';

/** 可選的社群圖示平台（與 SocialIcon 一致） */
export const BUTTON_SOCIAL_PLATFORMS = [...SOCIAL_ICON_PLATFORMS_ROW1, ...SOCIAL_ICON_PLATFORMS_ROW2];

/** Storybook / controls 用：全部圖示選項 */
export const BUTTON_ICON_OPTIONS = [...BUTTON_SOCIAL_PLATFORMS, BUTTON_ICON_HEART];

/**
 * @typedef {'default' | 'light' | 'text' | 'like'} ButtonVariant
 */

/**
 * 未指定 `icon` 時依按鈕變體的預設（對齊原 Figma）
 * @param {ButtonVariant} v
 */
function defaultIconForVariant(v) {
  switch (v) {
    case 'default':
    case 'light':
      return 'Instagram';
    case 'text':
      return 'Apple';
    case 'like':
      return BUTTON_ICON_HEART;
    default:
      return 'Instagram';
  }
}

/**
 * SocialIcon 的 original / negative：未指定 `iconVariant` 時，solid 黑底用 negative，其餘用 original。
 * @param {ButtonVariant} buttonVariant
 * @param {'original' | 'negative' | undefined} iconVariantProp
 */
function resolvedSocialIconVariant(buttonVariant, iconVariantProp) {
  if (iconVariantProp) return iconVariantProp;
  return buttonVariant === 'default' ? 'negative' : 'original';
}

/**
 * Figma `Button`（node 103:116）。視覺變體使用 `variant`（對應 Figma 的 `type`），以避免與原生 button 的 `type`（submit 等）衝突。
 * 圖示以 `icon` 指定（預設依 `variant`）；`Heart` 使用本地素材，其餘為 `SocialIcon`。
 *
 * @param {object} props
 * @param {ButtonVariant} [props.variant]
 * @param {(typeof BUTTON_SOCIAL_PLATFORMS)[number] | typeof BUTTON_ICON_HEART} [props.icon] 圖示；預設依 variant
 * @param {'original' | 'negative'} [props.iconVariant] 僅適用 SocialIcon；未傳時依按鈕變體推斷
 * @param {boolean} [props.active] like 或 Heart 時是否為 active（愛心填滿）；like 變體時亦影響文字色
 * @param {boolean} [props.actived] 與 `active` 相同，對齊 Figma 拼字
 * @param {string} [props.label]
 * @param {boolean} [props.showIcon]
 * @param {boolean} [props.disabled]
 * @param {string} [props.className]
 */
export function Button({
  variant = 'default',
  icon: iconProp,
  iconVariant: iconVariantProp,
  active = false,
  actived,
  label = 'label',
  showIcon = true,
  disabled = false,
  className,
  type: nativeType = 'button',
  ...rest
}) {
  const likeOn = active || actived || false;
  const isSolid = variant === 'default' || variant === 'light';
  const variantClass =
    variant === 'default'
      ? styles.variantDefault
      : variant === 'light'
        ? styles.variantLight
        : styles.variantGhost;
  const innerClass = cx(styles.inner, isSolid ? styles.innerSolid : styles.innerGhost);
  const likeActiveClass = variant === 'like' && likeOn ? styles.likeActive : '';

  const resolvedIcon = iconProp ?? defaultIconForVariant(variant);
  const isHeart = resolvedIcon === BUTTON_ICON_HEART;
  const socialVariant = resolvedSocialIconVariant(variant, iconVariantProp);

  return (
    <button
      type={nativeType}
      disabled={disabled}
      className={cx(styles.button, variantClass, likeActiveClass, className)}
      {...rest}
    >
      <span className={innerClass}>
        {showIcon && isHeart && <IconHeart filled={likeOn} />}
        {showIcon && !isHeart && (
          <SocialIcon
            className={styles.buttonIconSlot}
            platform={resolvedIcon}
            variant={socialVariant}
            size={BUTTON_ICON_SIZE}
          />
        )}
        <span className={styles.label}>{label}</span>
      </span>
    </button>
  );
}

function IconHeart({ filled }) {
  return (
    <span className={styles.likeIconWrap} aria-hidden>
      <span className={styles.layer} style={{ inset: '12.5% 8.33% 11.04% 8.33%' }}>
        <img alt="" className={styles.img} src={filled ? heartFilled : heartOutline} draggable={false} />
      </span>
    </span>
  );
}
