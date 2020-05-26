const marginUtils = params => {
    const { framework, props } = params;
    const { m, mb, ml, mr, mt, mx, my } = props;

    if (mb) { console.log('mb', mb, framework); }

    return `
        ${framework !== 'angular' ? '& {' : ''}
        ${m ? `margin: calc(1rem * ${m});` : ''}
        ${mb ? `margin-bottom: calc(1rem * ${mb});` : ''}
        ${ml ? `margin-left: calc(1rem * ${ml});` : ''}
        ${mr ? `margin-right: calc(1rem * ${mr});` : ''}
        ${mt ? `margin-top: calc(1rem * ${mt});` : ''}
        ${mx ? `margin-left: calc(1rem * ${mx}); margin-right: calc(1rem * ${mx});` : ''}
        ${my ? `margin-bottom: calc(1rem * ${my}); margin-top: calc(1rem * ${my});` : ''}
        ${framework !== 'angular' ? '}' : ''}
    `
}

export default marginUtils;