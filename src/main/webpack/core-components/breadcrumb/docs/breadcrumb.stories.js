import BreadcrumbStandard from '../standard.hbs';

export default {
    title: 'Core Components/Breadcrumb',
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {},
};

const TemplateStandard = ({ label, ...args }) => BreadcrumbStandard();
export const Standard = TemplateStandard.bind();