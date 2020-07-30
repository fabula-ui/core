// Methods
import getColor from '../../methods/color/getColor';
import getComponentVars from '../../methods/misc/getComponentVars';
import getFocusGlowColor from '../../methods/color/getFocusGlowColor';

const FileInputStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('fileInput');
    const inputVars = getComponentVars('input');
    const wrapper = framework === 'angular' ? '.fab-file-input-wrapper' : '&';
    const focusGlowColor = props.color ? getColor(props.color) : inputVars.focusGlowColor;

    return `
        .fab-file-input[data-has-files='true'] {
            cursor: pointer;

            &:hover {
                border-color: ${getFocusGlowColor(focusGlowColor, 'fill')};
            }
        }

        .fab-file-input input[type='file'] {
            opacity: 0;
            position: absolute;
            width: 100%;
        }

        .fab-file-input__icon {
            align-items: center;
            display: flex;
            padding-left: 1em;
        }

        .fab-file-input__placeholder {
            color: ${vars.placeholderColor};
            user-select: none;
        }

        .fab-file-input__stage {
            align-items: center;
            display: flex;
            flex-grow: 1;
            overflow: hidden;
        }

        // External
        .fab-file-input__stage .fab-avatar-wrapper {
            height: 100%;
            margin-right: 1em;
        }

        .fab-file-input__stage .fab-avatar {
            border-radius: 0;
            font-size: .9em;
            height: 100%;
            width: 2.75em;
        }
        
        .fab-file-input .fab-badge {
            font-size: .5em; 
            margin-left: -5px;
            position: absolute;
        }

        .fab-file-input .fab-dropdown-item {
            align-items: center;
            display: flex;
            padding: 0 .5em;
            
            .fab-avatar { 
                margin-right: .75em;
            }

            span {
                flex-grow: 1;
                font-size: .9em;
                font-weight: 600;
                letter-spacing: -.025em;
                white-space: nowrap;
            }
        }

        .fab-file-input .fab-dropdown-menu {
            cursor: default;
        }

        .fab-file-input__icon .fab-icon {
            color: ${vars.placeholderColor};
        }

        .fab-file-input .fab-input__elements {
            align-items: center;
            background: #FFF;
            box-shadow: -5px 0 6px 0 #FFF;
            display: flex;
            height: calc(100% - 2px);
            position: absolute;
            right: .6em;

            .fab-button-wrapper {
                position: static;
                transform: translate(0, 0);
            }

            .fab-button-wrapper:not(:last-child) {
                margin-right: .5em;
            }
        }

        .fab-file-input[data-file-list-is-open='true'] .fab-input__elements {
            .fab-icon {
                transform: rotateZ(180deg);
            }
        }

        .fab-file-input .fab-tag-wrapper {
            height: 2em;

            &:not(:last-child) {
                margin-right: .5em;
            }
        }

        .fab-file-input .fab-tag {
            display: flex;
            flex-wrap: nowrap;
            font-size: .8em;
            font-weight: 600;
            overflow: hidden;
            padding-bottom: 0;
            padding-left: 0;
            padding-top: 0;
            text-overflow: ellipsis;
            user-select: none;
            white-space: nowrap;
        }

        .fab-file-input__tag:not(:last-child) {
            margin-right: .5em;
        }
    `
}

export default FileInputStyles;