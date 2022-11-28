import  "./Contacts-page.css"
import Input from '../../components/input/input';
import Button from "../../components/Button/Button";

function ContactsPage() {
    return (
        <div className="container-form"> 
          <div className="contacts-newsletter">
            <h2>Feed back</h2>
            <form action="/action_page.html" method="">
              <label className="contacts-newsletter_label" for="name">Enter your name</label>
              <Input id="name" name="FIO" type="text" placeholder="Enter your full name" />
              <label className="contacts-newsletter_label" for="email">Enter your mail</label>
              <Input name="email" id="email" type="email" placeholder="email" />
              <label className="contacts-newsletter_label" for="textarea">About Me</label>
              <textarea  id="textarea" name="textarea" placeholder="About myself ..."></textarea>
              <Button>send in</Button> 
            </form>
          </div>
        </div> 
    )
};

export default ContactsPage;
