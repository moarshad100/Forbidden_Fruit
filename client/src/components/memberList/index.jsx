import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_MEMBERS } from "../../utils/mutations";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const MemberList = ({ members }) => {
  const [removeMemberMutation, { error }] = useMutation(REMOVE_MEMBERS);

  const handleRemoveMember = async (memberId) => {
    try {
      const { data } = await removeMemberMutation({
        variables: {
          memberId: memberId,
        },
      });
      console.log("Member removed:", data);
    } catch (error) {
      console.error("Error removing member:", error.message);
      console.log(memberId);
    }
  };

  if (!members.length) {
    return <h3>There is No Family</h3>;
  }

  return (
    <>
      <div className="button-display">
        {members.map((member) => (
          <div key={member._id}>
            <Link to={`/member/${member._id}`}>
              <button>
                {member.name} <br />
              </button>
            </Link>
            <DeleteIcon onClick={() => handleRemoveMember(member._id)} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MemberList;
