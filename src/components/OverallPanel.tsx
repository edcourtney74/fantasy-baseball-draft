import React from "react";
import { Row } from "reactstrap";
import { PlayerInfo } from "../Interfaces";
import FullInfoTable from "./FullInfoTable";

type OverallPanelProps = {
  playerList: PlayerInfo[];
};

const OverallPanel = (props: OverallPanelProps) => (
  <Row className="pt-2 pl-2 pr-2" id="overall-panel">
    <h6 className="ml-2 mt-2">Overall</h6>
    <FullInfoTable
      showDelete={true}
      showPosition={true}
      playerList={props.playerList}
    />
  </Row>
);

export default OverallPanel;
