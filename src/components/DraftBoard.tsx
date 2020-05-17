import React from "react";
import { PlayerInfo } from "../Interfaces";
import OverallPanel from "./OverallPanel";
import PositionPanel from "./PositionPanel";
import SearchPanel from "./SearchPanel";
import { Col, Row } from "reactstrap";

type DraftBoardProps = {};

const positions = ["1B", "P", "2B", "OF", "3B", "SS", "C"];
const players: PlayerInfo[] = [
  {
    name: "Yadier MolinaMolinaMolinaMolinaMolina",
    team: "Cardinals",
    position: "C",
    steamer: 525,
    zips: 510,
    percentage: 7,
  },
  {
    name: "Yadier MolinaMolinaMolinaMolinaMolina",
    team: "Cardinals",
    position: "C",
    steamer: 525,
    zips: 510,
    percentage: 7,
  },
  {
    name: "Yadier MolinaMolinaMolinaMolinaMolina",
    team: "Cardinals",
    position: "C",
    steamer: 525,
    zips: 510,
    percentage: 7,
  },
];

const DraftBoard = () => (
  <Row>
    <Col lg="5">
      <OverallPanel playerList={players} />
    </Col>
    <Col>
      <Row id="search-panel">
        <Col>
          <SearchPanel playerList={players} />
        </Col>
      </Row>
      <Row className="p-2" id="position-panel">
        {positions.map((position) => (
          <Col lg="6">
            <PositionPanel playerList={players} position={position} />
          </Col>
        ))}
      </Row>
    </Col>
  </Row>
);

export default DraftBoard;
