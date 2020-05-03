import React from "react";
import PropTypes from "prop-types";
import SiteHelmet from "components/SiteHelmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import PersonCard from "components/PersonCard";
import * as constants from "utils/constants";

const TeamTitle = styled("h1")`
    margin-bottom: 1em;
`

const Work = ({ people, meta }) => (
    <>
        <SiteHelmet title={"Team"} meta={meta} />
        <Layout>
            <TeamTitle>
                Team
            </TeamTitle>
            <>
                {people.map((person, i) => (
                    // <PersonCard
                    //     key={i}
                    //     category={project.node.project_category}
                    //     title={project.node.project_title}
                    //     description={project.node.project_preview_description}
                    //     thumbnail={project.node.project_preview_thumbnail}
                    //     uid={project.node._meta.uid}
                    // />
                    <PersonCard
                        name={person.name}
                        description={person.description}
                        linkedin={person.linkedin}
                    />
                ))}
            </>
        </Layout>
    </>
);

export default ({ data }) => {
    // const projects = data.prismic.allProjects.edges;
    const meta = data.site.siteMetadata;
    // if (!projects) return null;

    // const people = [{
    //     name: "test person1",
    //     description: "test person1 description",
    //     linkedin: "https://linkedin.com"
    // },{
    //     name: "test person2",
    //     description: "test person2 description",
    //     linkedin: "https://linkedin.com"
    // }]

    return (
        <Work people={constants.teamList} meta={meta}/>
    )
}

Work.propTypes = {
    people: PropTypes.array.isRequired,
};

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

