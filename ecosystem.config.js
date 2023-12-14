module.exports = {
  apps: [
    {
      name: 'api-iot-nestjs',
      script: 'dist/main.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000, // Change this to your desired port
      },
    },
  ],
};
