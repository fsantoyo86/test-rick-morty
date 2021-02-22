import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #fcd34d;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itmes: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #10b981;
`;

export const FooterSubHeading = styled.p`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grange', Arial, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
`;

export const FooterSubText = styled.p`
    margin-bottom: 24px;
    font-size: 20px;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width:820px){
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  width: 60%;

  &::placeholder {
    color: #a3a3a3;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 64px;
  }
`;

export const FooterItemsContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterItemsCanvas = styled.div`
    display: flex;

    @media screen and (max-width:820px){
      flex-direction:column;
    }
`

export const FooterItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #10b981;

  @media and screen(max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterItemTitle = styled.h2`
    margin-bottom: 16px;
    font-size: 24px;
    font-weight:bold;

`

export const FooterItemSubTitle = styled(Link)`
  color: #10b981;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;