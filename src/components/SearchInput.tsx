import React from "react";
import { Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const SearchInput = () => {
  return (
    <Form className="pl-2 pr-3">
      <FormGroup>
        <Row>
          <Label for="playerName" className="mr-2" id="player-search">
            Player Name
          </Label>
          <Input
            type="text"
            bsSize="sm"
            name="player-search"
            id="player-search"
          />
        </Row>
        <Row>
          <Button size="sm" className="mt-1">
            Submit
          </Button>
        </Row>
      </FormGroup>
    </Form>
  );
};
export default SearchInput;
