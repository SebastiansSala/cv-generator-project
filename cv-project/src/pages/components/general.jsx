import React, { Component } from "react";

export default class General extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.props.handleChange(name, value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {

    const { name, tel, email, place, desc, jobTitle } = this.props.personal;

    return (
      <div className="w-10/12 p-10">
        <h3 className="text-3xl mb-4">Personal Information</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6 rounded"
            placeholder="Full Name"
          ></input>
          <input
            type="text"
            name="tel"
            value={tel}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6 rounded"
            placeholder="Telephone"
          ></input>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6 rounded"
            placeholder="Email"
          ></input>
          <input
            type="text"
            name="place"
            value={place}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6 rounded"
            placeholder="Direction"
          ></input>
          <input
            type="text"
            name="jobTitle"
            value={jobTitle}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6 rounded"
            placeholder="Job Title"
          ></input>
          <input
            type="text"
            name="desc"
            value={desc}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 px-6 py-8 rounded"
            placeholder="Personal Description"
          ></input>
        </form>
      </div>
    );
  }
}
