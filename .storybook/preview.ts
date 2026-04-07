import {
  componentWrapperDecorator,
  moduleMetadata,
  Preview,
} from '@storybook/angular';
import { UGlobalStylesComponent } from '@urfu-ui/u-core';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [UGlobalStylesComponent],
    }),
    componentWrapperDecorator((story) => `<u-global-styles/>${story}`),
  ],
};

export default preview;
