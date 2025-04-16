import React from "react";

export default function BlogContent(props) {
  if (!props.isPublished) {
    return null;
  }
  return (
    <div>
      <h1>{props.articleText}</h1>
      <p>{props.minutesToRead} Minutes to read</p>
    </div>
  );
}
