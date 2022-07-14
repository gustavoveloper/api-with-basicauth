const app = require('./app');

const { server } = require('./config');


app.listen(server.port, server.host, () => {
    console.clear();
    console.log(`Server listening at tcp://${server.host}:${server.port}...` + '\n\n')
})