const TagInputStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tagInput;

    return `
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
    `;
}

export default TagInputStyles;