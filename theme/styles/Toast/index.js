import componentCommons from '../../common/component.commons';

const ToastStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-toast-wrapper' : '&';

    return `
        ${wrapper} { ${componentCommons} }
        ${wrapper} {
            
        }

        .fab-toast {
            
        }
    `;
}

export default ToastStyles;