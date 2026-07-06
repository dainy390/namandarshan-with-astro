import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-primary to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl font-display">ॐ</div>
        <div className="absolute bottom-10 right-10 text-9xl font-display">🙏</div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-display opacity-10">ॐ</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Begin Your <br />Spiritual Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Book your divine darshan, puja services, or yatra package today and experience
            seamless spiritual experiences across India's sacred destinations.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <Link to="/darshan" className="w-full md:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold gap-2 px-8 h-14 text-lg"
              >
                Get Darshan Assistance
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a href="tel:+919311973199" className="flex-1 sm:flex-none">
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="w-full border-white/50 text-white hover:bg-white/10 gap-2 h-14"
                >
                  <Phone className="w-4 h-4" />
                  Call: +91 93119 73199
                </Button>
              </a>
              <a
                href="https://wa.me/918796973199"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none"
              >
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="w-full border-white/30 bg-white/5 text-white hover:bg-white/20 gap-2 h-14"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412 0 12.048c0 2.12.554 4.189 1.605 6.006L0 24l6.117-1.605a11.803 11.803 0 005.925 1.585h.005c6.637 0 12.046-5.412 12.05-12.048a11.82 11.82 0 00-3.414-8.52z" />
                  </svg>
                  WhatsApp: +91 87969 73199
                </Button>
              </a>
            </div>
          </div>

          {/* Email Contacts */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 mb-8 text-white/90">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>
                For Grievance:{" "}
                <a
                  href="mailto:support@namandarshan.com"
                  className="underline hover:text-white"
                >
                  support@namandarshan.com
                </a>
              </span>
            </div>

            <div className="hidden md:block text-white/40">|</div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>
                For Sales:{" "}
                <a
                  href="mailto:sales@namandarshan.com"
                  className="underline hover:text-white"
                >
                  sales@namandarshan.com
                </a>
              </span>
            </div>
          </div>

          <p className="text-white/70 text-sm">
            🛡️ 100% Secure Booking • ✨ Instant Confirmation • 📞 24/7 Support
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
