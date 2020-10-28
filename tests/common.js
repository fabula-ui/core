import { testConfig } from './config';

export const elementScreenshot = async (params) => {
    const { boundingBox, context, element, index } = params;
    const { height, width, x, y } = boundingBox;
    const { path } = testConfig;

    return await element.screenshot({
        path: `${path}/${context}${index || ''}.png`,
        clip: {
            height: height + 20,
            x: (x - 10) < 0 ? 0 : x - 10,
            y: (y - 10) < 0 ? 0 : y - 10,
            width: width + 20
        }
    });
}