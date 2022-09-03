module.exports = {
  apps: [
    {
      name: 'dubsquared.com',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      node_args: '-r dotenv/config',
    },
  ],
}
