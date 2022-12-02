import  "./Contacts-page.css"
import Input from '../../components/input/input';
import Button from "../../components/Button/Button";
import {useState} from "react";

function ContactsPage() {
  const[valid, setValid] = useState({
    nameRequired: true,
    emailRequired: true,
    emailPattern: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const regExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    const formData = new FormData(e.target);

    let flag = true;

    if (formData.get('name').length < 1) {
      setValid(valid => ({ ...valid, nameRequired: false }));
      flag = false;
    } else {
      setValid(valid => ({ ...valid, nameRequired: true }));
    }

    if (formData.get('email').length === 0) {
      setValid(valid => ({ ...valid, emailRequired: false }));
      flag = false;
    } else {
      setValid(valid => ({...valid, emailRequired: true }));
      if (!regExp.test(String(formData.get('email')).toLowerCase())) {
        setValid(valid => ({ ...valid, emailPattern: false }));
        flag = false;
      } else {
        setValid(valid => ({ ...valid, emailPattern: true }))
      }
    }

    if (flag) {
      console.log(Object.fromEntries(formData.entries()))
    }
  };

  return (
    <div className="container-form">
      <div className="contacts-newsletter">
        <h2>Feedback</h2>
        <form action="#" id="form" onSubmit={handleSubmit}>
          <label className="contacts-newsletter_label">Name</label>
          {valid.nameRequired ? null : <span className="error-message" id="errorMsgNameRequired">Fill in the field</span>}
          <Input name="name" type="text" placeholder="enter your full name" required autocomplete="off"/>
          <label className="contacts-newsletter_label">Email</label>
          {valid.emailRequired ? null : <span className="error-message" id="errorMsgEmailRequired">Fill in the field</span>}
          {valid.emailPattern ? null : <span className="error-message" id="errorMsgEmailPattern">Wrong email format</span>}
          <Input name="email" type="text" placeholder="enter your email" required autocomplete="off"/>
          <label className="contacts-newsletter_label">Comment</label>
          <textarea name="comment" placeholder="enter your comment"></textarea>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default ContactsPage;
