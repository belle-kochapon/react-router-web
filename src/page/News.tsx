import { useParams } from "react-router-dom";

function News() {
    // const { Parameter from App.tsx, ":xx" }
        // 1 parameter : const { slug } = useParams();
        // 2+ parameters : const { slug, id } = useParams();
  const { slug, id } = useParams();
  return (
    <>
        <h1>News</h1>
        <h2>{slug}</h2>
        <h3>{id}</h3>
    </>
  )
}

export default News;