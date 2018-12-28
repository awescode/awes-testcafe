import {Selector} from "testcafe";

import at from "awes-testcafe";

export class Inputs {
    constructor (name, dafaulValue) {

        dafaulValue = dafaulValue || null;
        this.el = Selector('input[data-test="fb-input.'+name+'"]', { timeout: 700 });
        if (dafaulValue) {
            this.val = dafaulValue;
        } else {
            this.val = at.utils.fn.default.strEmail();
        }
    }
}

// export class multiInput {
//     constructor(name) {
//         this.el = Selector('[data-test="fb-input.'+name+'"]', { timeout: 700 });
//     }
// }


export class Checkbox {
    constructor(name) {
        this.el = Selector('label[data-test="fb-checkbox.'+name+'"]', { timeout: 700 });
    }
}

export class InputMultiNumber {
    constructor (id) {
        this.el = Selector('#'+id).child('input').nth(0);
    }
}






