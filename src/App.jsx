import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {
    const entries = data.map(
        entry => <Entry
                    key={entry.id}
                    entry={entry}
                />
    )
    return (
        <>
            <Header />
            {entries}
        </>
    )
}