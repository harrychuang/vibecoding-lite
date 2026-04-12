import { SocialIcon, SOCIAL_ICON_PLATFORMS_ROW1, SOCIAL_ICON_PLATFORMS_ROW2 } from './SocialIcon.jsx';
import galleryStyles from './SocialIcon.stories.module.css';

const platforms = [...SOCIAL_ICON_PLATFORMS_ROW1, ...SOCIAL_ICON_PLATFORMS_ROW2];

/** @type {import('@storybook/react').Meta} */
const meta = {
  title: 'Components/SocialIcon',
  component: SocialIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    platform: {
      control: 'select',
      options: platforms,
    },
    variant: {
      control: 'inline-radio',
      options: ['original', 'negative'],
    },
    size: {
      control: 'number',
    },
    'aria-label': { control: 'text' },
    title: { control: 'text' },
  },
  args: {
    platform: 'Facebook',
    variant: 'original',
    size: undefined,
    'aria-label': 'Facebook',
    title: undefined,
  },
};

export default meta;

/** @type {import('@storybook/react').StoryObj} */
export const Playground = {
  render: (args) => {
    const { size, ...rest } = args;
    const n = size === '' || size === undefined || Number.isNaN(Number(size)) ? undefined : Number(size);
    return <SocialIcon {...rest} size={n} />;
  },
};

/** 對齊 Figma：11 欄 × 4 列（兩列 Original、兩列 Negative） */
export const Gallery = {
  render: () => (
    <div className={galleryStyles.board}>
      <div className={galleryStyles.sectionOriginal}>
        <div className={galleryStyles.grid}>
          {SOCIAL_ICON_PLATFORMS_ROW1.map((platform) => (
            <div key={`o-r1-${platform}`} className={galleryStyles.cell}>
              <SocialIcon platform={platform} variant="original" aria-label={platform} />
            </div>
          ))}
          {SOCIAL_ICON_PLATFORMS_ROW2.map((platform) => (
            <div key={`o-r2-${platform}`} className={galleryStyles.cell}>
              <SocialIcon platform={platform} variant="original" aria-label={platform} />
            </div>
          ))}
        </div>
      </div>
      <div className={galleryStyles.sectionNegative}>
        <div className={galleryStyles.grid}>
          {SOCIAL_ICON_PLATFORMS_ROW1.map((platform) => (
            <div key={`n-r1-${platform}`} className={galleryStyles.cell}>
              <SocialIcon platform={platform} variant="negative" aria-label={platform} />
            </div>
          ))}
          {SOCIAL_ICON_PLATFORMS_ROW2.map((platform) => (
            <div key={`n-r2-${platform}`} className={galleryStyles.cell}>
              <SocialIcon platform={platform} variant="negative" aria-label={platform} />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
