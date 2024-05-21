
import AccordionStandard  from '../standard.hbs';

export default {
  title: 'Core Components/Accordion',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {},
};

const TemplateStandard = ({ label, ...args }) => AccordionStandard();
export const Standard = TemplateStandard.bind();