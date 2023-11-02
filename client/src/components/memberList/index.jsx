import { useState } from "react";

const MemberList = ({ members }) => {
  const [hover, setHover] = useState(false);
  if (!members.length) {
    return <h3>There is No Family</h3>;
  }

  return (
    <>
      <div className="button-display">
        {members.map((member) => (
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
