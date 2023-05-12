import './About.css';

const About = () => {
    return ( 
        <>
        <div className="section-title"><h1>Sobre</h1></div>
        <div className='About'>
            <div className="picture">
                <img src="/images/picture.jpg" alt="Sandra Joaquim" width='100%' />
            </div>
            <div className="description">
                <h2>Percurso Profissional</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum nulla sit amet ante feugiat sagittis. Morbi libero neque, malesuada nec odio placerat, feugiat mattis nunc. Vivamus magna ex, aliquet nec placerat non, varius eget mauris. Nunc neque dui, placerat non volutpat ac, dictum vel libero. Phasellus consectetur risus quis facilisis sodales.</p>
                <h2>Formação Académica</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum nulla sit amet ante feugiat sagittis. Morbi libero neque, malesuada nec odio placerat, feugiat mattis nunc. Vivamus magna ex, aliquet nec placerat non, varius eget mauris. Nunc neque dui, placerat non volutpat ac, dictum vel libero. Phasellus consectetur risus quis facilisis sodales.</p>
            </div>
        </div>
        </>

     );
}
 
export default About;