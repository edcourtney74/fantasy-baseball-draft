import React from "react";
import { Row } from "reactstrap";
import { PlayerInfo } from "../Interfaces";
import FullInfoTable from "./FullInfoTable";

type SearchResultsProps = {
  playerList: PlayerInfo[];
};

const SearchResults = (props: SearchResultsProps) => (
  <Row>
    <FullInfoTable
      showDelete={false}
      showPosition={true}
      playerList={props.playerList}
    />
  </Row>
);

export default SearchResults;
