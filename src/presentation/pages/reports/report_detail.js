import { Container } from "@mui/material";
import React from "react";
import dots from "../../../assets/images/lga_dots.svg";

import { withRouter } from "react-router-dom";
import Header from "../faqs/components/header";
import MUIRichTextEditor from "mui-rte";

const ReportDetail = (props) => {
  let { location } = props;

  return (
    <div>
      <Header image={location.state?.image} title={location.state?.title} />
      <Container
        sx={{
          marginTop: -8,
        }}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "end",
        }}
      >
        <img src={dots} alt="" />
      </Container>
      {/* <div
        style={{
          width: "100%",
          height: 56,
          backgroundImage: "url(" + linePattern + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      /> */}
      <Container sx={{ paddingX: 6 }}>
        <MUIRichTextEditor
          readOnly
          inlineToolbar={false}
          style={{ width: "100%", textAlign: "center" }}
          defaultValue={location.state?.body}
          toolbar={false}
        />
      </Container>
    </div>
  );
};

export default withRouter(ReportDetail);
