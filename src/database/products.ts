type ProductGalleryItem = {
  image: string;
  name: string;
};

type Product = {
    pid: number;
    name: string;
    brief_desc: string;
    desc: string;
    image: string;
    gallery?: ProductGalleryItem[];
}

const products: Product[] = [
    { 
        pid: 1, 
        name: 'DTH Equipment',
        brief_desc: "Full range of Down the Hole equipment from 3.5” to 17.5” diameter. Drill Rods, Hammers, Bits, Adaptors, Non-Return Valves, Thread Protectors, Stabilisers, etc",
        desc: "We supply a comprehensive range of Down-the-Hole (DTH) drilling equipment engineered for optimal performance and durability. Our inventory includes Drill Rods, Hammers, Bits, Adaptors, Non-Return Valves (NRVs), Thread Protectors, Stabilisers, and more. With sizes ranging from 3.5” to 17.5” diameter, our DTH solutions support deep, hard rock drilling with minimal deviation and maximum energy transfer.",
        image: "/DTH.webp",
        gallery: [
            {image: "/DTH-Drill-Bits-01.webp", name: "DTH Drill Bits"},
            {image: "/DTH-Drill-Bits-02.webp", name: "DTH Drill Bits"},
            {image: "/DTH-Drill-Bits-03.webp", name: "DTH Drill Bits"},
            {image: "/Adaptors-01.webp", name: "Adaptors"},
            {image: "/Adaptors-02.webp", name: "Adaptors"},
            {image: "/Eric-Claw-01.webp", name: "Eric Claw"},
            {image: "/Eric-Claw-02.webp", name: "Eric Claw"},
            {image: "/RC-Drill-Bit-01.webp", name: "RC Drill Bit"},
            {image: "/RC-Drill-Bit-02.webp", name: "RC Drill Bit"},
            {image: "/RC-Drill-Bit-03.webp", name: "RC Drill Bit"},
            {image: "/Tricone-01.webp", name: "Tricone"},
            {image: "/Tricone-02.webp", name: "Tricone"},
            {image: "/DTH-Hammer-01.webp", name: "DTH Hammer"},
            {image: "/DTH-Hammer-02.webp", name: "DTH Hammer"},
        ]
    },
    { 
        pid: 2,
        name: 'Drilling Chemicals', 
        brief_desc: "AMC (Samchem) Distributer for their full range of chemicals for DTH, Mud Drilling and Coring applications.",
        desc: "We supply a comprehensive range of Down-the-Hole (DTH) drilling equipment engineered for optimal performance and durability. Our inventory includes Drill Rods, Hammers, Bits, Adaptors, Non-Return Valves (NRVs), Thread Protectors, Stabilisers, and more. With sizes ranging from 3.5” to 17.5” diameter, our DTH solutions support deep, hard rock drilling with minimal deviation and maximum energy transfer.",
        image: "/chemicals.webp"
    },
    { 
        pid: 3,
        name: 'Oils & Lubricants', 
        brief_desc: "Locally produced oils, greases, and antifreeze designed for engine, hydraulic, and DTH hammer maintenance in harsh drilling environments.",
        desc: "We supply a comprehensive range of Down-the-Hole (DTH) drilling equipment engineered for optimal performance and durability. Our inventory includes Drill Rods, Hammers, Bits, Adaptors, Non-Return Valves (NRVs), Thread Protectors, Stabilisers, and more. With sizes ranging from 3.5” to 17.5” diameter, our DTH solutions support deep, hard rock drilling with minimal deviation and maximum energy transfer.",
        image: "/storage.webp"
    },
    { 
        pid: 4,
        name: 'Geological Equipment', 
        brief_desc: "Quality geological tools and field equipment, from sample storage to measurement tools, essential for exploration and site documentation.",
        desc: "We supply a comprehensive range of Down-the-Hole (DTH) drilling equipment engineered for optimal performance and durability. Our inventory includes Drill Rods, Hammers, Bits, Adaptors, Non-Return Valves (NRVs), Thread Protectors, Stabilisers, and more. With sizes ranging from 3.5” to 17.5” diameter, our DTH solutions support deep, hard rock drilling with minimal deviation and maximum energy transfer.",
        image: "/tools.webp"
    },
    { 
        pid: 5,
        name: 'Coring Equipments', 
        brief_desc: "Full range of Coring equipment from Rods, Casings, Bits, Full Barrels, Outer Tubes, Inner Tubes, Split Tubes, Spanners, Wrenches, Pump-Out Kits etc.",
        desc: "Our coring equipment line supports accurate geological core sampling and exploration projects. We provide Rods, Casings, Bits, Core Barrels, Outer and Inner Tubes, Split Tubes, Spanners, Wrenches, and Pump-Out Kits. Designed for durability and compatibility across different drilling rigs and conditions, our products ensure high core recovery and sample integrity in the field.",
        image: "/product.jpg"
    },
];

export default products;