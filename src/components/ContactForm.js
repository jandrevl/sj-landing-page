import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {

    const [formData, setFormData] = useState({contactName:'', email:'', phone:'', subject:''});
    var [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        
        console.log(formData);
        
        if (formData.contactName !== '' && 
        formData.email !== '' && 
        formData.subject !== '') {
            setIsFormValid(true);
        }

        console.log('isFormValid is: ' + isFormValid);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('after submitting the formData is')
        console.log(formData);
        setFormData({contactName:'', email:'', phone:'', subject:''})
        setIsFormValid(false);
        alert('Pedido de contacto enviado');
    }



    return ( 
        <>
        <div className="section-title"><h1>Contacto</h1></div>

        <div className="ContactForm">
            <p>Se preferir, preencha o formulário abaixo indicando o seu nome, contacto e uma breve descrição do assunto</p>
            <p>Entraremos em contacto consigo com a maior rapidez possível.</p>

            <div className="form-container">

                <form onSubmit={handleSubmit}>

                    <input type="text" 
                    name='contactName' 
                    placeholder='Nome*' 
                    value={formData.contactName} 
                    onChange={handleChange} 
                    
                     />

                    <input type="email" 
                    name='email' 
                    placeholder='eMail*' 
                    value={formData.email} 
                    onChange={handleChange} />

                    <input type="text" 
                    name='phone' 
                    placeholder='Telefone' 
                    value={formData.phone} 
                    onChange={handleChange} />

                    <textarea type="text" 
                    name='subject' 
                    placeholder='Descrição do assunto*' 
                    value={formData.subject} 
                    onChange={handleChange} />

                    <button className={isFormValid? 'active-button' : 'inactive-button'} disabled={!isFormValid} type='submit'>Enviar pedido de contacto</button>

                </form>

            </div>


        </div>
        
        </>
     );
}
 
export default ContactForm;