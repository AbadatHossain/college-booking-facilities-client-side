import Misson from "../../Misson/Misson";
import PopularMenu from "../../PopularMenu/PopularMenu";
import Banner from "../Banner/Banner";
import Progress from "../Progress/Progress";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Progress></Progress>
      <PopularMenu></PopularMenu>
      <Misson></Misson>
    </div>
  );
};

export default Home;
