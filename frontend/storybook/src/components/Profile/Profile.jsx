import styles from './Profile.module.css';
import { Avatar } from '../Avatar/Avatar.jsx';

function cx(...parts) {
  return parts.filter(Boolean).join(' ');
}

/**
 * 個人資料區塊（Figma `profile`，node 102:66）：圓形頭像 + 姓名 + 說明，垂直置中。
 * 頭像使用共用 `Avatar` 元件。
 *
 * @param {object} props
 * @param {string} [props.name] 主標題（視覺為 uppercase，與 Figma 一致）
 * @param {string} [props.info] 次要說明
 * @param {string} [props.avatarSrc] 傳入 {@link Avatar}
 * @param {string} [props.avatarAlt]
 * @param {number | string} [props.avatarSize]
 * @param {string} [props.className]
 */
export function Profile({
  name = 'User name',
  info = 'User info',
  avatarSrc,
  avatarAlt = '',
  avatarSize,
  className,
  ...rest
}) {
  return (
    <section className={cx(styles.root, className)} {...rest}>
      <Avatar className={styles.avatarSlot} src={avatarSrc} alt={avatarAlt} size={avatarSize} />
      <div className={styles.textBlock}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.info}>{info}</p>
      </div>
    </section>
  );
}
