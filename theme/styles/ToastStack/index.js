import componentCommons from '../../common/component.commons';

const ToastStackStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-toast-stack' : '&';

    return `
        ${wrapper} { ${componentCommons} }

        ${wrapper} {
            background: green;
            bottom: 0;
            position: fixed;
            right: 0;
        }
    `
}

export default ToastStackStyles;