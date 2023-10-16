import WelcomeText from "./WelcomeText";
import ImageSideBar from "./ImageSideBar";

export default function MainContaints() {
    return (
      <main>
        <section className="section">
          <div className="container">
            <WelcomeText />
            <ImageSideBar />
          </div>
        </section>
      </main>
    );
  }