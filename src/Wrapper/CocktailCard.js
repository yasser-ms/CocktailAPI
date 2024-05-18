import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: auto 1fr;
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  img {
    height: 15rem;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }
  .footer {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    h2 {
      color: var(--primary-900);
      font-weight: bold;
      font-size: 32px;
      letter-spacing: var(--letterSpacing);
    }
    h4 {
      color: var(--primary-900);
      font-size: 24px;
      letter-spacing: var(--letterSpacing);
    }
    p {
      font-size: var(--small-text);
      color: var(--grey-500);
      letter-spacing: var(--letterSpacing);
    }
  }
  :hover {
    box-shadow: var(--shadow-4);
  }
`;
