// productData.ts

// Import images
import DTH from "../assets/DTH.webp";
import DTH_Bit01 from "../assets/DTH-Drill-Bits-01.webp";
import DTH_Bit02 from "../assets/DTH-Drill-Bits-02.webp";
import DTH_Bit03 from "../assets/DTH-Drill-Bits-03.webp";
import Adaptors01 from "../assets/Adaptors-01.webp";
import Adaptors02 from "../assets/Adaptors-02.webp";
import EricClaw01 from "../assets/Eric-Claw-01.webp";
import EricClaw02 from "../assets/Eric-Claw-02.webp";
import RC_Bit01 from "../assets/RC-Drill-Bit-01.webp";
import RC_Bit02 from "../assets/RC-Drill-Bit-02.webp";
import RC_Bit03 from "../assets/RC-Drill-Bit-03.webp";
import Tricone01 from "../assets/Tricone-01.webp";
import Tricone02 from "../assets/Tricone-02.webp";
import DTH_Hammer01 from "../assets/DTH-Hammer-01.webp";
import DTH_Hammer02 from "../assets/DTH-Hammer-02.webp";

import DrillingChemicals from "../assets/Drilling-Chemicals.webp";
import AMC_Bordet from "../assets/AMC-Bordet.webp";
import AMC_CAP21 from "../assets/AMC-CAP21.webp";
import AMC_CR650 from "../assets/AMC-CR-650.webp";
import AMC_HVFoam from "../assets/AMC-HV-Foam.webp";
import AMC_Liquipol from "../assets/AMC-Liquipol.webp";
import AMC_Wondercut from "../assets/AMC-Wondercut.webp";
import AUS_Plug from "../assets/AUS-Plug.webp";

import RockDrillOil from "../assets/Rock-Drill-Oil-RD-220.webp";
import AntiWearHydraulicOil from "../assets/Antiwear-Hydraulic-Oil.webp";
import AutomotiveEngineOil from "../assets/Automotive-Engine-Oil.webp";
import AutomotiveGearOil from "../assets/Automotive-Gear-Oil.webp";
import LithiumComplexEP2Grease from "../assets/Lithium-Complex-EP-2-Grease.webp";
import LithiumEP2Grease from "../assets/Lithium-EP-2-Grease.webp";
import RigDrillCompound from "../assets/Rig-Drill-Compound.webp";
import ThreadCompoundRSCBlue from "../assets/Thread-Compound-RSC-Blue.webp";
import Greases from "../assets/Greases.webp";

import Tools from "../assets/tools.webp";
import BruntonCompass from "../assets/Brunton-Tru-Arc-Compass.webp";
import ClinoRule from "../assets/Clino 1M Rule.webp";
import EstwingHammer from "../assets/Estwing Geological hammer.webp";
import WetNotebook from "../assets/Geological Wet strength Notebook and China Marker.webp";
import Goniometer from "../assets/Goniometer.webp";
import Loupe from "../assets/Illuminated Loupe.webp";
import MachinistsScriber from "../assets/Machinists Scriber.webp";
import ManillaTags from "../assets/Manilla Tags and Sample Ticket Books.webp";
import PhotographicScale from "../assets/Photographic Scale.webp";
import SumpClear from "../assets/Sump-Clear.webp";
import SampleBags from "../assets/sample storage bags and trays.webp";
import TearoffTickets from "../assets/Tearoff Sample Ticket Books.webp";
import TestSieve from "../assets/Test Sieve.webp";

import HWT_Casing01 from "../assets/HWT Casing01.webp";
import HWT_Casing02 from "../assets/HWT Casing02.webp";
import HWT_Casing03 from "../assets/HWT Casing03.webp";
import HWT_Casing04 from "../assets/HWT Casing04.webp";

// ✅ Define types
export type ProductGalleryItem = {
  image: string;
  name: string;
};

export type Product = {
  pid: number;
  name: string;
  brief_desc: string;
  desc: string;
  image: string;
  gallery?: ProductGalleryItem[];
};

// ✅ Product data
const products: Product[] = [
  {
    pid: 1,
    name: "DTH Equipment",
    brief_desc:
      "Full range of Down the Hole equipment from 3.5” to 17.5” diameter. Drill Rods, Hammers, Bits, Adaptors, Non-Return Valves, Thread Protectors, Stabilisers, etc",
    desc:
      "We supply a comprehensive range of Down-the-Hole (DTH) drilling equipment engineered for optimal performance and durability. Our inventory includes Drill Rods, Hammers, Bits, Adaptors, Non-Return Valves (NRVs), Thread Protectors, Stabilisers, and more. With sizes ranging from 3.5” to 17.5” diameter, our DTH solutions support deep, hard rock drilling with minimal deviation and maximum energy transfer.",
    image: DTH,
    gallery: [
      { image: DTH_Bit01, name: "DTH Drill Bits" },
      { image: DTH_Bit02, name: "DTH Drill Bits" },
      { image: DTH_Bit03, name: "DTH Drill Bits" },
      { image: Adaptors01, name: "Adaptors" },
      { image: Adaptors02, name: "Adaptors" },
      { image: EricClaw01, name: "Eric Claw" },
      { image: EricClaw02, name: "Eric Claw" },
      { image: RC_Bit01, name: "RC Drill Bit" },
      { image: RC_Bit02, name: "RC Drill Bit" },
      { image: RC_Bit03, name: "RC Drill Bit" },
      { image: Tricone01, name: "Tricone" },
      { image: Tricone02, name: "Tricone" },
      { image: DTH_Hammer01, name: "DTH Hammer" },
      { image: DTH_Hammer02, name: "DTH Hammer" },
    ],
  },
  {
    pid: 2,
    name: "Drilling Chemicals",
    brief_desc:
      "AMC (Samchem) Distributer for their full range of chemicals for DTH, Mud Drilling and Coring applications.",
    desc:
      "As a proud distributor of AMC (Samchem) products, KPJ Drilling offers a complete range of high-performance drilling chemicals designed for Down-the-Hole, Mud Drilling, and Coring applications. These include lubricants, viscosifiers, stabilisers, and specialty additives that enhance drilling efficiency, reduce wear on equipment, and promote cleaner, more stable boreholes across diverse geological settings.",
    image: DrillingChemicals,
    gallery: [
      { image: AMC_Bordet, name: "AMC Bordet - 25KG NETT" },
      { image: AMC_CAP21, name: "AMC CAP21 - 25KG NETT" },
      { image: AMC_CR650, name: "AMC CR 650 - 15KG" },
      { image: AMC_HVFoam, name: "AMC HV Foam - 25KG NETT" },
      { image: AMC_Liquipol, name: "AMC Liquipol - 25KG NETT" },
      { image: AMC_Wondercut, name: "AMC Wondercut - 25KG NETT" },
      { image: DrillingChemicals, name: "Drilling Chemicals" },
      { image: AUS_Plug, name: "AUS Plug - 15KG NETT" },
    ],
  },
  {
    pid: 3,
    name: "Oils & Lubricants",
    brief_desc:
      "Basic range of Botswana produced Oils for Engines, DTH Hammers and Hydraulics including Greases and Antifreeze.",
    desc:
      "KPJ Drilling stocks a practical range of Botswana-manufactured oils and lubricants tailored for the drilling industry. Our products include Engine Oils, Hydraulic Fluids, Greases, and Antifreeze solutions. Formulated to withstand extreme operating conditions, these lubricants ensure smooth equipment performance, reduce wear, and extend the operational life of your machinery.",
    image: RockDrillOil,
    gallery: [
      { image: AntiWearHydraulicOil, name: "Antiwear Hydraulic Oil - 20 Liters" },
      { image: AutomotiveEngineOil, name: "Automotive Engine Oil - 20 Liters" },
      { image: AutomotiveGearOil, name: "Automotive Gear Oil - 20 Liters" },
      { image: RockDrillOil, name: "Rock Drill Oil RD 220 - 20 Liters" },
      { image: LithiumComplexEP2Grease, name: "Lithium Complex EP 2 Grease - 15KG" },
      { image: LithiumEP2Grease, name: "Lithium EP 2 Grease - 15KG" },
      { image: RigDrillCompound, name: "Rig Drill Compound - 15KG" },
      { image: ThreadCompoundRSCBlue, name: "Thread Compound RSC Blue - 15KG" },
      { image: Greases, name: "Greases" },
    ],
  },
  {
    pid: 4,
    name: "Geological Equipment",
    brief_desc:
      "Geo Explore Store Distributer for their full range of Geological products including Core Storage Solutions, Sampling Bags, Compasses, Sample Tickets, Dip Meters etc",
    desc:
      "We distribute the full range of Geo Explore Store geological supplies, supporting exploration teams with reliable tools for sampling and documentation. Our offerings include Core Storage Boxes, Sample Bags, Geological Compasses, Sample Tickets, Dip Meters, and more. These tools are crafted for field durability and data accuracy, ensuring efficient sample tracking and site logging in all terrain conditions.",
    image: Tools,
    gallery: [
      { image: BruntonCompass, name: "Brunton Tru Arc Compass" },
      { image: ClinoRule, name: "Clino 1M Rule" },
      { image: EstwingHammer, name: "Estwing Geological hammer" },
      { image: WetNotebook, name: "Geological Wet strength Notebook and China Marker" },
      { image: Goniometer, name: "Goniometer" },
      { image: Loupe, name: "Illuminated Loupe" },
      { image: MachinistsScriber, name: "Scribe" },
      { image: ManillaTags, name: "Manilla Tags and Sample Ticket Books" },
      { image: PhotographicScale, name: "Photographic Scale" },
      { image: SumpClear, name: "Sump Clear - 25 Liters" },
      { image: SampleBags, name: "Sample storage bags and trays" },
      { image: TearoffTickets, name: "Tearoff Sample Ticket Books" },
      { image: TestSieve, name: "Test Sieve" },
    ],
  },
  {
    pid: 5,
    name: "Coring Equipments",
    brief_desc:
      "Full range of Coring equipment from Rods, Casings, Bits, Full Barrels, Outer Tubes, Inner Tubes, Split Tubes, Spanners, Wrenches, Pump-Out Kits etc.",
    desc:
      "Our coring equipment line supports accurate geological core sampling and exploration projects. We provide Rods, Casings, Bits, Core Barrels, Outer and Inner Tubes, Split Tubes, Spanners, Wrenches, and Pump-Out Kits. Designed for durability and compatibility across different drilling rigs and conditions, our products ensure high core recovery and sample integrity in the field.",
    image: HWT_Casing01,
    gallery: [
      { image: HWT_Casing01, name: "HWT Casing" },
      { image: HWT_Casing02, name: "HWT Casing" },
      { image: HWT_Casing03, name: "HWT Casing" },
      { image: HWT_Casing04, name: "HWT Casing" },
    ],
  },
];

export default products;
