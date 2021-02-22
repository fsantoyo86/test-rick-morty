import React from 'react';
import {FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText,
    FooterItemsContainer, FooterItemsCanvas, FooterItems, FooterItemTitle, FooterItemSubTitle, Form,FormInput} from './Footer.elements';

/**
 * Footer is created using styled components.
 * 
 */
const Footer = () => {
    return (
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Joing our fan site to receive the latest information.
          </FooterSubHeading>
          <FooterSubText>Suscribe to our channel for free.</FooterSubText>
          <FooterSubText>Created by Francisco Alberto Santoyo Valdez.</FooterSubText>
          <Form>
            <FormInput
              name="email"
              type="email"
              placeholder="Your Email"
            ></FormInput>
            <button className="bg-emerald-500 rounded-sm py-3 text-amber-300 px-3 font-bold hover:bg-emerald-600 focus:outline-none lg:w-32 md:w-32 sm:w-full w-full lg:ml-0 md:ml-0 sm:ml-16 ml-16">
              Suscribe
            </button>
          </Form>
        </FooterSubscription>
        <FooterItemsContainer>
          <FooterItemsCanvas>
            <FooterItems>
              <FooterItemTitle>About us</FooterItemTitle>
              <FooterItemSubTitle to="/">Director</FooterItemSubTitle>
              <FooterItemSubTitle to="/">Marketing</FooterItemSubTitle>
              <FooterItemSubTitle to="/">Sales</FooterItemSubTitle>
              <FooterItemSubTitle to="/">Logistics</FooterItemSubTitle>
            </FooterItems>
            <FooterItems>
              <FooterItemTitle>Contact us</FooterItemTitle>
              <FooterItemSubTitle to="/">Information</FooterItemSubTitle>
              <FooterItemSubTitle to="/">Services</FooterItemSubTitle>
              <FooterItemSubTitle to="/">Mobile</FooterItemSubTitle>
              <FooterItemSubTitle to="/">Email</FooterItemSubTitle>
            </FooterItems>
            </FooterItemsCanvas>
            <FooterItemsCanvas>
            <FooterItems>
              <FooterItemTitle>Social Media</FooterItemTitle>
              <FooterItemSubTitle to="/">Director</FooterItemSubTitle>
              <FooterItemSubTitle to="/">Marketing</FooterItemSubTitle>
              <FooterItemSubTitle to="/">Sales</FooterItemSubTitle>
              <FooterItemSubTitle to="/">Logistics</FooterItemSubTitle>
            </FooterItems>
          </FooterItemsCanvas>
        </FooterItemsContainer>
      </FooterContainer>
    );
}

export default Footer;
