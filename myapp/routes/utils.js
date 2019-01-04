const utils = {
    success: (msg) => {
        return {
            status: true,
            msg: msg
        }
    },
    validata: (v, msg) => {
        if (v === '' || v === undefined || v === null) {
            return {
                status: false,
                msg: msg
            }
        } else {
            return {
                status: true
            }
        }
    },
    error: (msg) => {
        return {
            status: false,
            msg: msg
        }
    }
}

module.exports = utils;