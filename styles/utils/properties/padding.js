import getNumber from '../../methods/misc/getNumber';

const paddingUtils = params => {
    const { framework, props } = params;
    let wrapper;

    if (framework === 'angular') {
        wrapper = '> [data-fab-component], > [data-fab-wrapper] > [data-fab-component], > [data-fab-wrapper] > [data-fab-wrapper] > [data-fab-component]';
    } else {
        wrapper = '&[data-fab-component], &[data-fab-wrapper] > [data-fab-component], &[data-fab-wrapper] > [data-fab-wrapper] > [data-fab-component]';
    }

    return `
    ${wrapper} {
        ${props.p ? `padding: ${getNumber(props.p, 'rem')}!important;` : ''}
        ${props.pb ? `padding-bottom: ${getNumber(props.pb, 'rem')}!important;` : ''}
        ${props.pl ? `padding-left: ${getNumber(props.pl, 'rem')}!important;` : ''}
        ${props.pr ? `padding-right: ${getNumber(props.pr, 'rem')}!important;` : ''}
        ${props.pt ? `padding-top: ${getNumber(props.pt, 'rem')}!important;` : ''}
        ${props.px ? `padding-left: ${getNumber(props.px, 'rem')}!important; padding-right: ${getNumber(props.px, 'rem')}!important;` : ''}
        ${props.py ? `padding-bottom: ${getNumber(props.py, 'rem')}!important; padding-top: ${getNumber(props.py, 'rem')}!important;` : ''}
    }
    `
}

export default paddingUtils;