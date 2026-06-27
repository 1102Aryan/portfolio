export default function Contact() {
  return (
    <section className="contact">
      <div className="section-inner glass-section">
        <h1>You can <span>Contact</span> me here!</h1>
        <form action="https://api.web3forms.com/submit" method="POST">
          <div className="input-group">
            <div className="input-box">
              <input type="hidden" name="access_key" value="ac21949b-e1a9-49bd-8312-564185af18eb" />
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="input-box">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <div className="input-group-2">
              <textarea name="message" placeholder="Your message" rows="8" required></textarea>
              <input type="submit" value="Send Message" className="btn" />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
