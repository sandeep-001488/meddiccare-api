// module.exports = [
//   "strapi::errors",
//   {
//     name: "strapi::security",
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           "connect-src": ["'self'", "https:"],
//           "img-src": [
//             "'self'",
//             "data:",
//             "blob:",
//             "market-assets.strapi.io",
//             "res.cloudinary.com",
//           ],
//           "media-src": [
//             "'self'",
//             "data:",
//             "blob:",
//             "market-assets.strapi.io",
//             "res.cloudinary.com",
//           ],
//           upgradeInsecureRequests: null,
//         },
//       },
//     },
//   },
//   "strapi::cors",
//   "strapi::query",
//   "strapi::body",
//   "strapi::favicon",
//   "strapi::public",
// ];
module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "res.cloudinary.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "res.cloudinary.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: ["https://mediccare-aquickmedappointment.vercel.app"],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      headers: "*",
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];
