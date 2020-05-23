const TagInputStyles = params => {
    return `
        .fab-tag-input {
            align-items: center;
            border: solid 1px #CCC;
            border-radius: .5em;
            display: flex;
            flex-wrap: wrap;
            min-height: 3em;
            padding: .15em .1em;
        }

        .fab-tag-input[data-focus='true'] {
            border-color: blue;
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