import React, { Component } from 'react';
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";

const ButtonContainer = styled("button")`
    padding: 1em 2em;
    background: ${colors.orange500};
    font-weight: 600;
    color: white;
    outline: none;
    border: none;
    font-size: 1rem;
    border-radius: 2px;
    position: relative;
    transition: background 100ms ease-in-out;

    & + button {
        margin-left: 1em;
    }
    
    @media(max-width:${dimensions.maxwidthMobile}px) {
        padding: 0.8em 1.8em;
        font-size: 1em;
    }

    p {
        margin: 0;
    }

    &:hover {
        background: ${colors.orange600};
        cursor: pointer;
        transition: background 100ms ease-in-out;
    }
`

class Button extends Component {
    render() {
        const { children, ...props } = this.props;
        return (
            <ButtonContainer
                onClick={this.props.onClick}
                {...props}>
                {this.props.children}
            </ButtonContainer>
        );
    }
}

export default Button;