const closeIcon = require('../../../icons/x.svg');

const ModalHeaderStyles = params => {
    const {framework} = params;
    const wrapper = framework === 'angular' ? '.fab-modal-header' : '&';

    return `
        ${wrapper} {
            display: flex;
        }

        .fab-modal-header__close {
            align-items: center;
            appearance: none;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            flex-shrink: 0;
            height: 2rem;
            justify-content: center;
            margin-left: .5rem;
            transition: all .2s ease-in-out;
            width: 2rem;

            &:before {
                background-color: #000;
                content: '';
                display: block;
                height: 1.25em;
                mask-image: url('${closeIcon}');
                mask-repeat: no-repeat;
                mask-position: center center;
                mask-size: contain;
                width: 1.25em;
            }

            &:hover {
                background-color: #EEE;
            }

            &:focus {
                outline: none;
            }
        }

        .fab-modal-header__content {
            flex-grow: 1;
        }

        .fab-modal-header__title {
            font-size: 1.25rem;
            font-weight: 600;
            letter-spacing: -.025em;
        }
    `
}

export default ModalHeaderStyles;