describe('Avatar', () => {
    const port = process.env.PORT || '9009';
    
    afterAll(async() => {
        await page.waitFor(1000);
    });

    beforeAll(async () => {
        jest.setTimeout(100000);
    });

    it('adapt color', async () => {
        page.setViewport({ width: 700, height: 90 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--adapt-color`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(1000);
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('color', async () => {
        page.setViewport({ width: 700, height: 90 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--color`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(1000);

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('custom icon', async () => {
        page.setViewport({ width: 150, height: 90 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--custom-icon`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(1000);
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('rounded', async () => {
        page.setViewport({ width: 700, height: 90 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--rounded`, { waitUntil: 'load', timeout: 10000 });

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('show initials', async () => {
        page.setViewport({ width: 700, height: 150 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--show-initials`, { waitUntil: 'load', timeout: 10000 });
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('size', async () => {
        page.setViewport({ width: 400, height: 200 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--size`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(2000);
        
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });

    it('external badge', async () => {
        page.setViewport({ width: 630, height: 660 });

        await page.goto(`http://localhost:${port}/iframe.html?id=avatar--external-badge`, { waitUntil: 'load', timeout: 10000 });
        await page.waitFor(5000);

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent'
        });
    });
});