import componentCommons from '../../common/component.commons';

import InputStyles from '../Input';

const FileInputStyles = params => {
    const { framework } = params;
    const { placeholderColor } = window.__FABTheme.variables.components.fileInput;
    const wrapper = framework === 'angular' ? '.fab-file-input-wrapper' : '&';

    return `
        ${wrapper} { ${componentCommons} }
        ${wrapper} {
            display: inline-flex;
        }

        .fab-file-input__button .fab-button {

        }

        .fab-file-input__button input[type='file'] {
            opacity: 0;
        }

        .fab-file-input__field {
            align-items: center;
            color: ${placeholderColor};
            display: flex;
            height: 3rem;
            padding-left: 1em;
            padding-right: .5em;
        }

        .fab-file-input__field .fab-icon {
            margin-right: .75em;
        }

        .fab-file-input__placeholder {
            line-height: 1;
        }

        ${InputStyles(params)}
    `
}

export default FileInputStyles;