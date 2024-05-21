import VideoStandard from '../video.hbs';
import BrightCove from '../brightcove.hbs';
import Youtube from '../youtube.hbs';
import LimeLightVideo from '../limelightvideo.hbs';

export default {
    title: 'Core Components/Video',
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {},
};

const TemplateStandard = () => VideoStandard();
export const Standard = TemplateStandard.bind();
const TemplateBrightcove = () => BrightCove();
export const BrightCoveVideo = TemplateBrightcove.bind();
const TemplateYoutube = () => Youtube();
export const YoutubeVideo = TemplateYoutube.bind();
const TemplateLimeLight = () => LimeLightVideo();
export const LimeLight = TemplateLimeLight.bind();