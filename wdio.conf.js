// wdio.conf.js
exports.config = {
  // ... other configurations

  services: ['selenium-standalone'],
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--headless', '--disable-gpu'], // Run Chrome in headless mode
    },
  }],

  // ... other configurations
};

