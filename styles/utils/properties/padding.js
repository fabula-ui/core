import getNumber from '../../methods/misc/getNumber';

const paddingUtils = params => {
    const { framework, props } = params;
    let wrapper;

    // TODO: find a better way to handle padding on angular
    if (framework === 'angular') {
        wrapper = '> [data-fab-component], > [data-fab-wrapper] > [data-fab-component], > [data-fab-wrapper] > [data-fab-wrapper] > [data-fab-component]';
    } else {
        wrapper = '&[data-fab-component], &[data-fab-wrapper] > [data-fab-component], &[data-fab-wrapper] > [data-fab-wrapper] > [data-fab-component]';
    }

    return `
    ${wrapper} {
        ${props.p != null ? `padding: ${getNumber(props.p, 'rem')}!important;` : ''}
        ${props.pb != null ? `padding-bottom: ${getNumber(props.pb, 'rem')}!important;` : ''}
        ${props.pl != null ? `padding-left: ${getNumber(props.pl, 'rem')}!important;` : ''}
        ${props.pr != null ? `padding-right: ${getNumber(props.pr, 'rem')}!important;` : ''}
        ${props.pt != null ? `padding-top: ${getNumber(props.pt, 'rem')}!important;` : ''}
        ${props.px != null ? `padding-left: ${getNumber(props.px, 'rem')}!important; padding-right: ${getNumber(props.px, 'rem')}!important;` : ''}
        ${props.py != null ? `padding-bottom: ${getNumber(props.py, 'rem')}!important; padding-top: ${getNumber(props.py, 'rem')}!important;` : ''}
    }
    `
}

export default paddingUtils;