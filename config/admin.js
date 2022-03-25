module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f632888c35bf9f0b5f610bd02aeab086'),
  },
});
