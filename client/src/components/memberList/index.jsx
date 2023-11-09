import { useState } from "react";
import Member from "../../pages/singleFamily";

const MemberList = ({ members }) => {
  const [hover, setHover] = useState(false);
  if (!members.length) {
    return <h3>There is No Family</h3>;
  }

  return (
    <>
      <div className="button-display">
        {members &&
          members.map((member) => (
            <div key={member._id}>
              <button onClick={() => setHover(true)}>
                {member.name} <br />
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default MemberList;
