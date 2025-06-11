const app = require("./src/app");

const PORT = 5100;

const server = app.listen(PORT, () => {
    console.log(`Server start with port ${PORT}`)
});

process.on('SIGINT', () => {
    server.close(() => console.log(`Exit server express`));
});