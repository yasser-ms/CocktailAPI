import styled from "styled-components";
export const Wrapper = styled.article`
  padding: 120px 0px;
  .container-center {
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
  }
  .title{
    color: var(--grey-900);
    font-weight : 700;
  }
  .col1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
  .col2{
    display: grid;
    grid-template-rows: auto;
    gap: 40px;
  }

  .img {
    border-radius: var(--borderRadius);
  }
  .Cocktail-infos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  .Cocktail-infos p span {
    padding: 4px 8px;
    background-color: var(--primary-300);
    color: var(--primary-700);
    font-weight: 700;
    border-radius: var(--borderRadius);

  }
  .Cocktail-infos p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  @media (min-width: 992px) {
    .col2 {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 32px;
    }
  }
`;
