import getNumber from '../methods/misc/getNumber';

const marginUtils = params => {
    const { angularElement, framework, props } = params;
    const { m, mb, ml, mr, mt, mx, my } = props;

    return `
        ${m ? `margin: ${getNumber(m, 'rem')};` : ''}
        ${mb ? `margin-bottom: ${getNumber(mb, 'rem')};` : ''}
        ${ml ? `margin-left: ${getNumber(ml, 'rem')};` : ''}
        ${mr ? `margin-right: ${getNumber(mr, 'rem')};` : ''}
        ${mt ? `margin-top: ${getNumber(mt, 'rem')};` : ''}
        ${mx ? `margin-left: ${getNumber(mx, 'rem')}; margin-right: ${getNumber(mx, 'rem')};` : ''}
        ${my ? `margin-bottom: ${getNumber(my, 'rem')}; margin-top: ${getNumber(my, 'rem')};` : ''}
    `
}

export default marginUtils;