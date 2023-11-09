import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import MemberList from "../components/memberList";
import { QUERY_SINGLE_MEMBER } from "../utils/queries";

const Member = () => {
  const { memberId } = useParams();
  const { data } = useQuery(QUERY_SINGLE_MEMBER, {
    variables: { memberId: memberId },
  });
  const singleMember = data?.singleMember || [];
  console.log(singleMember);
  return (
    <div>
      <h2 className="card-header">{singleMember.name}</h2>
    </div>
  );
};

export default Member;
