import componentCommons from '../../common/component.commons';

// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

const FileInputStyles = params => {
    const { framework, props } = params;
    const { placeholderColor } = window.__FABTheme.variables.components.fileInput;
    const { expand } = props;
    const inputVars = getComponentVars('input');
    const wrapper = framework === 'angular' ? '.fab-file-input-wrapper' : '&';

    return `
        .fab-file-input[data-has-files='true'] {
            cursor: pointer;
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
            color: ${placeholderColor};
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
            margin-right: .7em;
        }

        .fab-file-input__stage .fab-avatar {
            border-radius: 0;
            font-size: .9em;
            height: 100%;
            width: 2.5em;
        }
        
        .fab-file-input .fab-badge {
            font-size: .5em; 
            margin-left: -5px;
            position: absolute;
        }

        .fab-file-input .fab-dropdown-item {
            align-items: center;
            display: flex;
            padding: .5em;

            .fab-avatar { 
                margin-right: .6em;
            }

            span {
                flex-grow: 1;
                font-size: .9em;
                font-weight: 600;
                letter-spacing: -.025em;
                white-space: nowrap;
            }
        }

        .fab-file-input__icon .fab-icon {
            color: ${placeholderColor};
        }

        .fab-file-input .fab-input__elements {
            align-items: center;
            background: #FFF;
            box-shadow: -5px 0 6px 0 #FFF;
            display: flex;
            height: 100%;
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

        .fab-file-input .fab-tag-wrapper {
            height: 2em;
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

// ${wrapper} { ${componentCommons} }
//         ${wrapper} {
//             display: inline-flex;
//             font-size: 1rem;
//             min-width: 20rem;
//             max-width: 100%;
//             ${expand ? `width: 100%;` : ''}
//         }

//         .fab-file-input {
//             width: 100%;
//         }

//         .fab-file-input__button {
//             flex-shrink: 0;
//             position: relative;
//         }

//         .fab-file-input__button input[type='file'] {
//             opacity: 0;
//             position: absolute;
//             width: 100%;
//         }

//         .fab-file-input__field {
//             align-items: center;
//             color: ${placeholderColor};
//             display: flex;
//             height: 3rem;
//             padding-left: 1em;
//             padding-right: .5em;
//         }

//         .fab-file-input__icon {
//             display: inline-flex;
//             margin-right: .75em;
//         }

//         .fab-file-input__placeholder {
//             flex-grow: 1;
//             line-height: 1;
//         }

//         .fab-file-input__stage {
//             display: flex;
//             flex-grow: 1;
//             overflow-x: hidden;
//             position: relative;

//             &:after {
//                 background: linear-gradient(to right, rgba(255,255,255, 0), rgba(255, 255, 255, 1));
//                 bottom: 0;
//                 content: '';
//                 position: absolute;
//                 right: 0;
//                 top: 0;
//                 width: 20px;
//             }
//         }

//         .fab-file-input__tag {
//             display: flex;
//         }

//         // External

//         .fab-file-input .fab-badge {
//             align-items: center;
//             display: inline-flex;
//             font-size: .6em;
//             padding: .25em .4em;
//         }

//         .fab-file-input__tag .fab-avatar-wrapper:not(:last-child) {
//             margin-right: .7em;
//         }

//         .fab-file-input__tag .fab-avatar {
//             border-radius: 0;
//             font-size: 1em;
//             height: 2rem;
//             width: 2rem;
//         }

//         .fab-file-input__tag .fab-tag {
//             display: flex;
//             flex-wrap: nowrap;
//             font-size: .85em;
//             font-weight: 600;
//             overflow: hidden;
//             padding-bottom: 0;
//             padding-left: 0;
//             padding-top: 0;
//             text-overflow: ellipsis;
//             white-space: nowrap;
//         }

//         .fab-file-input__tag:not(:last-child) {
//             margin-right: .5em;
//         }

//         ${InputStyles(params)}