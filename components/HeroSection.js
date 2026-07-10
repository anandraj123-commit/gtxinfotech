"use client";
export default function HeroSection() {
return (

<section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">

{/* HERO IMAGE */}
<img
  src="/images/gtxinfotech-heroimage.jpeg"
  alt="Hero"
  className="absolute inset-0 w-full h-full object-cover"
/>

{/* DARK OVERLAY */}
<div className="absolute inset-0 bg-black/60"></div>

</section>
)
}