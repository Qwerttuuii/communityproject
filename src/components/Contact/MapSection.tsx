import {
  MapPin,
  
  Navigation,
  Mail,
} from "lucide-react";

const MapSection = () => {
  return (
    <section className="bg-[#FAF8F4] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="uppercase tracking-[5px] text-[#E8B12D]">
            Visit Us
          </p>

          <h2 className="mt-4 font-serif text-5xl text-[#184F34]">
            Find Our Community
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            You're welcome to visit the proposed Civic Hall project site,
            inspect the work in progress and meet members of the committee.
          </p>

        </div>

        <div className="overflow-hidden rounded-[40px] bg-white shadow-2xl">

          <div className="grid lg:grid-cols-[2fr_1fr]">

            {/* MAP */}

            <iframe
              title="Umuchukwu Community"
              className="h-[500px] w-full"
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Obowo%20LGA%20Imo%20State&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />

            {/* INFO */}

            <div className="flex flex-col justify-center p-10">

              <div className="flex items-start gap-4">

                <MapPin
                  size={24}
                  className="mt-1 text-[#184F34]"
                />

                <div>

                  <h3 className="text-2xl font-semibold text-[#184F34]">
                    Address
                  </h3>

                  <p className="mt-3 leading-8 text-gray-600">
                    Umuchukwu Community
                    <br />
                    Obowo LGA
                    <br />
                    Imo State
                    <br />
                    Nigeria
                  </p>

                </div>

              </div>

              <div className="mt-12 space-y-4">

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-full bg-[#184F34] px-6 py-4 font-medium text-white transition hover:bg-[#103323]"
                >
                  <Navigation size={18} />

                  Open in Google Maps

                </a>

                <a
                  href="tel:+234000000000"
                  className="flex items-center justify-center gap-3 rounded-full border border-[#184F34] px-6 py-4 font-medium text-[#184F34] transition hover:bg-[#184F34] hover:text-white"
                >
                  <Mail size={18} />

                  Message Committee

                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MapSection;