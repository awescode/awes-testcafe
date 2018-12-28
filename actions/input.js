
export async function typeText(t, el, val) {
    await t
        .selectText(el)
        .pressKey('delete')
        .typeText(el, val)
        .expect(el.value).eql(val);
}

export async function checkboxClick(t, el, ch) {
    console.log(el);
    ch = (typeof ch === "undefined") ? false : true;

    if(ch === false) {
        await t
            .click(el)
            .expect(el.find('input').checked).ok();
    } else {
        await t
            .click(el)
            .expect(el.find('input').checked).notOk();
    }
}

export async function removeText(t, el) {
    await t
        .selectText(el)
        .pressKey('delete')
        .expect(el.value).eql('');
}

export async function typeMultiNumbers(t, el, val) {
    await t
        .selectText(el)
        .pressKey('delete')
        .typeText(el, val);
}