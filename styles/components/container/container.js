const ContainerStyles = params => {
    const { framework, props } = params;

    return `
        & {
            display: block;
            margin-left: auto;
            margin-right: auto;
            padding-left: 15px;
            padding-right: 15px;
            ${props.fluid ? `width: 100%;` : ''}

            ${!props.fluid ?
            `
                @media (min-width: 576px) {
                    max-width: 540px;
                }
                
                @media (min-width: 768px) {
                    max-width: 720px;
                }

                @media (min-width: 992px) {
                    max-width: 960px;
                }

                @media (min-width: 1200px) {
                    max-width: 1140px;
                }
                ` : ''}
        }

        & > .fab-container {
            width: 100%;
        }
    `
}

export default ContainerStyles