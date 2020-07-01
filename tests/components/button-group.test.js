describe('Button Group', () => {
    const port = process.env.PORT || '9009';

    afterAll(async() => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    // Flow
    it('flow', async () => {
        page.setViewport({ width: 260, height: 360 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button-group--flow`, { waitUntil: 'load', timeout: 10000 });

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    // Glued
    it('glued:general check', async () => {
        page.setViewport({ width: 340, height: 680 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button-group--glued`, { waitUntil: 'load', timeout: 10000 });

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('glued:focus', async () => {
        await page.waitFor(1000);

        const buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.click({ delay: 500 });
            await page.waitFor(200);

            screenshot = await page.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    // Spaced
    it('spaced', async () => {
        page.setViewport({ width: 380, height: 600 });

        await page.goto(`http://localhost:${port}/iframe.html?id=button-group--spaced`, { waitUntil: 'load', timeout: 10000 });

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });
});