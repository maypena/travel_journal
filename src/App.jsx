import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {
    const entries = data.map(
        entry => <Entry
            img={entry.img}
            country={entry.country}
            mapLink={entry.mapLink}
            city={entry.city}
            date={entry.date}
            text={entry.text}
        />
    )
    return (
        <>
            <Header />
            {entries}
        </>
    )
}