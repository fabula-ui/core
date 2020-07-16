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
        ${props.p ? `padding: calc(1rem * ${props.p});` : ''}
        ${props.pb ? `padding-bottom: calc(1rem * ${props.pb});` : ''}
        ${props.pl ? `padding-left: calc(1rem * ${props.pl});` : ''}
        ${props.pr ? `padding-right: calc(1rem * ${props.pr});` : ''}
        ${props.pt ? `padding-top: calc(1rem * ${props.pt});` : ''}
        ${props.px ? `padding-left: calc(1rem * ${props.px}); padding-right: calc(1rem * ${props.px});` : ''}
        ${props.py ? `padding-bottom: calc(1rem * ${props.py}); padding-top: calc(1rem * ${props.py});` : ''}
    `
}

export default paddingUtils;