import "../App.css";
import New_Releases from "../components/Home/New_Releases";
import Popular from "../components/Home/Popular";
import Top_Rated from "../components/Home/Top_Rated";
import Upcoming from "../components/Home/Upcoming";

function Home() {
  return (
    <div className="overflow-x-auto p-4">
      <New_Releases />
      <Top_Rated />
      <Popular />
      <Upcoming />
    </div>
  );
}

export default Home;
