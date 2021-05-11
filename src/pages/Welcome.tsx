import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Row, Col } from 'antd';

export default (): React.ReactNode => {
  return (
    <PageContainer>
       <Row gutter={[48, 48]} justify="center" align="middle">
        <Col xl={12}>
          <h1
            className="text-xl lg:text-5xl font-bold text-gray-800 text-center lg:text-left mb-0"
            style={{ lineHeight: '50px' }}
          >
            headingTxt
          </h1>
          <p className="text-xl text-gray-700 text-center lg:text-left mt-0 lg:mt-2">paraTxt</p>
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
