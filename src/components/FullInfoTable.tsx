import React from "react";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { PlayerInfo } from "../Interfaces";

type FullInfoProps = {
  showDelete: boolean;
  showPosition: boolean;
  playerList: PlayerInfo[];
};

const FullInfoTable = (props: FullInfoProps) => (
  <Table responsive>
    <thead>
      <tr>
        <th>Player</th>
        <th>Team</th>
        {props.showPosition && <th>P</th>}
        <th>Stmr</th>
        <th>Zp</th>
        <th>%</th>
        {props.showDelete && <th></th>}
      </tr>
    </thead>
    <tbody>
      {props.playerList.map((player) => (
        <tr>
          <th scope="row">
            <div>{player.name.slice(0, 20)}</div>
          </th>
          <td>{player.team}</td>
          {props.showPosition && <td>{player.position}</td>}
          <td>{player.steamer}</td>
          <td>{player.zips}</td>
          <td>{player.percentage}</td>
          {props.showDelete && (
            <td>
              <FontAwesomeIcon icon={faTrashAlt} />
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </Table>
);

export default FullInfoTable;
