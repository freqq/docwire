import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'common/components/Select';

const AnswerRowWrapper = styled.li.attrs({ className: 'answer-row-wrapper' })`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 15px 0;

  &:hover {
    background: #fafafa;
  }
`;

const AnswerContent = styled.div.attrs({ className: 'answer-content' })``;

const AnswerOptions = styled.div.attrs({ className: 'answer-options' })`
  text-align: right;
`;

const OPTIONS = [
  { id: 1, name: 'Yes' },
  { id: 2, name: 'No' },
  { id: 3, name: `Don't know` },
];

const AnswerRow = ({ question }) => (
  <AnswerRowWrapper>
    <AnswerContent>{question}</AnswerContent>
    <AnswerOptions>
      <Select options={OPTIONS} />
    </AnswerOptions>
  </AnswerRowWrapper>
);

AnswerRow.propTypes = {
  question: PropTypes.string.isRequired,
};

export default AnswerRow;
