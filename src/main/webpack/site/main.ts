/* eslint-disable */
import A11y from './js/a11y.js';

// Javascript or Typescript
import '../core-components/tabs/tabs.js';
import '../core-components/accordion/accordion.js';
import '../core-components/accordion/polyfills.js';
import '../components/header/header.js';
import '../components/cardgroup/cardgroup.js';
import { Initializer } from '../framework/initializer';
import './main.scss';
import TabsCustom from '../components/tabs-custom/tabs-custom.js';
import MarketoForm from '../components/marketo-form/marketo-form.js';
import Video from '../core-components/embed/video.js';

new Initializer();
new A11y();
new TabsCustom();
new MarketoForm();
new Video();
