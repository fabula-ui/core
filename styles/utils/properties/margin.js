import getNumber from '../../methods/misc/getNumber';

const marginUtils = params => {
    const { props } = params;
    const { m, mb, ml, mr, mt, mx, my } = props;

    return `
    & {
        ${m != null ? `margin: ${getNumber(m, 'rem')}!important;` : ''}
        ${mb != null ? `margin-bottom: ${getNumber(mb, 'rem')}!important;` : ''}
        ${ml != null ? `margin-left: ${getNumber(ml, 'rem')}!important;` : ''}
        ${mr != null ? `margin-right: ${getNumber(mr, 'rem')}!important;` : ''}
        ${mt != null ? `margin-top: ${getNumber(mt, 'rem')}!important;` : ''}
        ${mx != null ? `margin-left: ${getNumber(mx, 'rem')}!important; margin-right: ${getNumber(mx, 'rem')}!important;` : ''}
        ${my != null ? `margin-bottom: ${getNumber(my, 'rem')}!important; margin-top: ${getNumber(my, 'rem')}!important;` : ''}
    }
    `
}

export default marginUtils;