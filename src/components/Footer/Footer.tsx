import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#184F34] text-white">
      {/* Stay Connected Section */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[4px] text-[#E8B12D]">
              Stay Connected
            </p>

            <h2 className="mt-4 text-4xl font-serif leading-tight md:text-3xl">
              Be Part of the Umuchukwu Community Resource and Youth Development Center Journey.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Stay informed about project milestones, fundraising updates, and
              community events. Together, we can build a lasting legacy for
              future generations.
            </p>

            
          </div>

          <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-md">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-[#E8B12D]" size={20} />

                <div>
                  <p className="font-medium">Address</p>

                  <p className="text-white/80">
                    Umuchukwu Community, Obowo LGA, Imo State, Nigeria
                  </p>
                </div>
              </div>

           

              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-[#E8B12D]" size={20} />

                <div>
                  <p className="font-medium">Email</p>

                  <p className="text-white/80">
                    info@umuchukwucommunity.org
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-sm text-white/70 md:flex-row">
          <p>
            © {new Date().getFullYear()} Umuchukwu Community. All rights
            reserved.
          </p>

          <p>Built with transparency for the Umuchukwu Civic Hall Project.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;