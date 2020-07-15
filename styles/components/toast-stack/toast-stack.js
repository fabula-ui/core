const ToastStackStyles = params => {
    const { framework, props } = params;
    const wrapper = framework === 'angular' ? '.fab-toast-stack' : '&';

    return `
        ${wrapper} {
            align-items: flex-end;
            ${props.placement.y === 'bottom' ? `bottom: 0;` : ''}
            display: flex;
            ${props.placement.y === 'bottom' ? `flex-direction: column-reverse;` : ''}
            ${props.placement.y === 'top' ? `flex-direction: column;` : ''}
            ${props.placement.x === 'center' ? `left: 50%;` : ''}
            ${props.placement.x === 'left' ? `left: 0;` : ''}
            ${props.placement.x === 'right' ? `right: 0;` : ''}
            padding: .5rem 1rem;
            position: fixed;
            ${props.placement.y === 'top' ? `top: 0;` : ''}
            z-index: 9999;
        }

        ${wrapper} .fab-toast-wrapper {
            animation: animate-toast-${props.placement.y} .2s ease-in-out;

            @keyframes animate-toast-${props.placement.y} {
                from {
                    opacity: 0;
                    ${props.placement.y === 'top' ? `transform: translate(0, -100%);` :  `transform: translate(0, 100%);`}
                    visibility: hidden;
                }
            }
        }

        ${wrapper} .fab-toast {
            ${props.placement.x === 'center' ? `transform: translate(-50%, 0);` : ''}
            z-index: 2;
        }
    `
}

export default ToastStackStyles;