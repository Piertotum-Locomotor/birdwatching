import WelcomeText from "./WelcomeText";
import ImageSideBar from "./ImageSideBar";

export default function MainContaints() {
    return (
      <main>
        <section className="main">
            <WelcomeText />
            <ImageSideBar />
        </section>
      </main>
    );
  }