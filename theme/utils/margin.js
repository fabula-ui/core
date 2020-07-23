import getNumber from '../methods/misc/getNumber';

const marginUtils = params => {
    const { angularElement, framework, props } = params;
    const { m, mb, ml, mr, mt, mx, my } = props;

    return `
        ${(m !== null && m !== undefined) ? `margin: ${getNumber(m, 'rem')}!important;` : ''}
        ${(mb !== null && mb !== undefined) ? `margin-bottom: ${getNumber(mb, 'rem')}!important;` : ''}
        ${(ml !== null && ml !== undefined) ? `margin-left: ${getNumber(ml, 'rem')}!important;` : ''}
        ${(mr !== null && mr !== undefined) ? `margin-right: ${getNumber(mr, 'rem')}!important;` : ''}
        ${(mt !== null && mt !== undefined) ? `margin-top: ${getNumber(mt, 'rem')}!important;` : ''}
        ${(mx !== null && mx !== undefined) ? `margin-left: ${getNumber(mx, 'rem')}!important; margin-right: ${getNumber(mx, 'rem')}!important;` : ''}
        ${(my !== null && my !== undefined) ? `margin-bottom: ${getNumber(my, 'rem')}!important; margin-top: ${getNumber(my, 'rem')}!important;` : ''}
    `
}

export default marginUtils;