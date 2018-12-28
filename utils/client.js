import { ClientFunction } from 'testcafe';

const getLocation = ClientFunction(() => document.location.href);

export async function checkLocation(t, url) {
        await t
            .expect(getLocation()).contains(url);
}
// Check page title helper
export async function checkTitle(t, elementTitle, expectedTitle ) {
    await t.expect( elementTitle.innerText ).eql( expectedTitle );
}