import styled from 'styled-components';
import Link from 'gatsby-link';

import SkillsPieChart from '../components/pieChart.js';

const textFont = "'Lora' | serif";
const titleFont = "'Titillium Web' | sans-serif";
const fontColor = 'white';

// PAGES
export const BodyContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: rgb(42, 48, 72);
`;
export const ChildContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  display: grid;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  font-family: ${titleFont};
  color: ${fontColor};
  font-size: ${props => (props.small ? '2em' : '3em')};

`;
export const Paragraph = styled.div`
  display: grid;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  font-family: ${textFont};
  color: ${fontColor};
  font-size: 1em;
`;


//LINK
export const ExternalLink = styled.a.attrs({
  target: '_blank',
})`
  &:hover {
    text-decoration: none;
    opacity: .5;
  }
`;

// LANDING 
export const Page = styled.div`
  display: grid;
  grid-template-columns: ${props => props.col};
  justify-items: center;
  align-items: top;
  max-width: 980px;
  min-height: 0;
  max-height: 80vh;
  background: #242A41;
  overflow: auto;
  
`;
export const Box = styled.div`
  display: grid;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  grid-gap: ${props => props.gap};
  align-items: ${props => props.align};
  justify-items: ${props => props.justify};
  padding: ${props => props.padding};
  width: 100%;
`;
// grid - column - gap: 1em;
// grid - row - gap: 1em;
// grid - gap: 1em;
// grid - auto - rows: minmax(100px, auto);
// justify - items: center;
// align - items: center;
export const StyledPieChart = styled(SkillsPieChart)`
  display: grid;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  width: 100%;
  height: 100%;
`;
export const LandingPic = styled.img`
  display: grid;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  width: 2fr;
  height: 300px;
  padding:3em;
  border-radius: 100%;
`;
// grid-template-columns: 70% 30%;

// PORTFOLIO
export const Icon = styled.img`
  margin: 0 .5em;
  height: 50px;
  width: 50px;
`;