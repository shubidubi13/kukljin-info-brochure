
import { Phone, Call, Viber, Whatsapp } from 'lucide-react';

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
        <Call size={24} className="text-primary" />
      </a>
      
      {/* Viber Button */}
      <a 
        href={`viber://chat?number=${phoneHref}`}
        className="bg-[#7360F2]/10 p-3 rounded-full hover:bg-[#7360F2]/20 transition-colors"
        aria-label="Contact us on Viber"
      >
        <Viber size={24} className="text-[#7360F2]" />
      </a>
      
      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/${phoneHref.substring(1)}`}
        className="bg-[#25D366]/10 p-3 rounded-full hover:bg-[#25D366]/20 transition-colors"
        aria-label="Contact us on WhatsApp"
      >
        <Whatsapp size={24} className="text-[#25D366]" />
      </a>
    </div>
  );
};

export default ContactButtons;
