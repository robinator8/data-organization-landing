import React from "react";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import colors from "styles/colors";
import PropTypes from "prop-types";
import Button from "components/_ui/Button";

const PersonCardContainer = styled('div')`
    display: block;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
    margin-bottom: 4em;
    transition: all 150ms ease-in-out;
    text-decoration: none;
    color: currentColor;

    @media(max-width:${dimensions.maxwidthMobile}px) {
        margin-bottom: 2em;
    }
`

const PersonCardContent = styled("div")`
    background: white;
    padding: 4em 3em 2.25em 3em;
    position: relative;

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: ${colors.red500};
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }

    @media(max-width:950px) {
        padding: 3.25em 2.5em 2em 2.5em;
    }
`

const PersonCardTitle = styled("h3")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
`

const PersonCardBlurb = styled("div")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 5em;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 2.5em;
    }
`
const PersonCard = ({ name, description, linkedin }) => (
    <PersonCardContainer>
        <PersonCardContent className="PersonCardContent">
            <PersonCardTitle>
                {name}
            </PersonCardTitle>
            <PersonCardBlurb>
                {description}
            </PersonCardBlurb>
            { linkedin &&
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <Button>
                    LinkedIn
                </Button>
            </a>
            }
            
        </PersonCardContent>
    </PersonCardContainer>
)

export default PersonCard;

PersonCard.propTypes = {
    linkedin: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}