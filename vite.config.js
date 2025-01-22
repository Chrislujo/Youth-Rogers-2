export default {
  define: {
    "process.env.GOOGLE_SHEETS_API_KEY": JSON.stringify(
      process.env.GOOGLE_SHEETS_API_KEY
    ),
  },
};
