import CardGroup from '../cardgroup.hbs';
import CardGroupTag from '../cardgroup-tag.hbs';

export default {
  title: 'Components/Card',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    text: {
      control: { type: 'text' },
    },
  },
};

const TemplateCardGroup = () => CardGroup();
export const Card = TemplateCardGroup.bind();

const TemplateCardGroupTag = () => CardGroupTag();
export const TagCard = TemplateCardGroupTag.bind();
