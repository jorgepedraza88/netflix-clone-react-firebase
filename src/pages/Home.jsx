import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId="1" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowId="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowId="3" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowId="4" title="Action" fetchURL={requests.requestAction} />
      <Row rowId="5" title="Upcoming" fetchURL={requests.requestUpcoming} />
    </>
  );
};

export default Home;
