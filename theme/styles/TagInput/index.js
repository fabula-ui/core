import getComponentVars from '../../methods/misc/getComponentVars';

const TagInputStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tagInput;
    const inputVars = getComponentVars('input');

    return `
        .fab-input__field {
            height: 2.75em;
            min-height: initial;
            padding: calc(${inputVars.padding} / 2);
        }

        .fab-tag-input__field-wrapper {
            flex-grow: 1;
            position: relative;
        }

        .fab-tag-input__field-wrapper:only-child {
            padding-left: calc(${inputVars.padding} / 2);
        }

        .fab-tag-input__stage {
            display: flex;
            flex-wrap: wrap;
            padding-bottom: .25em;
            padding-left: .25em;
            padding-right: .25em;
            padding-top: .25em;
            width: 100%;
        }

        .fab-tag-group {
            padding-bottom: calc(${inputVars.padding} / 2);
            padding-top: calc(${inputVars.padding} / 2);
        }

        .fab-tag-wrapper {
            max-width: 100%;
            padding: calc(${inputVars.padding} / 4);
        }

        .fab-tag {
            height: 2.5em;
            overflow: hidden;
            width: 100%;
        }

        .fab-tag span {
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

/*
.fab-tag-input {
            align-items: center;
            border-radius: .5em;
            display: flex;
            flex-wrap: wrap;
            min-height: 3em;
            padding: .15em .1em;
        }

        .fab-tag-input__field-wrapper {
            align-items: center;
            display: inline-flex;
            max-width: 100%;
            overflow: hidden;
            padding: .2em .3em;
        }

        .fab-tag-input__field {
            align-items: center;
            border: none;
            display: flex;
            height: 2rem;

            &:focus {
                outline: none;
            }
        }

        .fab-tag-input__stage {
            display: inline-flex;
            flex-wrap: wrap;
            max-width: 100%;
            position: relative;

            fab-tag,
            .fab-tag-wrapper {
                max-width: 100%;
            }

            .fab-tag-wrapper {
                padding: .2em;
            }

            .fab-tag {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        */