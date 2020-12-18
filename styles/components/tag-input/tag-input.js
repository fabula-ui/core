import { getComponentVars } from '../../methods/misc/getComponentVars';

const TagInputStyles = params => {
    const { props } = params;
    const vars = getComponentVars('tagInput');
    const inputVars = getComponentVars('input');

    return `
        .fab-tag-input__click-area {
            cursor: text;
            flex-grow: 1;
        }
        
        .fab-tag-input__fake-input {
            align-items: center;
            cursor: text;
            display: inline-flex;
            max-width: 100%;
            padding: calc(${inputVars.padding} / 2);
            white-space: break-word;

            &:before {
                color: ${inputVars.placeholderColor};
                content: '${props.placeholder}';
                display: inline-flex;
            }

            &:focus {
                outline: none;
            }
        }

        .fab-tag-input__fake-input[data-show-placeholder='false'] {
            &:before {
                display: none;
            }
        }

        .fab-tag-input__stage {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            min-height: ${inputVars.minHeight};
            padding-bottom: .25em;
            padding-left: .25em;
            padding-right: .25em;
            padding-top: .25em;
            width: 100%;
        }

        // External

        .fab-tag-input .fab-icon {
            align-items: center;
            padding-left: .6em;
            padding-right: .25em;
        }

        .fab-tag-input .fab-input__field {
            // height: 2.75em;
            // min-height: initial;
            // padding: calc(${inputVars.padding} / 2);
        }

        .fab-tag-input .fab-tag-input__field-wrapper {
            flex-grow: 1;
            position: relative;
        }

        .fab-tag-input .fab-tag-input__field-wrapper:only-child {
            padding-left: calc(${inputVars.padding} / 4);
        }

        .fab-tag-input .fab-tag-wrapper {
            max-width: 100%;
            padding: calc(${inputVars.padding} / 4);
        }

        .fab-tag-input .fab-tag {
            height: 2em;
            overflow: hidden;
            width: 100%;
        }

        .fab-tag-inut .fab-tag span {
            display: block;
            line-height: 1.5;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
        }
    `;
}

export default TagInputStyles;