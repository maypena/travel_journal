export default function Entry(props) {
    return(
        <div className="entry-card">
            <div className="entry-image">
                <img className="entry-photo" src={props.entry.img.src} alt={props.entry.img.alt} />
            </div>
            <div>
                <div className="entry-title">
                    <img className="entry-avatar" src="src\assets\yellowpin.png" alt="Yellow pin" />
                    <span className="entry-country">{props.entry.country}</span>
                    <a className="entry-link" href={props.entry.mapLink}>View on Google Maps</a>
                </div>
                <div>
                    <p className="entry-city">{props.entry.city}</p>
                    <p className="entry-date">{props.entry.date}</p>
                    <p className="entry-content">{props.entry.text}</p>
                </div>
            </div>
        </div>
    )
}