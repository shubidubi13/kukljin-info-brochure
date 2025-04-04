
import { Phone } from 'lucide-react';

interface ContactButtonsProps {
  phoneNumber: string;
}

const ContactButtons = ({ phoneNumber }: ContactButtonsProps) => {
  // Format phone number for href (remove spaces and plus sign)
  const phoneHref = phoneNumber.replace(/\s+/g, '');
  
  return (
    <div className="flex items-center space-x-3">
      {/* Call Button */}
      <a 
        href={`tel:${phoneHref}`}
        className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
        aria-label="Call us"
      >
        <Phone size={24} className="text-primary" />
      </a>
      
      {/* Viber Button */}
      <a 
        href={`viber://chat?number=${phoneHref}`}
        className="bg-[#7360F2]/10 p-3 rounded-full hover:bg-[#7360F2]/20 transition-colors"
        aria-label="Contact us on Viber"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7360F2]">
          <path d="M11.7 5c-2.3-.1-4.3 1.8-4.5 4.2-.1 1.2-.1 2.4 0 3.6.1.7.3 1.3.6 1.8"/>
          <path d="M10 21c-1.5 0-2.2-.8-3-1.5-.8-.7-1.8-1.6-3-1.8-.5-.1-1.4-.2-2-.1L2 5.3c.6-.1 1.7-.3 2.5 0 1.5.5 2.3 1.5 3 2.3.7.7 1.3 1.5 2.4 1.5 1.4.1 2.2-1.1 2.2-2.2 0-2-.2-3.2.5-4.4.4-.7 1.5-1.2 2.2-1.4"/>
          <path d="M18.2 15.2c-.4.4-.8.8-1.3 1.2l-1.5.9a1.2 1.2 0 0 1-1.4-.3"/>
          <path d="M12 8.5a3 3 0 0 1 3 3"/>
          <path d="M15 8a5 5 0 0 1 5 5"/>
          <path d="M19.2 21.2c.9-.9 1.7-1.8 2.3-2.9a8 8 0 0 0 1.4-4.3c-.1-4-3.5-7.4-7.5-7.9"/>
        </svg>
      </a>
      
      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/${phoneHref.substring(1)}`}
        className="bg-[#25D366]/10 p-3 rounded-full hover:bg-[#25D366]/20 transition-colors"
        aria-label="Contact us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25D366]">
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
          <path d="M9 10a1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1"/>
          <path d="M13 10a1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1"/>
        </svg>
      </a>
    </div>
  );
};

export default ContactButtons;
