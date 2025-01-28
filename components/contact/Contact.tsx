import ContactTitle from "./ContactTitle";
import ContactForm from "./ContactForm";
import ContactSocial from "./ContactSocial";

export default function Contact() {
  return (
    <div
      id="contact"
      className="relative h-[800px] bg-primary"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[800px] w-full">
        <div className="container mx-auto">
          <ContactTitle title="Contact" />
          <ContactForm />
          <ContactSocial />
        </div>
      </div>
    </div>
  );
}
