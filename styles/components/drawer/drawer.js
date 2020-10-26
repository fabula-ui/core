const DrawerStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-drawer' : '&';

    return `
    ${wrapper} {
        background: #FFF;
        bottom: 0;
        box-shadow: 0 1px 8px rgba(0,0,0,.1);
        left: 0;
        min-width: 480px;
        position: fixed;
        top: 0;
        transform: translate(-100%, 0);
        transition: all .3s ease-in-out;
        z-index: 9999;

        @media (max-width: 576px) {
            width: 100%;
        }
    }

    ${wrapper}[data-open='true'] {
        transform: translate(0, 0);
    }
    `
};

export default DrawerStyles;