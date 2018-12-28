export default {
    str(ln) {
        ln = ln || 8;
        let name = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        for (let i = 0; i < ln; i++) {
            name += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return name;
    },
    strEmail() {
        return this.str() + '@test.net';
    },

    strUrl() {
        return "https://" + this.str() + '.com';
    }
}