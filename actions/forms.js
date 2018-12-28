import * as forms from '../elements/forms'
import * as inputAction from "./input";
import support from "../utils/fn";

export async function typeInsert(type) {
    
    switch(type) {
        case 'email':
            return support.strEmail();
            break;
        case 'fax':
        case 'phone':
            return '+380687788732'; // todo get phone
            break;
        case 'url':
            return support.strUrl();
            break;
        default:
            return support.str();
            break;
        
    }
} 



export async function elementAction(t, type, elem) {
    
    let value = typeInsert(type);
    let field;

    switch(type) {
        case "email":
            field = new forms.Inputs(elem);
            await inputAction.typeText(t, field.el, field.val);
            break;
        case "phone":
            field = new forms.Inputs(elem, value);
            await inputAction.typeText(t, field.el, field.val);
            break;
        case "input":
            field = new forms.Inputs(elem);
            await inputAction.typeText(t, field.el, field.val);
            break;
        case "url":
            field = new forms.Inputs(elem, value);
            await inputAction.typeText(t, field.el, field.val);
            break;
        case "checkbox":
            field = new forms.Checkbox(elem, true);
            await inputAction.checkboxClick(t, field.el);
            break;
    }

}

export async function formInsert(t, data) {
    for(let i = 0; i < data.length; i++) {  
        let type = (typeof data[i].type !== "undefined") ? data[i].type : 'input';
        elementAction(t, type, data[i].element);
    }
}


