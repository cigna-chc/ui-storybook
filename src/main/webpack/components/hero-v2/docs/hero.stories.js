import '../../../site/main.scss';
import HeroOrange from '../orange-theme.hbs';
import HeroGreen from '../green-theme.hbs';
import HeroBlue from '../blue-theme.hbs';

export default {
  title: 'Components/Hero V2',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    text: {
      control: { type: 'text' },
    },
  },
};

const TemplateHeroOrange = () => HeroOrange();
export const Orange = TemplateHeroOrange.bind();

const TemplateHeroGreen = () => HeroGreen();
export const Green = TemplateHeroGreen.bind();

const TemplateHeroBlue = () => HeroBlue();
export const Blue = TemplateHeroBlue.bind();
