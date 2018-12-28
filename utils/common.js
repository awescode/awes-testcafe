import minimist from 'minimist';

let fullUrl = (subDomain) => (domain) =>  domain.replace( /{subDomain}/g, subDomain || 'www' );

export const getDomain = (subDomain, path, config) => {

    path = path || '/';
    let url = fullUrl(subDomain);
    const args = minimist(process.argv.slice(2));

    let environment = 'local';
    if (typeof args.env !== 'undefined') {
        environment = args.env;
    }
    if (environment === 'local') {
        return url(config.baseUrlLocal) + path;
    }
    if (environment === 'stage') {
        return url(config.baseUrlStage) + path;
    }
    return '';
};