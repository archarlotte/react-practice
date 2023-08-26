import React, { memo } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  color: #484848;
  .hr-wrapper {
    padding: 4rem 0;
  }

  hr {
    color: #ccc;
  }

  .content {
    width: 1032px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .item {
    ul li {
      list-style: none;
      margin: 1rem 0;
    }
    ul li:first-child {
      padding-bottom: 1rem;
      font-weight: 600;
    }
  }
`;

const Footer = memo(() => {
  return (
    <FooterWrapper>
      <div className="hr-wrapper">
        <hr />
      </div>
      <div className="content">
        <div className="item">
          <ul>
            <li>Support</li>
            <li>Help Centre</li>
            <li>Combating discrimination</li>
          </ul>
        </div>
        <div className="item">
          <ul>
            <li>Community</li>
            <li>Airbnb.org: disaster relief housing</li>
            <li>Air Cover</li>
          </ul>
        </div>
        <div className="item">
          <ul>
            <li>Hosting</li>
            <li>Airbnb your home</li>
            <li>AirCover for Hosts</li>
          </ul>
        </div>
        <div className="item">
          <ul>
            <li>Airbnb</li>
            <li>Newsroom</li>
            <li>Learn about new features</li>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
});

export default Footer;
