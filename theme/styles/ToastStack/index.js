import componentCommons from '../../common/component.commons';

const ToastStackStyles = params => {
    const { framework, props } = params;
    const { placement } = props;
    const wrapper = framework === 'angular' ? '.fab-toast-stack' : '&';

    console.log('placement', placement);

    return `
        ${wrapper} { ${componentCommons} }

        ${wrapper} {
            align-items: flex-end;
            ${placement.y === 'bottom' ? `bottom: 0;` : ''}
            display: flex;
            ${placement.y === 'bottom' ? `flex-direction: column-reverse;` : ''}
            ${placement.y === 'top' ? `flex-direction: column;` : ''}
            ${placement.x === 'center' ? `left: 50%;` : ''}
            ${placement.x === 'left' ? `left: 0;` : ''}
            ${placement.x === 'right' ? `right: 0;` : ''}
            padding: .5rem 1rem;
            position: fixed;
            ${placement.y === 'top' ? `top: 0;` : ''}
            z-index: 9999;
        }

        ${wrapper} .fab-toast {
            ${placement.x === 'center' ? `transform: translate(-50%, 0);` : ''}
            z-index: 2;
        }
    `
}

export default ToastStackStyles;