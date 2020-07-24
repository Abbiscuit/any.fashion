import React from 'react';
import styled from 'styled-components';

const CampaignBanner = () => {
  return (
    <Div>
      <Container>
        <InnerContainer>
          <Text>
            半額祭り
            <span role="img" aria-label="congrats">
              🎊
            </span>
            キャンペーン
            <span role="img" aria-label="exciting">
              🔥
            </span>
          </Text>
        </InnerContainer>
      </Container>
    </Div>
  );
};

export default CampaignBanner;

const Div = styled.div`
  padding: 0 20px;
  margin-bottom: 16px;
`;

const Container = styled.div`
  background-color: #eb5757;
  height: 104px;
  display: flex;
  align-items: center;
`;

const InnerContainer = styled.div`
  background-color: #ffffff;
  height: 56px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h3`
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
`;
