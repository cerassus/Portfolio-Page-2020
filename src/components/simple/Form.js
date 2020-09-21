import React from "react";
import emailjs from 'emailjs-com';

const Form = () => {
    const [name, setName] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [text, setText] = React.useState("");
    const sendEmail = (e) => {
        e.preventDefault();
        const input_name = /^\w{3,}/.test(name) ? name : false;
        const input_mail = /^\w{1,}@\w{1,}\.\w{2,}$/.test(mail) ? mail : false;
        const input_text = /\w{3,}/.test(text) ? text : false;
        (!input_name || !input_mail || !input_text) ?
            alert("Typing Error: Type at least 3 characters!") :
            emailjs.send("cerassus.shared", "cerassus_template_0", {
                from_name: name,
                message: text,
                reply_to: mail,
            },"user_W8b53hqHp85rSGjVwF3x3")
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert("E-mail sent. Thank You!");
                }, function (error) {
                    console.log('FAILED...', error);
                    alert("Something went wrong. Please try again later or contact me directly - cerassus@outlook.com.");
                });
    }
    return (
        <form>
            <div className="forms-control">
                <label htmlFor="name">Your Name</label>
                <input onChange={(e) => setName(e.target.value)} required id="name" type="text" placeholder="John Smith" />
            </div>
            <div className="forms-control">
                <label htmlFor="mail">Your e-mail</label>
                <input onChange={(e) => setMail(e.target.value)} required id="mail" type="text" placeholder="example@webiste.com" />
            </div>
            <div className="forms-control">
                <label htmlFor="area">Description</label>
                <textarea onChange={(e) => setText(e.target.value)} required id="area" placeholder="Hello Michael!..." />
            </div>
            <button onClick={sendEmail} className="btn-contact" type="submit">Send</button>
        </form>
    )
}

export default Form;