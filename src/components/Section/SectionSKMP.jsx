import styled from 'styled-components';
import PropTypes from 'prop-types';

const SectionComp = styled.section``;
const Title = styled.h2`
  color: chocolate;
`;
const Section = ({ title, children }) => (
  <SectionComp>
    <Title>{title}</Title>
    {children}
  </SectionComp>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
