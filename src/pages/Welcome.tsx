import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Row, Col } from 'antd';
import './Welcome.css';

export default (): React.ReactNode => {
  return (
    <PageContainer>
       <Row gutter={[48, 48]} justify="center" align="middle">
        <Col xl={12}>
          <h1
            style={{ lineHeight: '50px' }}
          >
            51,667 WordPress Themes & Website Templates From $2
          </h1>
          <p className="para">WordPress themes, web templates and more. Brought to you by the largest global community of creatives.</p>
          <div className="mt-8">
            <input type="text" />
          </div>
        </Col>
        <Col xl={12}>
          <img src='https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/search-header-e9b1f87ec2352b50a7d1b2da92ee268d.png' alt='' />
        </Col>
      </Row>
    </PageContainer>
  );
};
