import './Location.css';
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";


const Location = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDaBCunwVdZe2XCrj2-PxBDhWh7v0U7m7E"
    });

    if (!isLoaded) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <>
            <div className="section-title"><h1>Localização</h1></div>
            <div className="Localizacao">

                <div className="map">
                    <GoogleMap zoom={15} center={{ lat: 37.032373, lng: -7.837158 }} mapContainerClassName="map-container">
                        <MarkerF position={{ lat: 37.032373, lng: -7.837158 }} />
                    </GoogleMap>
                </div>

                <div className="address">
                    <h2>Sandra Joaquim - Solicitadora</h2>
                    <hr />
                    {/* <i class="fa-solid fa-location-dot"></i><br/> */}
                    <p>Rua Dr António Malafaia Freire Teles 20B</p>
                    <p>8700-447 Olhão</p>
                    <p>Portugal</p>

                    <hr />

                    <p>
                    <i className="fa-solid fa-square-envelope"></i>
                    <span style={{marginLeft: 10}}></span>
                    <span>sandrajoaquim.solicitadora@gmail.com</span>
                    </p>
                    <hr />
                    
                    <p>
                    <i className="fa-solid fa-square-phone"></i>
                    <span style={{marginLeft: 10}}></span>
                    <span>+351 911 016 481</span>
                    </p>


                </div>

            </div>


        </>
    );
}

export default Location;