import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/toggle-color.modifier';
import sizeModifier from './modifiers/toggle-size.modifier';

const ToggleStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('toggle');
    const wrapper = framework === 'angular' ? '.fab-toggle-wrapper' : '&';

    return `
    ${wrapper} {
        font-family: ${vars.fontFamily};
        font-size: ${vars.fontSize};
        font-weight: ${vars.fontWeight};
    }

    ${wrapper}[data-active='true'] .fab-toggle__switch:before {
        box-shadow: -5px 0 0 0 rgba(0,0,0, .025);
        left: 100%;
        transform: translate(-100%, 0);
    }

    ${wrapper}[data-disabled='true'] {
        opacity: .5;
        pointer-events: none;
        user-select: none;

        .fab-toggle__label,
        .fab-toggle__switch {
            cursor: default;
        }

        .fab-toggle__switch:focus {
            box-shadow: none;
        }
    }

    .fab-toggle {
        align-items: center;
        display: flex;
    }

    .fab-toggle__label {
        cursor: pointer;
        font-weight: ${props.weight ? props.weight : '400'};
        letter-spacing: -.025em;
        padding-left: .5em;
    }

    .fab-toggle__switch {
        appearance: none;
        border: solid 2px transparent;
        border-radius: 999px;
        cursor: pointer;
        height: ${vars.size};
        position: relative;
        transition: all .2s ease-in-out;
        width: calc(${vars.size} * 1.75);

        &:before {
            border-radius: 50%;
            box-shadow: 5px 0 0 0 rgba(0,0,0, .025);
            content: '';
            display: flex;
            height: calc(1.25em - 4px);
            left: 0;
            position: absolute;
            top: 0;
            transform: translate(0, 0);
            transition: all .2s ease-in-out;
            width: calc(1.25em - 4px);
        }
    }

    .fab-toggle__switch:focus {
        outline: none;
    }

    // Modifiers
    ${colorModifier(params)}
    ${sizeModifier(params)}
    `;
}

export default ToggleStyles;