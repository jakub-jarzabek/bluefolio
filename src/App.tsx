import { useState } from "react";
import { FormModal } from "./components";
function App() {
  return (
    <div>
      <FormModal
        setOpen={()=>null}
        title="xdddd"
        description="xddddddddddddddddddddd dddddddddddddddddddddddddddd ddddddddddddddddddddddd dddddddddddddddddddddddddddd"
        imageUrl="https://streamsentials.com/wp-content/uploads/2021/01/pepehands-transparent-pic.png"
        url="https://google.com"
      />
    </div>
  );
}

export default App;
