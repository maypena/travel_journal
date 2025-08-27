export default function Entry() {
    return(
        <div className="entry-card">
            <div className="entry-image">
                <img className="entry-photo" src="src\assets\pr.png" alt="Beach in Puerto Rico" />
            </div>
            <div className="entry-info">
                <div className="entry-title">
                    <img className="entry-avatar" src="src\assets\yellowpin.png" alt="Yellow pin" />
                    <span className="entry-country">PUERTO RICO</span>
                    <a className="entry-link" href="https://maps.app.goo.gl/igTTtzqrA5j2gu2U8">View on Google Maps</a>
                </div>
                <div className="entry-details">
                    <p className="entry-city">San Juan</p>
                    <p className="entry-date">12 Jan 2023 - 24 Jan, 2023</p>
                    <p className="entry-content">Island of Enchantment—in Spanish, Isla del Encanto. It’s Puerto Rico’s nickname for good reason. Sandy beaches, palm trees, and tropical breezes make it a favorite getaway for the sun-and-surf crowd. Rugged mountains and verdant rainforest attract adventure travelers. Lavish hotels with oceanside golf courses embrace vacationers who crave luxury.</p>
                </div>
            </div>
        </div>
    )
}