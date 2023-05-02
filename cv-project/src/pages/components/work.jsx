import React, { Component } from "react";
import DeleteButton from "./delete";
import RenderWorkList from "./renderWorkList";

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.props.handleChange(name, value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit();
  };

  handleModalOpen = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { position, jobDesc, company, dateJob } = this.props.work;

    return (
      <div className="w-10/12 p-10">
        <h3 className="text-3xl mb-4">Work Experience</h3>
        <form>
          <input
            type="text"
            name="position"
            value={position}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6"
            placeholder="Job Position"
          ></input>
          <input
            type="text"
            name="jobDesc"
            value={jobDesc}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6"
            placeholder="Job Description"
          ></input>
          <input
            type="text"
            name="company"
            onChange={this.handleChange}
            value={company}
            className="w-full border-2 border-gray-600 mb-2 px-6"
            placeholder="Company Name"
          ></input>
          <input
            type="text"
            name="dateJob"
            onChange={this.handleChange}
            value={dateJob}
            className="w-full border-2 border-gray-600 mb-2 px-6"
            placeholder="Date"
          ></input>
        </form>
        <button className="bg-indigo-500 hover:bg-indigo-200 transition mr-8 rounded px-4 py-1" onClick={(e) => this.handleSubmit(e)}>
          Add
        </button>
        <DeleteButton
          handleModalOpen={this.handleModalOpen}
          id={this.props.id}
          work={this.props.work}
        ></DeleteButton>
        {this.state.showModal && (
          <RenderWorkList
            workList={this.props.workList}
            handleModalClose={this.handleModalClose}
            handleDelete={this.props.handleDelete}
            handleUpdate={this.props.handleUpdate}
            handleChange={this.handleChange}
            work={this.props.work}
          ></RenderWorkList>
        )}
      </div>
    );
  }
}
