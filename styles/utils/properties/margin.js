import getNumber from '../../methods/misc/getNumber';

const marginUtils = params => {
    const { props } = params;

    if (!props.innerComponent) {
        return `
        & {
            ${props.m != null ? `margin: ${getNumber(props.m, 'rem')}!important;` : ''}
            ${props.mb != null ? `margin-bottom: ${getNumber(props.mb, 'rem')}!important;` : ''}
            ${props.ml != null ? `margin-left: ${getNumber(props.ml, 'rem')}!important;` : ''}
            ${props.mr != null ? `margin-right: ${getNumber(props.mr, 'rem')}!important;` : ''}
            ${props.mt != null ? `margin-top: ${getNumber(props.mt, 'rem')}!important;` : ''}
            ${props.mx != null ? `margin-left: ${getNumber(props.mx, 'rem')}!important; margin-right: ${getNumber(props.mx, 'rem')}!important;` : ''}
            ${props.my != null ? `margin-bottom: ${getNumber(props.my, 'rem')}!important; margin-top: ${getNumber(props.my, 'rem')}!important;` : ''}
        }
        `
    }
}

export default marginUtils;