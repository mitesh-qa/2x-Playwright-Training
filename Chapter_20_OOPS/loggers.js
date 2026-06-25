export default function log(message) {
    console.log("[LOG] - default " + message);
}

function log2(message) {
    console.log("[LOGS] " + message);
}

module.exports = {
    log,
    log2
}