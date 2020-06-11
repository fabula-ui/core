describe('Avatar', () => {
    const port = process.env.PORT || '9009';
    beforeAll(async () => {
        jest.setTimeout(100000);
        page.setViewport({ width: 1920, height: 1080 });
    });

    it('adapt color', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--adapt-color`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('color', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--color`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('custom icon', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--custom-icon`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('rounded', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--rounded`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('show initials', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--show-initials`, { waitUntil: 'load', timeout: 10000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('size', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--size`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('external badge', async () => {
        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--external-badge`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(5000);

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });
});