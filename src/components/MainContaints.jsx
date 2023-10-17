import WelcomeText from "./WelcomeText";
import ImageSideBar from "./ImageSideBar";

export default function MainContaints() {
    return (
      <main>
        <section className="main">
          <div className="main">
            <WelcomeText />
            <ImageSideBar />
          </div>
        </section>
      </main>
    );
  }