import React from "react";
import { motion } from "framer-motion";
import ktilario_logo from "@/assets/ktilario_logo.png";
import spazio_logo from "@/assets/spazio_logo.png";
import datox_logo from "@/assets/datox_logo.png";
import Gasparyan_logo from "@/assets/Gasparyan_logo.png";
import Google_logo from "@/assets/Google_logo.png";

const TrustedBy = () => {
  const partners = [
    { name: "Ktilario", logo: ktilario_logo },
    { name: "Spazio", logo: spazio_logo },
    { name: "Datox", logo: datox_logo },
    { name: "Gasparyan", logo: Gasparyan_logo },
    { name: "Google", logo: Google_logo },
  ];

  // ✅ Duplicate logos twice to make seamless infinite loop
  const scrollingPartners = [...partners, ...partners];

  return (
    <section className="py-10 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center gap-8 px-6">
        {/* Left side title */}
        <h2 className="text-lg font-semibold whitespace-nowrap">Trusted by</h2>

        {/* Moving logo track */}
        <div className="relative flex-1 overflow-hidden">
          <motion.div
            className="flex gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20, // adjust speed
            }}
          >
            {scrollingPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[120px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
