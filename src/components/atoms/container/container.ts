import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    height: 90%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    &.slide{
      overflow: hidden;
    }
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`