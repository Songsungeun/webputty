const client = require('ssh2').Client;

exports.ssh = {
    connect: (id, ip, socket) => {
        console.log(id);
        console.log(ip);
        let connectOption = {
            host: ip,
            username: id,
            port: 22,
            tryKeyboard: true,
            readyTimeout: 30 * 1000,
            debug: console.log
        }

        return new Promise((resolve, reject) => {
            try {
                const conn = new client();
                conn.connect(connectOption);

                conn.on('ready', () => {
                    resolve(conn);
                })

                conn.on('keyboard-interactive', (name, instructions, lang, prompts, finish) => {
                    console.log('keyboard=====================================');
                    console.log(prompts);
                })

                conn.on('error', err => {
                    console.log(err);
                })


            } catch (e) {
                console.log(e);
            }
        })
    }
}