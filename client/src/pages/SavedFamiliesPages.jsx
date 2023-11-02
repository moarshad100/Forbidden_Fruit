import { useQuery } from "@apollo/client";

import MemberList from "../components/memberList";
import { QUERY_MEMBERS } from "../utils/queries";

export default function SavedFamily() {
  const { data } = useQuery(QUERY_MEMBERS);
  const members = data?.allMembers || [];
  console.log(members);
  return (
    <section>
      <h1>You currently have {members.length} families</h1>
      <div>{<MemberList members={members} />}</div>
    </section>
  );
}
