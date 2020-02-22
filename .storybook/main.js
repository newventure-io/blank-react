module.exports = {
  stories: ["../src/**/*.(stories|story).(mdx|tsx)"],
  presets: [
    "@storybook/preset-typescript",
    {
      name: "@storybook/addon-docs/preset",
      options: {
        sourceLoaderOptions: null,
      },
    },
  ],

  webpack: config => {
    config.node = {
      fs: "empty",
      net: "empty",
      tls: "empty",
    };

    console.log(config.module.rules);

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    });

    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader"
      ]
    });

    config.module.rules.push({
      test: /\.tsx?$/,
      loader: ["awesome-typescript-loader", "react-docgen-typescript-loader"],
    });

    config.module.rules.push({
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader",
    });

    return config;
  },
};
