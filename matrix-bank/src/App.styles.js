import styled from "styled-components"

export const AppContainer = styled.div`
    background: ${({loading}) => (loading ? "#000" : null)};
    display: ${({loading}) => (loading ? "flex" : null)};
    justify-content: ${({loading}) => (loading ? "center" : null)};
    align-items: ${({loading}) => (loading ? "center" : null)};
    width: ${({loading}) => (loading ? "100%" : null)};
    height: ${({loading}) => (loading ? "100vh" : null)};
`