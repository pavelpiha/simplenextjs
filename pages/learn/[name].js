import { useRouter } from "next/router";

import topics from "../api/topics";

export default function Learn() {
  const router = useRouter();
  const { name } = router.query;
  const topic = topics.find((element) => element.id === name);
  return (
    <>
      <div>learn {topic?.id} </div>
    </>
  );
}
