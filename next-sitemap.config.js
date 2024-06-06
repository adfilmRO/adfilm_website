/** @type {import('next-sitemap').IConfig} */
// next-sitemap.js
module.exports = {
    siteUrl: 'https://adfilm.ro',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: '/admin' },
      ],
    },
    additionalPaths: async (config) => [
      await config.transform(config, '/'),
      await config.transform(config, '/portofoliu/video'),
      await config.transform(config, '/portofoliu/podcast'),
      await config.transform(config, '/portofoliu/foto'),
      await config.transform(config, '/contact'),
    ],
  };