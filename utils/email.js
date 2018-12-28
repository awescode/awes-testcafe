import https from 'https';

export const getEmail = function(config, userEmail) {
    // return new pending promise
    return new Promise((resolve, reject) => {
        // select http or https module, depending on reqested url

        const options = {
            hostname: 'mailtrap.io',
            port:     443,
            path:     '/api/v1/inboxes/' + config.mailtrap_inbox_id + '/messages?search=' + encodeURI(userEmail),
            method:   'GET',
            headers: { "Api-Token": config.mailtrap_api_token }
        };

        const request = https.get(options, (response) => {
            // handle http errors
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(new Error('Failed to load page, status code: ' + response.statusCode));
            }
            // temporary data holder
            const body = [];
            // on every content chunk, push it to the data array
            response.on('data', (chunk) => body.push(chunk));
            // we are done, resolve promise with those joined chunks
            response.on('end', () => resolve(JSON.parse(body.join(''))[0]));
        });
        // handle connection errors of the request
        request.on('error', (err) => reject(err))
    })
};