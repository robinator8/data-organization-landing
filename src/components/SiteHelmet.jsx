import React from "react";
import Helmet from "react-helmet";

const SiteHelmet = ({ title, meta }) => ( 
    <Helmet
        title={title}
        titleTemplate={`%s | ${meta.title}`}
        meta={[
            {
                name: `description`,
                content: meta.description,
            },
            {
                property: `og:title`,
                content: meta.title,
            },
            {
                property: `og:description`,
                content: meta.description,
            },
            {
                property: `og:type`,
                content: `website`,
            },
            {
                name: `twitter:card`,
                content: `summary`,
            },
            {
                name: `twitter:creator`,
                content: meta.author,
            },
            {
                name: `twitter:title`,
                content: meta.title,
            },
            {
                name: `twitter:description`,
                content: meta.description,
            },
        ].concat(meta)}
    />
)

export default ({ title, meta }) => {
    // const meta = data.site.siteMetadata;

    return (
        <SiteHelmet meta={meta} title={title} />
    )
}

export const query = graphql`
    {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`