import React, { Component } from "react";

export default class Render extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, tel, email, place, desc, jobTitle } = this.props.personal || {};
    const { descripcion, places, date } = this.props.education || {};
    const { position, jobDesc, company, dateJob } = this.props.work || {};

    return (
      <div className="w-10/12 border sticky p-10">
        <div className="flex w-full items-end flex-col text-xs">
          <div className="flex text-xl">
            <p className="text-blue-400 pr-2 border-r-2 border-blue-400">
              {name}
            </p>
            <p className="text-blue-400 pl-2">{jobTitle}</p>
          </div>
          <p className="text-gray-300">
            Location: <span className="text-black font-bold">{place}</span>
          </p>
          <p className="text-gray-300">
            Telephone: <span className="text-black font-bold">{tel}</span>
          </p>
          <p className="text-gray-300">
            Email:
            <span className="text-black font-bold">{email}</span>
          </p>
        </div>
        <div className="mb-4">
          <h3 className="border-b text-xl border-black text-blue-400 mb-4">
            Personal Information
          </h3>
          <p className="text-sm">{desc}</p>
        </div>
        <div className="mb-4">
          <h3 className="border-b border-black text-blue-400 text-xl mb-4">
            Work Experience
          </h3>
          {this.props.workList.map((elem, index) => {
            return (
              <div className="flex flex-col mt-4" key={index}>
                <div className="flex justify-between mb-1">
                  <h4>{elem.position}</h4>
                  <div className="flex">
                    <p className="pr-2 border-r-2 border-black">{elem.company}</p>
                    <p className="ml-2">{elem.dateJob}</p>
                  </div>
                </div>
                <p className="text-sm">{elem.jobDesc}</p>
              </div>
            );
          })}
          <div className="flex flex-col mt-4">
            <div className="flex justify-between mb-1">
              <h4>{position}</h4>
              <div className="flex">
                <p className="pr-2 border-r-2 border-black">{company}</p>
                <p className="ml-2">{dateJob}</p>
              </div>
            </div>
            <p className="text-sm">{jobDesc}</p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="border-b text-xl border-black text-blue-400 mb-4">
            Education
          </h3>
          {this.props.educationList.map((elem, index) => {
            return (
              <div className="flex justify-between mt-4" key={index}>
                <p className="max-w-auto">{elem.descripcion}</p>
                <div className="flex">
                  <p className="pr-2 border-r-2 border-black">{elem.places}</p>
                  <p className="pl-2">{elem.date}</p>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between mt-4">
            <p className="max-w-auto">{descripcion}</p>
            <div className="flex">
              <p className="pr-2 border-r-2 border-black">{places}</p>
              <p className="pl-2">{date}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
