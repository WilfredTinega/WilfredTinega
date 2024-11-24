import React from 'react'

export default function Contacts() {
  const [result, setResult] = React.useState("");

  const Message = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    const apiKey = import.meta.env.VITE_ACCESS_KEY;

    if (!apiKey) {
      console.error("API Key not found!");
      setResult("API Key Error. Check configuration.");
      return;
    }

    formData.append("access_key", apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message was Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  
  return (
    <div className='contact-page'>
      <div className="left">
        <div>
          <h1><span>Get in Touch</span></h1>
          <hr />
        </div>
        
        <form onSubmit={Message} >
          <div className='name-email'>
            <input type="text" name="Name" id="name" placeholder='Your Name' required/>
            <input type="email" name="Email" id="email" placeholder='Your Email' required/>
          </div>
          <textarea name="Message" id="message" placeholder='Your message here...' required></textarea>
          <div className='results'>{result}</div>
          <input type="submit" className='submit' />
        </form>     
      </div>
    </div>
  )
}
