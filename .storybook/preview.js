/** @type { import('@storybook/react').Preview } */
import 'minireset.css';
import '../styles/global.css';
import '../styles/token.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
