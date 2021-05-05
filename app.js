const http = require("http");

const hostname = "127.0.0.1";
const port = 5500;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World!\n");
});

server.listen(port, hostname, () => {
    console.log("working");
    console.log(`Server running at http://${hostname}:${port}/`);
});

const okta = require("@okta/okta-sdk-nodejs");

const client = new okta.Client({
    orgUrl: "https://dev-526462.okta.com/",
    token: "001MhhCrByQ1P2Tnt3PWk6sFOSPrZh378xsT3mFgRo" // Obtained from Developer Dashboard
});

console.log(client);

const orgUsersCollection = client.listUsers();

orgUsersCollection
    .each(user => {
        console.log(user);
    })
    .then(() => console.log("All users have been listed"));