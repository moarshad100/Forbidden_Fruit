import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import MemberList from "../components/memberList";
import { QUERY_SINGLE_MEMBER } from "../utils/queries";

const Member = () => {
  const { memberId } = useParams();
  const { data } = useQuery(QUERY_SINGLE_MEMBER, {
    variables: { memberId: memberId },
  });
  const members = data?.member || {};
  console.log(members);
  return (
    <div style={{ textTransform: "uppercase" }}>
      <h2>{members.name}'s family</h2>
      <h4 className="card-header">Father: {members.father}</h4>
      <h4 className="card-header">Mother: {members.mother}</h4>
      <h4 className="card-header">Spouse: {members.spouse}</h4>
      <h4 className="card-header">Child: {members.child}</h4>
    </div>
  );
};

export default Member;
