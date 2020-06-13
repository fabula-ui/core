describe('Button Group', () => {
    const port = process.env.PORT || '9009';

    beforeAll(async () => {
        jest.setTimeout(100000);
        page.setViewport({ width: 400, height: 900 });
    });

    // Flow
    it('flow', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=buttongroup--flow`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(1000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    // Glued
    it('glued:general check', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=buttongroup--glued`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(1000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('glued:focus', async () => {
        const buttons = await page.$$('.fab-button');

        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            let screenshot;

            await button.click({ delay: 500 });

            screenshot = await page.screenshot();

            expect(screenshot).toMatchImageSnapshot();
        }
    });

    // Spaced
    it('spaced', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=buttongroup--spaced`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(1000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });
});