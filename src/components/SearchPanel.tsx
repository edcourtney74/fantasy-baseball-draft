import React from "react";
import { Row, Col } from "reactstrap";
import { PlayerInfo } from "../Interfaces";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

type SearchPanelProps = {
  playerList: PlayerInfo[];
};

const SearchPanel = (props: SearchPanelProps) => {
  return (
    <Row className="pt-2 pl-2 pr-2">
      <Col lg="6">
        <SearchInput />
      </Col>
      <Col lg="6">
        <SearchResults playerList={props.playerList} />
      </Col>
    </Row>
  );
};
export default SearchPanel;
