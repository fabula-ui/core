const TagExternalStyles = props => {
    return `
        .fab-tag-wrapper {
            position: absolute;
            z-index: 1;
        }

        .fab-tag-wrapper[data-placement-x='center'] {
            left: 50%;
            transform: translate(-50%, 0);
        }

        .fab-tag-wrapper[data-placement-x='left'] {
            left: 1rem;
        }

        .fab-tag-wrapper[data-placement-x='right'] {
            right: 1rem;
        }

        .fab-tag-wrapper[data-placement-y='bottom'] {
            bottom: 1rem;
        }

        .fab-tag-wrapper[data-placement-y='center'] {
            top: 50%;
            transform: translate(0, -50%);

            &[data-placement-x='center'] {
                transform: translate(-50%, -50%);
            }
        }

        .fab-tag-wrapper[data-placement-y='top'] {
            top: 1rem;
        }
    `;
}

export default TagExternalStyles;