import * as inputAction from "./input";

export async function writeData(t, object, options) {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            let fields = object[key];
            for (const type in fields) {
                if (fields.hasOwnProperty(type)) {
                    let input = fields[type];
                    switch (type) {
                        case "email":
                        case "password":
                        case "text":
                            await inputAction.typeText(t, input.el, input.val);
                            break;
                        case "multinumbers":
                            let code = options.code || null;
                            await inputAction.typeMultiNumbers(t, input.el, code);
                            break;
                    }
                }
            }
        }
    }
}

export async function  sendData(t, object) {
    await t
        .click( object );
}