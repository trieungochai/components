import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Rei"
        timeAgo="Today at 4:45PM"
        content="Nice blog post"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Kai"
        timeAgo="Today at 2:20AM"
        content="I like the subject"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Futoi"
        timeAgo="Today at 5:00PM"
        content="I like the writing"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
