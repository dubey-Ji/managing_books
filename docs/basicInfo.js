module.exports = {
  definition: {
    openapi: "3.0.3", // present supported openapi version
    info: {
      title: "Book Manging API", // short title.
      description: "A simple book manging API", //  desc.
      version: "1.0.0", // version number
      contact: {
        name: "Ashutosh Dubey", // your name
        email: "ashutoshbkd@gmail.com", // your email
      },
    },
    servers: [
      {
        url: 'http://localhost:8000/api',
      }
    ]
  },
};
