import React from "react";
import { Row } from "reactstrap";
import { PlayerInfo } from "../Interfaces";
import FullInfoTable from "./FullInfoTable";

type PositionPanelProps = {
  position: string;
  playerList: PlayerInfo[];
};

const PositionPanel = (props: PositionPanelProps) => (
  <Row className="pt-1 pl-1 pr-1">
    <h6 className="ml-1">{props.position}</h6>
    <FullInfoTable
      showDelete={true}
      showPosition={false}
      playerList={props.playerList}
    />
  </Row>
);

export default PositionPanel;
