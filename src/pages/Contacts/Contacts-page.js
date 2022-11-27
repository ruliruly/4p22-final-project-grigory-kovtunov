import  "./Contacts-page.css"
import Header from "../../components/Header/Header";
import Input from '../../components/input/input';

function ContactsPage() {
    return (
        <>
          <Header/>
          <h1>Contacts</h1>
          <div className="app-newsletter">
          <h2>Subscribe to company news</h2>
          <Input name="email" id="email" type="email" placeholder="email" />
          <button>Subscribe</button> 
        </div>
        </>
    )
};

export default ContactsPage;
