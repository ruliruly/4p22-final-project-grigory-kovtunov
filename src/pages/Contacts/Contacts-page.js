import  "./Contacts-page.css"
import Header from "../../components/Header/Header";
import Input from '../../components/input/input';
import Button from "../../components/Button/Button";
function ContactsPage() {
    return (
        <>
          <Header/>
          <h1>Contacts</h1>
        <div className="container-form"> 
        <div className="contacts-newsletter">
          <h2>Feedback</h2>
          <form action="/action_page.html" method="">
            <label for="name">Enter your name</label>
            <Input id="name" name="FIO" type="text" placeholder="Enter your full name..." />
            <label for="email">Enter your mail</label>
            <Input name="email" id="email" type="email" placeholder="email" />
            <label for="textarea">About Me</label>
            <textarea  id="textarea" name="textarea"></textarea>

            <Button>send in</Button> 
          </form>
        </div>
        </div> 
        </>
    )
};

export default ContactsPage;
