import equinixImg from "./images/projects/equinix.jpg";
import fraxinusImg from "./images/projects/fraxinus.jpg";
import bulgariamallTowersImg from "./images/projects/bulgariamall-towers.jpg";
import benchmarkImg from "./images/projects/benchmark.jpg";
import capitalFortImg from "./images/projects/capital-fort-sofia.jpg";
import osramImg from "./images/projects/osram.jpg";
import skyForthImg from "./images/projects/sky-fort.jpg";
import vMwareImg from "./images/projects/vmware.jpg";
import sanStefanoImg from "./images/projects/san-stefano-sofia.jpg";
import novotelImg from "./images/projects/novotel.jpg";
import rnmImg from "./images/projects/rnm-sofia.jpg";
import serdicaImg from "./images/projects/serdica-center.jpg";
import litexTowerImg from "./images/projects/litex-tower-project.jpg";
import centillionImg from "./images/projects/centillion.jpg";
import pravecImg from "./images/projects/hotel-riu-pravec.jpg";
import sofiaAirportTowerImg from "./images/projects/sofia-airport-tower.jpg";
import megaParkImg from "./images/projects/sofia-megapark.jpg";
import radugaImg from "./images/projects/radoga-kamchiq.jpg";
import residentialParkImg from "./images/projects/residential-park-sofia.jpg";
import theMallImg from "./images/projects/the-mall-sofia.jpg";
import expo2000 from "./images/projects/expo-2000.jpg";

import {
  englishServiceNames,
  bulgarianServiceNames,
} from "./services-constants.js";

const bgMol = {
  image: bulgariamallTowersImg,
  name: "Mall Bulgaria - Tower A, Tower B and Cargill Tower",
  services: [
    "FPA 5000 Fire Alarm - Fire Detection System - Bosch Security Systems",
    "Plena - Public Address System - Bosch Security Systems",
    "Bosch Video Management System - Digital CCTV System - Bosch Security Systems",
    "AMC Access Control - Access Modular Control System - Bosch Security Systems",
    "Structure Cabling System - Data Network - Reichle & De-Massari",
    "Build of Security and Data Systems and integration of all security systems into Building Integration Software (BIS) of Bosch Security Systems",
  ],
};

const equinix = {
  image: equinixImg,
  name: "EQUINIX SO2 DATA CENTER",
  services: [
    "FPA 5000 - Fire Detection System - Bosch Security Systems",
    "SYNCHRO-XT - Fire Extinguishing Control System - Kentec Electronics",
    "AMAG CompleteView - Digital CCTV System - AMAG Technology",
    "AMAG Symmetry - Access Control System - AMAG Technology",
    "Structure Cabling System - Data and Telephony Network - Reichle & De-Massari",
  ],
};

const techOne = {
  image: fraxinusImg,
  name: "Sofia Tech One",
  services: [
    "FPA 5000 Fire Alarm - Fire Detection System - Bosch Security Systems",
    "Paviro - Public Address System - Bosch Security Systems",
    "Hikvision - Digital CCTV System - Hikvision",
    "AMC Access Control - Access Modular Control System - Bosch Security Systems",
    "Structure Cabling System - Data Network - Reichle & De-Massari",
  ],
};

const english = {
  title: "Our projects",
  projects: [
    {
      image: skyForthImg,
      name: "Sky Fort",
      services: [
        englishServiceNames.accessControl,
        englishServiceNames.fireAlarm,
        englishServiceNames.publicAddress,
        englishServiceNames.gasDetection,
        englishServiceNames.bis,
      ],
    },
    equinix,
    techOne,
    bgMol,
    {
      image: capitalFortImg,
      name: "Capital Fort",
      services: [
        englishServiceNames.sks,
        englishServiceNames.accessControl,
        englishServiceNames.fireAlarm,
        englishServiceNames.cctv,
        englishServiceNames.publicAddress,
        englishServiceNames.commissioning,
      ],
    },
    {
      image: expo2000,
      name: "Expo 2000 - Phase 3 and 4",
      services: [
        englishServiceNames.sks,
        englishServiceNames.accessControl,
        englishServiceNames.fireAlarm,
        englishServiceNames.cctv,
        englishServiceNames.publicAddress,
        englishServiceNames.sot,
        englishServiceNames.intercom,
        englishServiceNames.commissioning,
      ],
    },
    {
      image: osramImg,
      name: 'Factory "Osram" - Plovdiv',
      services: [
        englishServiceNames.sks,
        englishServiceNames.accessControl,
        englishServiceNames.fireAlarm,
        englishServiceNames.cctv,
        englishServiceNames.publicAddress,
        englishServiceNames.commissioning,
      ],
    },
    {
      image: vMwareImg,
      name: "VMware",
      services: [englishServiceNames.sks],
    },
    {
      image: sanStefanoImg,
      name: "San Stefano Plaza",
      services: [
        englishServiceNames.softIntegrationPlatform,
        englishServiceNames.sot,
        englishServiceNames.accessControl,
        englishServiceNames.fireAlarm,
        englishServiceNames.cctv,
        englishServiceNames.publicAddress,
        englishServiceNames.intercom,
        englishServiceNames.commissioning,
      ],
    },
    {
      image: novotelImg,
      name: "Novotel",
      services: [
        englishServiceNames.softIntegrationPlatform,
        englishServiceNames.sot,
        englishServiceNames.accessControl,
        englishServiceNames.fireAlarm,
        englishServiceNames.cctv,
        englishServiceNames.publicAddress,
        englishServiceNames.commissioning,
      ],
    },
    {
      image: rnmImg,
      name: "R&M Bulgaria",
      services: [
        englishServiceNames.fireAlarm,
        englishServiceNames.publicAddress,
        englishServiceNames.cctv,
        englishServiceNames.accessControl,
        englishServiceNames.commissioning,
      ],
    },
    {
      image: serdicaImg,
      name: "Serdica Center - offices",
      services: [
        englishServiceNames.accessControl,
        englishServiceNames.fireAlarm,
        englishServiceNames.cctv,
        englishServiceNames.publicAddress,
        englishServiceNames.commissioning,
      ],
    },
    {
      image: litexTowerImg,
      name: "Litex Tower",
      services: [
        englishServiceNames.accessControl,
        englishServiceNames.bms,
        englishServiceNames.cctv,
        englishServiceNames.sks,
        englishServiceNames.commissioning,
      ],
    },
    {
      image: centillionImg,
      name: "Centillion",
      services: [
        englishServiceNames.accessControl,
        englishServiceNames.cctv,
        englishServiceNames.sks,
        englishServiceNames.fireAlarm,
        englishServiceNames.commissioning,
      ],
    },
    {
      image: benchmarkImg,
      name: "Benchmark",
      services: [
        englishServiceNames.sks,
        englishServiceNames.accessControl,
        englishServiceNames.publicAddress,
        englishServiceNames.cctv,
      ],
    },
    {
      image: pravecImg,
      name: "Hotel Riu Pravets Resort",
      services: [
        englishServiceNames.sks,
        englishServiceNames.publicAddress,
        englishServiceNames.cctv,
      ],
    },
    {
      image: sofiaAirportTowerImg,
      name: "Sofia Airport Tower",
      services: [englishServiceNames.sks, englishServiceNames.publicAddress],
    },
    {
      image: megaParkImg,
      name: "Mega Park Sofia",
      services: [englishServiceNames.sks],
    },
    {
      image: radugaImg,
      name: "Raduga Kamchia",
      services: [englishServiceNames.bms, englishServiceNames.fireAlarm],
    },
    {
      image: residentialParkImg,
      name: "Residential Park Sofia",
      services: [englishServiceNames.sks, englishServiceNames.cctv],
    },
    {
      image: theMallImg,
      name: "The Mall",
      services: [
        englishServiceNames.sks,
        englishServiceNames.fireAlarm,
        englishServiceNames.accessControl,
        englishServiceNames.publicAddress,
      ],
    },
  ],
};

const bulgarian = {
  title: "Нашите проекти",
  projects: [
    {
      image: skyForthImg,
      name: "Скай Форт",
      services: [
        bulgarianServiceNames.accessControl,
        bulgarianServiceNames.fireAlarm,
        bulgarianServiceNames.publicAddress,
        bulgarianServiceNames.gasDetection,
        bulgarianServiceNames.bis,
      ],
    },
    equinix,
    { ...techOne, name: "София Тех Уан" },
    bgMol,
    {
      image: capitalFortImg,
      name: "Capital Fort",
      services: [
        bulgarianServiceNames.sks,
        bulgarianServiceNames.accessControl,
        bulgarianServiceNames.fireAlarm,
        bulgarianServiceNames.cctv,
        bulgarianServiceNames.publicAddress,
        bulgarianServiceNames.commissioning,
      ],
    },
    {
      image: expo2000,
      name: "Expo 2000 - Phase 3 and 4",
      services: [
        bulgarianServiceNames.sks,
        bulgarianServiceNames.accessControl,
        bulgarianServiceNames.fireAlarm,
        bulgarianServiceNames.cctv,
        bulgarianServiceNames.publicAddress,
        bulgarianServiceNames.sot,
        bulgarianServiceNames.intercom,
        bulgarianServiceNames.commissioning,
      ],
    },
    {
      image: osramImg,
      name: 'Factory "Osram" - Plovdiv',
      services: [
        bulgarianServiceNames.sks,
        bulgarianServiceNames.accessControl,
        bulgarianServiceNames.fireAlarm,
        bulgarianServiceNames.cctv,
        bulgarianServiceNames.publicAddress,
        bulgarianServiceNames.commissioning,
      ],
    },
    {
      image: vMwareImg,
      name: "VMware",
      services: [bulgarianServiceNames.sks],
    },
    {
      image: sanStefanoImg,
      name: "San Stefano Plaza",
      services: [
        bulgarianServiceNames.softIntegrationPlatform,
        bulgarianServiceNames.sot,
        bulgarianServiceNames.accessControl,
        bulgarianServiceNames.fireAlarm,
        bulgarianServiceNames.cctv,
        bulgarianServiceNames.publicAddress,
        bulgarianServiceNames.intercom,
        bulgarianServiceNames.commissioning,
      ],
    },
    {
      image: novotelImg,
      name: "Novotel",
      services: [
        bulgarianServiceNames.softIntegrationPlatform,
        bulgarianServiceNames.sot,
        bulgarianServiceNames.accessControl,
        bulgarianServiceNames.fireAlarm,
        bulgarianServiceNames.cctv,
        bulgarianServiceNames.publicAddress,
        bulgarianServiceNames.commissioning,
      ],
    },
    {
      image: rnmImg,
      name: "R&M Bulgaria",
      services: [
        bulgarianServiceNames.fireAlarm,
        bulgarianServiceNames.publicAddress,
        bulgarianServiceNames.cctv,
        bulgarianServiceNames.accessControl,
        bulgarianServiceNames.commissioning,
      ],
    },
    {
      image: serdicaImg,
      name: "Serdica Center - offices",
      services: [
        bulgarianServiceNames.accessControl,
        bulgarianServiceNames.fireAlarm,
        bulgarianServiceNames.cctv,
        bulgarianServiceNames.publicAddress,
        bulgarianServiceNames.commissioning,
      ],
    },
    {
      image: litexTowerImg,
      name: "Litex Tower",
      services: [
        bulgarianServiceNames.accessControl,
        bulgarianServiceNames.bms,
        bulgarianServiceNames.cctv,
        bulgarianServiceNames.sks,
        bulgarianServiceNames.commissioning,
      ],
    },
    {
      image: centillionImg,
      name: "Centillion",
      services: [
        bulgarianServiceNames.accessControl,
        bulgarianServiceNames.cctv,
        bulgarianServiceNames.sks,
        bulgarianServiceNames.fireAlarm,
        bulgarianServiceNames.commissioning,
      ],
    },
    {
      image: benchmarkImg,
      name: "Benchmark",
      services: [
        bulgarianServiceNames.sks,
        bulgarianServiceNames.accessControl,
        bulgarianServiceNames.publicAddress,
        bulgarianServiceNames.cctv,
      ],
    },
    {
      image: pravecImg,
      name: "Hotel Riu Pravets Resort",
      services: [
        bulgarianServiceNames.sks,
        bulgarianServiceNames.publicAddress,
        bulgarianServiceNames.cctv,
      ],
    },
    {
      image: sofiaAirportTowerImg,
      name: "Sofia Airport Tower",
      services: [
        bulgarianServiceNames.sks,
        bulgarianServiceNames.publicAddress,
      ],
    },
    {
      image: megaParkImg,
      name: "Mega Park Sofia",
      services: [bulgarianServiceNames.sks],
    },
    {
      image: radugaImg,
      name: "Raduga Kamchia",
      services: [bulgarianServiceNames.bms, bulgarianServiceNames.fireAlarm],
    },
    {
      image: residentialParkImg,
      name: "Residential Park Sofia",
      services: [bulgarianServiceNames.sks, bulgarianServiceNames.cctv],
    },
    {
      image: theMallImg,
      name: "The Mall",
      services: [
        bulgarianServiceNames.sks,
        bulgarianServiceNames.fireAlarm,
        bulgarianServiceNames.accessControl,
        bulgarianServiceNames.publicAddress,
      ],
    },
  ],
};

const homeTrans = {
  english,
  bulgarian,
};

export default homeTrans;
