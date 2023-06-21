import { useLocation, Link,createSearchParams } from 'react-router-dom';
import './DoctorList.css'; // import the CSS file

const DoctorList = () => {
    const location = useLocation();

    if (!location.state) {
        return <div>No search results found</div>;
    }

    const { results } = location.state;

    return (
        <div className="doctor-list">
            {results.map(doctor => (
                <div className="doctor-card" key={doctor._id}>
                    <img className="doctor-image" src={doctor.image} alt={doctor.name} />
                    <Link to={{
                        pathname: "/book-appointment",
                        search: `?${createSearchParams({
                            type: doctor._id
                        })}`
                        }}>
                        <button className="rend">Rendez-vous</button>
                    </Link>
                    <div className="doctor-info">
                        <h2 className="doctor-name">{doctor.name}</h2>
                        <p className="doctor-specialty">{doctor.specialty}</p>
                        <p className="doctor-location">{doctor.country}, {doctor.city}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DoctorList;
