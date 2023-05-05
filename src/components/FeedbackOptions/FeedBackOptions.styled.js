import styled from 'styled-components';

export const FeedbackOptionsList = styled.ul`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const FeedbackOptionsButton = styled.ul`
  padding: 5px 15px;
  color: #76051A;
  font-weight: 500;
  font-size: 25px;
  border-radius: 25% 0% 25% 0%;
  box-shadow: 0 -0.5px 26px -8px #76051a;
  cursor: pointer;
  transition: 300ms transform ease-in-out,
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
