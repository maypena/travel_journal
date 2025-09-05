export default function Entry(props) {
    return(
        <div className="entry-card">
            <div className="entry-image">
                <img className="entry-photo" src={props.img.src} alt={props.img.alt} />
            </div>
            <div>
                <div className="entry-title">
                    <img className="entry-avatar" src="src\assets\yellowpin.png" alt="Yellow pin" />
                    <span className="entry-country">{props.country}</span>
                    <a className="entry-link" href={props.mapLink}>View on Google Maps</a>
                </div>
                <div>
                    <p className="entry-city">{props.city}</p>
                    <p className="entry-date">{props.date}</p>
                    <p className="entry-content">{props.text}</p>
                </div>
            </div>
        </div>
    )
}