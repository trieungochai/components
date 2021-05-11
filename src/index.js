import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

// Live Reloading
if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Rei"
          timeAgo="Today at 4:45PM"
          content="Nice blog post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

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
