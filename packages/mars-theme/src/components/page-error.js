import React from "react";
import { styled, connect } from "frontity";
import { withTranslation } from "react-i18next";

const Page404 = ({ state, i18n }) => {
  const data = state.source.get(state.router.link);
  return (
    <Container>
      <Title>{data.is404 ? <>{i18n.t("Error_Page_404_Title")}</> : <>{i18n.t("Error_Page_Title")}</>}</Title>
      <Description>{data.is404 ? <>
        {i18n.t("Error_Page_404_Description")}
        <span role="img" aria-label="confused face">
          😕
        </span>
      </> : <>{i18n.t("Error_Page_Description")}</>
      }</Description>
    </Container>
  );
};

export default connect(withTranslation()(Page404));

const Container = styled.div`
  // width: 800px;
  margin: 0;
  padding: 24px;
  text-align: center;
  margin-top: 100px;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
  font-size: 4em;
`;

const Description = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  margin: 24px 0;
`;
