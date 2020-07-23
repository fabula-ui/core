import getNumber from '../methods/misc/getNumber';

const marginUtils = params => {
    const { angularElement, framework, props } = params;
    const { m, mb, ml, mr, mt, mx, my } = props;

    return `
        ${(m !== null && m !== undefined) ? `margin: ${getNumber(m, 'rem')};` : ''}
        ${(mb !== null && mb !== undefined) ? `margin-bottom: ${getNumber(mb, 'rem')};` : ''}
        ${(ml !== null && ml !== undefined) ? `margin-left: ${getNumber(ml, 'rem')};` : ''}
        ${(mr !== null && mr !== undefined) ? `margin-right: ${getNumber(mr, 'rem')};` : ''}
        ${(mt !== null && mt !== undefined) ? `margin-top: ${getNumber(mt, 'rem')};` : ''}
        ${(mx !== null && mx !== undefined) ? `margin-left: ${getNumber(mx, 'rem')}; margin-right: ${getNumber(mx, 'rem')};` : ''}
        ${(my !== null && my !== undefined) ? `margin-bottom: ${getNumber(my, 'rem')}; margin-top: ${getNumber(my, 'rem')};` : ''}
    `
}

export default marginUtils;