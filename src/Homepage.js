import React from "react";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div>
            <h1 className="display-4">Hello, welcome to Authenticator!</h1>
            <p>
            Authenticator is a simple web application developed to implement OAuth. In this project, I've used Firebase for authentication and ReactJS
            for developing the site. You can view the source code on my Github profile by clicking on the below button.
            </p>
            <p>
              <a className="btn btn-primary btn-lg" href="https://github.com/AVShankar/auth" target="_blank" role="button">
                View Code »
              </a>
            </p>
          </div>
        </div>
        <div class="container">
            <h5>View my other projects as well!</h5>
          <div className="row">
            <div className="col-md-4">
              <h2>Bookmark App</h2>
              <p>
              Bookmark app is a web application done using ReactJS and Firebase for Authentication. 
              User can maintain their bookmarks using this app.
              </p>
              <p>
                <a className="btn btn-secondary" href="https://github.com/AVShankar/bookmark" target="_blank" role="button">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h2>My Todo</h2>
              <p>
              My Todo is a React based web application developed for maintaining one's dailys tasks. 
              Web application will look like:
              </p>
              <p>
                <a className="btn btn-secondary" href="https://github.com/AVShankar/My_Todo" target="_blank" role="button">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h2>React Routing</h2>
              <p>
              Built one of my favorite actor's Instagram home page using React and 
              React router to switch between tabs without rendering the whole page.
              </p>
              <p>
                <a className="btn btn-secondary" href="https://github.com/AVShankar/React_routing" target="_blank" role="button">
                  View details »
                </a>
              </p>
            </div>
          </div>
          <hr/>
          </div>
        </div>
    );
  }
}

export default Homepage;
