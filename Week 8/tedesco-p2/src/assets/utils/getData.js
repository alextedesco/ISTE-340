// this method is to go get our JSON data and return it

const proxyServer = "https://people.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/";
// const solaceProxyServer = "http://solace.ist.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/";

// endpoint = endpoint of the api I want to hit
// example: "/about/"
async function getData (endpoint) {
    const result = await fetch (`${proxyServer}${endpoint}`);

    // Alternate way to do it
    // const result = await fetch (proxyServer.endpoint);

    return await result.json ();
}

export default getData;