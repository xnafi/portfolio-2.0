import AwesomeService from "@/components/view/AwesomeService/AwesomeService";
import Banner from "@/components/view/Banner/Banner";
import Intro from "@/components/view/Intro/Intro";
import ShowCase from "@/components/view/ShowCase/ShowCase";


export default function HomePage() {
  return (
    <div>
      <Banner />
      <ShowCase />
      <AwesomeService />
      <Intro />
      
    </div>
  );
}
