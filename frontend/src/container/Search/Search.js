import React from "react";

export default function Search(props) {
  return (
    <div>
      <form>
        <input type="text" onChange={props.onChange} />
      </form>
    </div>
  );
}
