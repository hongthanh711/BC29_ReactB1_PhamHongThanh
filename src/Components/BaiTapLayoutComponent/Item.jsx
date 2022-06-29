import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="row pb-5 bg-light">
        <div className="card col-6">
          <div className="card-body">
            <div className="icon">
              <i className="fa-solid fa-ethernet" />
            </div>
            <h2>Fresh new layout</h2>
            <p>
              With Bootstrap 5, we've created a fresh new layout for this
              template!
            </p>
          </div>
        </div>

        <div className="card col-6">
          <div className="card-body">
            <div className="icon">
              <i className="fa-solid fa-download"></i>
            </div>
            <h2>Free to download</h2>
            <p>
              As always, Start Bootstrap has a powerful collectin of free
              templates.
            </p>
          </div>
        </div>
        <div className="card col-6">
          <div className="card-body">
            <div className="icon">
              <i className="fa-solid fa-file-lines"></i>
            </div>
            <h2>Jumbotron hero header</h2>
            <p>
              The heroic part of this template is the jumbotron hero header!
            </p>
          </div>
        </div>
        <div className="card col-6">
          <div className="card-body">
            <div className="icon">
              <i className="fa-brands fa-bootstrap"></i>
            </div>
            <h2>Feature boxes</h2>
            <p>
              We've created some custom feature boxes using Bootstrap icons!
            </p>
          </div>
        </div>
        <div className="card col-6">
          <div className="card-body">
            <div className="icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <h2>Simple clean code</h2>
            <p>
              We keep our dependencies up to date and squash bugs as they come!
            </p>
          </div>
        </div>
        <div className="card col-6">
          <div className="card-body">
            <div className="icon">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <h2>A name you trust</h2>
            <p>
              Start Bootstrap has been the leader in free Bootstrap templates
              since 2013!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
