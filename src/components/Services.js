import ServiceCard from './ServiceCard';
import './Services.css';

const Services = () => {

    const services = [
        {
            image: "herancas.png",
            description: "Heranças Sucessões"
        },
        {
            image: "trabalho.png",
            description: "Direito do Trabalho"
        },
        {
            image: "urbanismo.png",
            description: "Urbanismo Predial"
        },
        {
            image: "notariado.png",
            description: "Notariado"
        },
        {
            image: "consultoria.png",
            description: "Consultoria Jurídica"
        }

    ]

    return (
        <>
            <div className="section-title"><h1>Serviços</h1></div>
            <div className="Services">

                <p><strong>Um Solicitador</strong> é um profissional liberal que faz consultoria jurídica e pode exercer o mandato judicial.</p>
                <p>A sua principal missão é representar empresas e cidadãos em tribunais, órgãos de administração pública ou outras entidades, tendo como principal objetivo <strong>defender os direitos daqueles que está a representar e aconselhar.</strong></p>
                <p>No nosso escritório especializamo-nos em:</p>

                <div className="card-container">
                    {services.map((service, index) => (<ServiceCard key={index} service={ service } />))
                    }
                    
                </div>
            </div>

        </>
    );
}

export default Services;