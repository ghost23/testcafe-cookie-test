import { Selector, ClientFunction } from "testcafe";

fixture `Test cookies`
    .page `http://localhost:8080/index.html`;

const getCookie = ClientFunction(() => document.cookie);

test(`expect a deleted cookie to be gone`, async (t) => {

    const loginButton = Selector("#login");
    const logoutButton = Selector("#logout");

    await t.expect(await getCookie()).eql("");
    await t.click(loginButton);
    await t.expect(await getCookie()).eql("MY_COOKIE=Hello");
    await t.click(logoutButton);
    await t.expect(await getCookie()).eql("");
})