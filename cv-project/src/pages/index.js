import React, { Component } from "react";
import General from "./components/general";
import Education from "./components/education";
import Render from "./components/render";
import Work from "./components/work";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: "",
        tel: "",
        email: "",
        place: "",
        desc: "",
        jobTitle: ""
      },
      education: {
        descripcion: "",
        places: "",
        date: "",
      },
      educationList: [],
      work: {
        position: "",
        jobDesc: "",
        company: "",
        dateJob: "",
      },
      workList: []
    };
  }

  handleInfoChange = (name, value) => {
    this.setState((prevState) => ({
      personal: {
        ...prevState.personal,
        [name]: value,
      },
    }));
  };

  handleEducationChange = (name, value) => {
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        [name]: value,
      },
    }));
  };

  handleWorkChange = (name, value) => {
    this.setState((prevState) => ({
      work: {
        ...prevState.work,
        [name]: value,
      },
    }));
  };
  
  handleDelete = (id) => {
    const newList = this.state.educationList.filter(
      (elem, index) => index !== id
    );
    this.setState({
      educationList: newList,
    });
  };

  handleDeleteWork = (id, e) => {
    e.preventDefault();
    const newList = this.state.workList.filter(
      (elem, index) => index !== id
    );
    this.setState({
      workList: newList,
    });
  }
  handleDeleteEducation = (id, e) => {
    e.preventDefault();
    const newList = this.state.educationList.filter(
      (elem, index) => index !== id
    );
    this.setState({
      educationList: newList,
    });
  }

  handleUpdateWork = (id, e) => {
    e.preventDefault();
    if(!Object.entries(this.state.work).every(([key, value]) => !!value)) return;
    const updatedList = this.state.workList.slice();
    updatedList[id] = this.state.work;
    this.setState({
      work: {
        position: "",
        jobDesc: "",
        company: "",
        dateJob: ""
      },
      workList: updatedList,
    });
  }

  handleUpdateEducation = (id, e) => {
    e.preventDefault();
    if(!Object.entries(this.state.education).every(([key, value]) => !!value)) return;
    const updatedList = this.state.educationList.slice();
    updatedList[id] = this.state.education;
    this.setState({
      education: {
        descripcion: "",
        places: "",
        date: "",
      },
      educationList: updatedList,
    });
  }

  handleSubmitEducation = () => {
    if(!Object.entries(this.state.education).every(([key, value]) => !!value)) return;
    const newList = [...this.state.educationList, this.state.education];
    this.setState({
      education: {
        descripcion: "",
        places: "",
        date: "",
      },
      educationList: newList,
    });
  };

  handleSubmitWork = () => {
    if(!Object.entries(this.state.work).every(([key, value]) => !!value)) return;
    const newList = [...this.state.workList, this.state.work];
    this.setState({
      work: {
        position: "",
        jobDesc: "",
        company: "",
        dateJob: ""
      },
      workList: newList,
    });
  };

  render() {
    return (
      <div className="container mx-auto mt-10 gap-14 w-9/12 h-auto flex flex-col lg:flex-row">
        <div className="w-10/12 h-auto shadow-xl  ">
          <General
            personal={this.state.personal}
            handleChange={this.handleInfoChange}
          ></General>
          <Work
            work={this.state.work}
            handleSubmit={this.handleSubmitWork}
            handleChange={this.handleWorkChange}
            handleDelete={this.handleDeleteWork}
            workUpdate={this.state.workUpdate}
            workList={this.state.workList}
            handleUpdate={this.handleUpdateWork}
          ></Work>
          <Education
            education={this.state.education}
            educationList={this.state.educationList}
            handleChange={this.handleEducationChange}
            handleSubmit={this.handleSubmitEducation}
            handleDelete={this.handleDeleteEducation}
            handleUpdate={this.handleUpdateEducation}
          ></Education>
             <input type='text' className="w-full px-6"></input>
        </div>
        <Render
          educationList={this.state.educationList}
          personal={this.state.personal}
          workList={this.state.workList}
          education={this.state.education}
          work={this.state.work}
        ></Render>
      </div>
    );
  }
}
