import componentCommons from '../../common/component.commons';

const ToastStackStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-toast-stack' : '&';

    return `
        ${wrapper} { ${componentCommons} }

        ${wrapper} {
            align-items: flex-end;
            bottom: 0;
            display: flex;
            flex-direction: column-reverse;
            // padding: 1rem;
            padding: .5rem 1rem;
            position: fixed;
            right: 0;
        }

        ${wrapper} .fab-toast-wrapper {
            padding: .5rem 0;
        }
    `
}

export default ToastStackStyles;