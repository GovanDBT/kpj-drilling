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
        desc: "As a proud distributor of AMC (Samchem) products, KPJ Drilling offers a complete range of high-performance drilling chemicals designed for Down-the-Hole, Mud Drilling, and Coring applications. These include lubricants, viscosifiers, stabilisers, and specialty additives that enhance drilling efficiency, reduce wear on equipment, and promote cleaner, more stable boreholes across diverse geological settings.",
        image: "/Drilling-Chemicals.webp",
        gallery: [
            {image: "/AMC-Bordet.webp", name: "AMC Bordet - 24KG NETT"},
            {image: "/AMC-CAP21.webp", name: "AMC CAP21 - 25KG NETT"},
            {image: "/AMC-CR-650.webp", name: "AMC CR 650 - 15KG"},
            {image: "/AMC-HV-Foam.webp", name: "AMC HV Foam - 25KG NETT"},
            {image: "/AMC-Liquipol.webp", name: "AMC Liquipol - 25KG NETT"},
            {image: "/AMC-Wondercut.webp", name: "AMC Wondercut - 25KG NETT"},
            {image: "/Drilling-Chemicals.webp", name: "Drilling Chemicals"},
            {image: "/AUS-Plug.webp", name: "AUS Plug - 15KG NETT"},
            {image: "/Antiwear-Hydraulic-Oil.webp", name: "Antiwear Hydraulic Oil - 20 Liters"},
            {image: "/Automotive-Engine-Oil.webp", name: "Automotive Engine Oil - 20 Liters"},
            {image: "/Automotive-Gear-Oil.webp", name: "Automotive Gear Oil - 20 Liters"},
            {image: "/Rock-Drill-Oil-RD-220.webp", name: "Rock Drill Oil RD 220 - 20 Liters"},
            {image: "/Rock-Drill-Oil.webp", name: "Rock Drill Oil - 20 Liters"},
            {image: "/Sump-Clear.webp", name: "Sump Clear - 25 Liters"},
            {image: "/Oils.webp", name: "Oil Chemicals"},
            {image: "/Lithium-Complex-EP-2-Grease.webp", name: "Lithium Complex EP 2 Grease - 15KG"},
            {image: "/Lithium-EP-2-Grease.webp", name: "Lithium EP 2 Grease - 15KG"},
            {image: "/Rig-Drill-Compound.webp", name: "Rig Drill Compound - 15KG"},
            {image: "/Thread-Compound-RSC-Blue.webp", name: "Thread Compound RSC Blue - 15KG"},
            {image: "/Greases.webp", name: "Grease Chemicals"},
        ]
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