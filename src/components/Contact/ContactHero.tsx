import {
    Mail,
    MessageCircleHeart,
    HeartHandshake,
} from "lucide-react";

import ContactCard from "./ContactCard";
import { committeeMembers } from "./contactData";

const ContactHero=()=>{

return(

<section className="bg-[#FAF8F4] py-24">

<div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

{/* LEFT */}

<div>

<p className="uppercase tracking-[5px] text-[#184F34]">

After Your Contribution

</p>

<h1 className="mt-4 font-serif text-6xl leading-none text-[#184F34]">

Send us your receipt.

</h1>

<p className="mt-8 text-lg leading-9 text-gray-600">

To help us maintain accurate auditing and acknowledge your patriotism,
please send a copy or screenshot of your transaction receipt via WhatsApp
or Email to the Project Committee representatives.

</p>

<p className="mt-6 text-lg leading-9 text-gray-600">

Every donor is entered into our public transparency register, and receipts
are published (with your permission) as part of our monthly community update.

</p>

<div className="mt-10 flex flex-wrap gap-5">

<button className="flex items-center gap-3 rounded-full bg-[#E8B12D] px-8 py-4 font-semibold">

<MessageCircleHeart/>

Message the Committee

</button>

<button className="flex items-center gap-3 rounded-full border border-[#184F34] px-8 py-4 text-[#184F34]">

<Mail/>

Email Us

</button>

</div>

</div>

{/* RIGHT */}

<div className="space-y-6">

{

committeeMembers.map((member)=>(

<ContactCard

key={member.phone}

{...member}

/>

))

}

<div className="rounded-[28px] border border-[#d9c77b] bg-[#EEF7E9] p-8">

<div className="flex gap-4">

<HeartHandshake className="text-[#184F34]"/>

<p className="text-lg leading-8 text-[#184F34]">

Prefer to give in kind?

We also welcome donations of cement,
blocks, roofing sheets,
timber and other building materials.

Please contact the Chairman
to coordinate delivery.

</p>

</div>

</div>

</div>

</div>

</section>

)

}

export default ContactHero;