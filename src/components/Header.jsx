import NavigationMenu from "./NavigationMenu";

export default function Header () {
    return (
        <section className="header">
                <header>
                    <h1>Birdwatching</h1>
                    <img src="dove.png" alt="a simple dove logo" />
                </header>

                <NavigationMenu />
        </section>
    );
}