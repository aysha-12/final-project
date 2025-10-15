import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    postcssPresetEnv({
      features: {
            'custom-properties': true,
        'custom-media-queries': true,
        'custom-selectors': true,
        // 'properties-and-values': true, 
        'logical-properties-and-values': true,
      },
      stage: 1,
    }),
  ],
};