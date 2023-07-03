import '../css/TravelList.css'
export default function TravelList(props){
    return (
        <main className="list--container">
            <img src={props.image} className="list--img"/>
            <div className="list--contents">
            <svg xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 0 24 24" className="list--icon"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
            <span className="list--country">{props.country}</span><a href="#" className="list--gglink">View on Google Maps</a>
            <h1 className="list--title">{props.title}</h1>
            <h3 className="list--date">{props.datePlan}</h3>
            <p className="list--desc">{props.description}</p>
            </div>
        </main>
    )
}