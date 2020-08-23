import getNumber from '../../methods/misc/getNumber';

const paddingUtils = params => {
    const { angularElement } = params;
    let wrapper = angularElement ? '> [data-fab-component], > [data-fab-wrapper]' : '';

    return `
        ${wrapper ? `${wrapper} {` : ''}
        ${paddingCSS(params)}
        ${wrapper ? '}' : ''}
    `
}

const paddingCSS = params => {
    const { props } = params;

    return `
        ${props.p ? `padding: ${getNumber(props.p, 'rem')};` : ''}
        ${props.pb ? `padding-bottom: ${getNumber(props.pb, 'rem')};` : ''}
        ${props.pl ? `padding-left: ${getNumber(props.pl, 'rem')};` : ''}
        ${props.pr ? `padding-right: ${getNumber(props.pr, 'rem')};` : ''}
        ${props.pt ? `padding-top: ${getNumber(props.pt, 'rem')};` : ''}
        ${props.px ? `padding-left: ${getNumber(props.px, 'rem')}; padding-right: ${getNumber(props.px, 'rem')};` : ''}
        ${props.py ? `padding-bottom: ${getNumber(props.py, 'rem')}; padding-top: ${getNumber(props.py, 'rem')};` : ''}
    `
}

export default paddingUtils;