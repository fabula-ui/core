import { colorModifier } from './modifiers/drawer-color.modifier';

export const DrawerStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-drawer-wrapper' : '&';

    return `
    ${wrapper} {
        bottom: 0;
        left: 0;
        opacity: 0;
        position: fixed;
        top: 0;
        transform: translate(-100%, 0);
        transition: all .3s ease-in-out;
        visibility: hidden;
        z-index: 9999;

        @media (max-width: 576px) {
            right: 0;
        }
    }

    ${wrapper}[data-open='true'] {
        opacity: 1;
        transform: translate(0, 0);
        visibility: visible;
    }

    .fab-drawer {
        box-shadow: 0 1px 8px rgba(0,0,0,.1);
        height: 100%;
        overflow-y: auto;
        position: relative;
        width: 400px;
        z-index: 1;

        @media (max-width: 576px) {
            width: calc(100% - 48px);
        }
    }

    .fab-drawer__close-button {
        appearance: none;
        border: none;
        box-shadow: 0 1px 8px rgba(0,0,0,.1);
        cursor: pointer;
        height: 48px;
        left: 400px;
        font-size: 1.25rem;
        position: absolute;
        top: 0;
        width: 48px;

        @media (max-width: 576px) {
            left: auto;
            right: 0;
        }

        &:focus {
            outline: none;
        }
    }

    // Modifiers
    ${colorModifier(params)}
    `
};