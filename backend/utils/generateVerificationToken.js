// Creates a token by random that has 6 digits

export const generateVerificationToken = () =>
  Math.floor(100000 + Math.random() * 900000).toString();
