// eslint-disable-next-line @typescript-eslint/no-var-requires
const cracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
}
