import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  //justify-content: space-between;
  height: 100%;
  background: rgba(211, 212, 214, 0.9);
  border-radius: 40px;
`

export const TitleSection = styled.div`
flex: 1 0 30%;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
 
`



export const ItemSection = styled.div<{ bgColor: string; alignItems?: string, flex?: string }>`
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.flex ? props.flex : '1 1 auto')};
  justify-content: center;
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  padding: 2rem 1.25rem;
  padding-right: 1.25rem;
  padding-top: 1.25rem;
  
  background: ${(props) => props.bgColor};
`

export const PositionsList = styled.ul`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  list-style-type: disc;
`
export const PositionsListItem = styled.li`
  display: list-item;
`

export const PositionTitle = styled.span`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
`

export const PositionLevel = styled.span`
  padding-left: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-style: italic;
  font-weight: 300;
`

export const Title = styled.p`
margin: 0;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
`
export const Subtitle = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
`
export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
`

export const Button = styled.button`
  padding: 10px 8px;
  background: rgba(84, 87, 91, 0.2);
  border-radius: 20px;
  margin-top: 1rem;
  font-size: 1rem;
`