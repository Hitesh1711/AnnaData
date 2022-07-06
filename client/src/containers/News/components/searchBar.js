import React from "react";
import { Form } from "semantic-ui-react";
import { Button, Input } from "../../../components/commonStyles";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTopic: "" };
  }

  handleChange = (event) => {
    this.setState({ searchTopic: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchForTopic(this.state.searchTopic);
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Input
                placeholder="Search topic"
                name="topic"
                value={this.state.searchTopic}
                onChange={this.handleChange}
                style={{
                  marginTop: "11px",
                  marginRight: "11px",
                }}
              />
              <Button type="submit" color="green">
                Search
              </Button>
            </div>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
