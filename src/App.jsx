import Header from "./components/Header"
import Entry from "./components/Entry"

export default function App() {
    return (
        <>
            <Header />
            <Entry
                img={{
                    src: "src/assets/pr.png",
                    alt: "Beach in Puerto Rico"
                }}
                country="Puerto Rico"
                city="San Juan"
                mapLink="https://maps.app.goo.gl/igTTtzqrA5j2gu2U8"
                date="10 Jun 2021 - 12 Jun, 2021"
                text="Island of Enchantment—in Spanish, Isla del Encanto. 
                It’s Puerto Rico’s nickname for good reason. 
                Sandy beaches, palm trees, and tropical breezes make it a 
                favorite getaway for the sun-and-surf crowd. Rugged mountains 
                and verdant rainforest attract adventure travelers. 
                Lavish hotels with oceanside golf courses embrace vacationers who crave luxury."
            />
        </>
    )
}