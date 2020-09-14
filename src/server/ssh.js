const client = require('ssh2').Client;

exports.ssh = {
    connect: (id, ip, pw, socket) => {
        let connectOption = {
            host: ip,
            username: id,
            port: 22,
            tryKeyboard: true,
            readyTimeout: 30 * 1000,
            debug: console.log,
            password: pw
        }

        return new Promise((resolve, reject) => {
            try {
                const conn = new client();
                conn.connect(connectOption);

                conn.on('ready', () => {
                    resolve(conn);
                })

                conn.on('keyboard-interactive', (name, instructions, lang, prompts, finish) => {
                })

                conn.on('error', err => {
                    console.log(err);
                })


            } catch (e) {
                console.log(e);
            }
        })
    },

    getShell: (client, size) => {
        return new Promise((resolve, reject) => {
            try {
                client.shell(size, (err, stream) => {
                    if (err) reject(err);
                    resolve(stream);
                })
            } catch (e) {
                console.log(e);
                reject(e);
            }
        })
    }
}