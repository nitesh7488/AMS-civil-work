// src/data/locations.ts
// All Mumbai service areas — each gets its own SEO-optimised page at /areas/[location]

export interface LocationData {
  slug:      string;
  name:      string;
  zone:      string;
  district:  string;
  pincode?:  string;
  landmarks: string[];
  nearby:    string[];
}

export const locations: LocationData[] = [
  /* ── South Mumbai ───────────────────────────────────────── */
  { slug:'dadar',        name:'Dadar',        zone:'South Mumbai',  district:'Mumbai City',   pincode:'400014', landmarks:['Dadar Station','Shivaji Park','Dadar Market'],              nearby:['Prabhadevi','Mahalaxmi','Worli'] },
  { slug:'lower-parel',  name:'Lower Parel',  zone:'South Mumbai',  district:'Mumbai City',   pincode:'400013', landmarks:['Phoenix Mills','High Street Phoenix','Palladium Mall'],       nearby:['Prabhadevi','Worli','Mahalaxmi'] },
  { slug:'worli',        name:'Worli',         zone:'South Mumbai',  district:'Mumbai City',   pincode:'400018', landmarks:['Worli Sea Face','Bandra-Worli Sea Link','Nehru Science Centre'], nearby:['Lower Parel','Prabhadevi','Mahalaxmi'] },
  { slug:'prabhadevi',   name:'Prabhadevi',   zone:'South Mumbai',  district:'Mumbai City',   pincode:'400025', landmarks:['Siddhivinayak Temple','Prabhadevi Station'],                nearby:['Dadar','Worli','Lower Parel'] },
  { slug:'colaba',       name:'Colaba',        zone:'South Mumbai',  district:'Mumbai City',   pincode:'400005', landmarks:['Gateway of India','Taj Hotel','Colaba Causeway'],            nearby:['Marine Lines','Fort','Churchgate'] },
  { slug:'fort',         name:'Fort',          zone:'South Mumbai',  district:'Mumbai City',   pincode:'400001', landmarks:['Flora Fountain','CSMT','Bombay High Court'],                 nearby:['Colaba','Marine Lines','Churchgate'] },
  { slug:'marine-lines', name:'Marine Lines',  zone:'South Mumbai',  district:'Mumbai City',   pincode:'400002', landmarks:['Marine Drive','Girgaon Chowpatty','Mumbai University'],      nearby:['Colaba','Churchgate','Grant Road'] },
  { slug:'byculla',      name:'Byculla',       zone:'South Mumbai',  district:'Mumbai City',   pincode:'400027', landmarks:['Byculla Zoo','Byculla Station','Bhau Daji Lad Museum'],     nearby:['Sion','Mahalaxmi','Dadar'] },
  { slug:'mahalaxmi',   name:'Mahalaxmi',     zone:'South Mumbai',  district:'Mumbai City',   pincode:'400011', landmarks:['Mahalaxmi Temple','Mahalaxmi Racecourse','Haji Ali'],        nearby:['Lower Parel','Worli','Dadar'] },
  { slug:'churchgate',  name:'Churchgate',    zone:'South Mumbai',  district:'Mumbai City',   pincode:'400020', landmarks:['Churchgate Station','Eros Cinema','Rajabai Clock Tower'],     nearby:['Marine Lines','Fort','Colaba'] },
  { slug:'tardeo',      name:'Tardeo',        zone:'South Mumbai',  district:'Mumbai City',   pincode:'400007', landmarks:['Tardeo AC Market','Haji Ali Dargah','Tata Memorial Hospital'], nearby:['Mahalaxmi','Lower Parel','Grant Road'] },
  { slug:'parel',       name:'Parel',         zone:'South Mumbai',  district:'Mumbai City',   pincode:'400012', landmarks:['Parel Station','Lodha World One','Peninsula Towers'],        nearby:['Dadar','Lower Parel','Byculla'] },
  { slug:'mahim',       name:'Mahim',         zone:'South Mumbai',  district:'Mumbai City',   pincode:'400016', landmarks:['Mahim Beach','Mahim Fort','Mahim Causeway'],                 nearby:['Dadar','Bandra','Matunga'] },
  { slug:'matunga',     name:'Matunga',       zone:'South Mumbai',  district:'Mumbai City',   pincode:'400019', landmarks:['Matunga Station','Five Gardens','King Circle'],              nearby:['Dadar','Sion','Mahim'] },

  /* ── Western Line ───────────────────────────────────────── */
  { slug:'bandra',       name:'Bandra',        zone:'Western Line',  district:'Mumbai Suburban',pincode:'400050', landmarks:['Bandra-Kurla Complex','Bandstand','Linking Road'],           nearby:['Khar','Santacruz','Andheri'] },
  { slug:'khar',         name:'Khar',           zone:'Western Line',  district:'Mumbai Suburban',pincode:'400052', landmarks:['Khar Station','Khar Gymkhana','Danda'],                     nearby:['Bandra','Santacruz','Vile Parle'] },
  { slug:'santacruz',   name:'Santacruz',      zone:'Western Line',  district:'Mumbai Suburban',pincode:'400054', landmarks:['Santacruz Airport Area','JVPD Scheme','Kalina'],             nearby:['Khar','Vile Parle','Andheri'] },
  { slug:'vile-parle',  name:'Vile Parle',     zone:'Western Line',  district:'Mumbai Suburban',pincode:'400057', landmarks:['Vile Parle Station','N.M. College','ISKCON Juhu'],          nearby:['Santacruz','Andheri','Jogeshwari'] },
  { slug:'andheri',     name:'Andheri',        zone:'Western Line',  district:'Mumbai Suburban',pincode:'400058', landmarks:['Andheri Station','SEEPZ','Versova','Lokhandwala'],          nearby:['Jogeshwari','Vile Parle','Goregaon'] },
  { slug:'juhu',        name:'Juhu',           zone:'Western Line',  district:'Mumbai Suburban',pincode:'400049', landmarks:['Juhu Beach','ISKCON Temple','Prithvi Theatre'],              nearby:['Vile Parle','Andheri','Santacruz'] },
  { slug:'jogeshwari',  name:'Jogeshwari',     zone:'Western Line',  district:'Mumbai Suburban',pincode:'400060', landmarks:['Jogeshwari Caves','Jogeshwari Station','Andheri Link Road'], nearby:['Andheri','Goregaon','Borivali'] },
  { slug:'goregaon',    name:'Goregaon',       zone:'Western Line',  district:'Mumbai Suburban',pincode:'400063', landmarks:['Film City','Oberoi Mall','Aarey Colony'],                   nearby:['Jogeshwari','Malad','Andheri'] },
  { slug:'malad',       name:'Malad',          zone:'Western Line',  district:'Mumbai Suburban',pincode:'400064', landmarks:['Infinity Mall','Malad Station','Orion Business Park'],       nearby:['Goregaon','Kandivali','Borivali'] },
  { slug:'kandivali',   name:'Kandivali',      zone:'Western Line',  district:'Mumbai Suburban',pincode:'400067', landmarks:['Kandivali Station','Growel 101 Mall','Thakur Village'],     nearby:['Malad','Borivali','Dahisar'] },
  { slug:'borivali',    name:'Borivali',       zone:'Western Line',  district:'Mumbai Suburban',pincode:'400092', landmarks:['Sanjay Gandhi National Park','Borivali Station','Raghuleela Mall'], nearby:['Kandivali','Dahisar','Mira Road'] },
  { slug:'dahisar',     name:'Dahisar',        zone:'Western Line',  district:'Mumbai Suburban',pincode:'400068', landmarks:['Dahisar Station','Dahisar Check Naka','Sanjay Gandhi Park'],  nearby:['Borivali','Mira Road','Bhayandar'] },
  { slug:'mira-road',   name:'Mira Road',      zone:'Western Line',  district:'Thane',          pincode:'401107', landmarks:['Mira Road Station','Big Bazaar Mira Road','Kashimira'],       nearby:['Dahisar','Bhayandar','Borivali'] },
  { slug:'bhayandar',   name:'Bhayandar',      zone:'Western Line',  district:'Thane',          pincode:'401101', landmarks:['Bhayandar Station','Golden Nest Circle','Uttan'],            nearby:['Mira Road','Vasai','Nalasopara'] },
  { slug:'vasai',       name:'Vasai',          zone:'Western Line',  district:'Palghar',        pincode:'401202', landmarks:['Vasai Fort','Vasai Station','Vasai Road'],                   nearby:['Bhayandar','Nalasopara','Virar'] },
  { slug:'nalasopara',  name:'Nalasopara',     zone:'Western Line',  district:'Palghar',        pincode:'401203', landmarks:['Nalasopara Station','Tulinj','Pelhar'],                     nearby:['Vasai','Virar','Bhayandar'] },
  { slug:'virar',       name:'Virar',          zone:'Western Line',  district:'Palghar',        pincode:'401303', landmarks:['Virar Station','Arnala Beach','Virar Fort'],                 nearby:['Nalasopara','Vasai','Boisar'] },

  /* ── Central Line ───────────────────────────────────────── */
  { slug:'sion',        name:'Sion',           zone:'Central Line',  district:'Mumbai City',   pincode:'400022', landmarks:['Sion Fort','Sion Station','Dharavi'],                       nearby:['Kurla','Byculla','Dadar'] },
  { slug:'kurla',       name:'Kurla',          zone:'Central Line',  district:'Mumbai Suburban',pincode:'400070', landmarks:['Kurla Station','Phoenix Marketcity','BKC'],                 nearby:['Sion','Ghatkopar','Bandra'] },
  { slug:'ghatkopar',   name:'Ghatkopar',      zone:'Central Line',  district:'Mumbai Suburban',pincode:'400077', landmarks:['Ghatkopar Metro','R-City Mall','Tilaknagar'],               nearby:['Kurla','Vikhroli','Mulund'] },
  { slug:'vikhroli',    name:'Vikhroli',       zone:'Central Line',  district:'Mumbai Suburban',pincode:'400083', landmarks:['Vikhroli Station','Godrej Colony','Eastern Express Highway'],nearby:['Ghatkopar','Bhandup','Kurla'] },
  { slug:'powai',       name:'Powai',          zone:'Central Line',  district:'Mumbai Suburban',pincode:'400076', landmarks:['Powai Lake','Hiranandani Gardens','IIT Bombay'],             nearby:['Vikhroli','Bhandup','Andheri'] },
  { slug:'chembur',     name:'Chembur',        zone:'Central Line',  district:'Mumbai Suburban',pincode:'400071', landmarks:['Chembur Station','Diamond Garden','RCF Colony'],             nearby:['Kurla','Ghatkopar','Sion'] },
  { slug:'bhandup',     name:'Bhandup',        zone:'Central Line',  district:'Mumbai Suburban',pincode:'400078', landmarks:['Bhandup Station','Bhandup Industrial Area','Powai Lake'],   nearby:['Vikhroli','Mulund','Thane'] },
  { slug:'mulund',      name:'Mulund',         zone:'Central Line',  district:'Mumbai Suburban',pincode:'400080', landmarks:['Mulund Station','R Mall Mulund','LBS Road'],                nearby:['Bhandup','Thane','Vikhroli'] },
  { slug:'thane',       name:'Thane',          zone:'Central Line',  district:'Thane',          pincode:'400601', landmarks:['Thane Station','Korum Mall','Upvan Lake','Viviana Mall'],    nearby:['Mulund','Dombivli','Navi Mumbai'] },
  { slug:'dombivli',    name:'Dombivli',       zone:'Central Line',  district:'Thane',          pincode:'421201', landmarks:['Dombivli Station','Xperia Mall','MIDC Dombivli'],            nearby:['Thane','Kalyan','Ulhasnagar'] },
  { slug:'kalyan',      name:'Kalyan',         zone:'Central Line',  district:'Thane',          pincode:'421301', landmarks:['Kalyan Station','Kalyan Fort','Metro Junction Mall'],        nearby:['Dombivli','Thane','Ulhasnagar'] },

  /* ── Navi Mumbai ────────────────────────────────────────── */
  /* ── Navi Mumbai (Missing Nodes) ────────────────────────── */
  { slug:'vashi',          name:'Vashi',           zone:'Navi Mumbai', district:'Navi Mumbai', pincode:'400703', landmarks:['Vashi Station','Inorbit Mall','Palm Beach Road'],          nearby:['Nerul','Airoli','Thane'] },
  { slug:'nerul',          name:'Nerul',            zone:'Navi Mumbai', district:'Navi Mumbai', pincode:'400706', landmarks:['Nerul Station','Seawoods Grand Central','Pandavkada Waterfalls'], nearby:['Vashi','Belapur','Koparkhairane'] },
  { slug:'belapur',        name:'Belapur',          zone:'Navi Mumbai', district:'Navi Mumbai', pincode:'400614', landmarks:['CBD Belapur Station','Belapur Fort','DY Patil Stadium'],   nearby:['Nerul','Kharghar','Panvel'] },
  { slug:'airoli',         name:'Airoli',           zone:'Navi Mumbai', district:'Navi Mumbai', pincode:'400708', landmarks:['Airoli Station','Airoli Bridge','TCS Campus Airoli'],       nearby:['Vashi','Ghansoli','Thane'] },
  { slug:'ghansoli',       name:'Ghansoli',         zone:'Navi Mumbai', district:'Navi Mumbai', pincode:'400701', landmarks:['Ghansoli Station','Reliance Corporate Park','ONGC Colony'], nearby:['Airoli','Koparkhairane','Vashi'] },
  { slug:'koparkhairane',  name:'Koparkhairane',    zone:'Navi Mumbai', district:'Navi Mumbai', pincode:'400709', landmarks:['Kopar Khairane Station','Millennium Business Park'],       nearby:['Ghansoli','Vashi','Nerul'] },
  { slug:'kharghar',       name:'Kharghar',         zone:'Navi Mumbai', district:'Navi Mumbai', pincode:'410210', landmarks:['Central Park Kharghar','Golf Course','Utsav Chowk'],        nearby:['Belapur','Panvel','Taloja'] },
  { slug:'panvel',         name:'Panvel',           zone:'Navi Mumbai', district:'Raigad',       pincode:'410206', landmarks:['Panvel Station','Aamby Valley City','Khopoli Road'],        nearby:['Belapur','Kharghar','Kamothe'] },
  { slug:'navi-mumbai',    name:'Navi Mumbai',      zone:'Navi Mumbai', district:'Navi Mumbai', pincode:'400703', landmarks:['CBD Belapur','Vashi','Nerul','Palm Beach Road'],          nearby:['Thane','Vashi','Nerul'] },

  /* ── Thane & Beyond (Missing Nodes) ─────────────────────── */
  { slug:'ulhasnagar',    name:'Ulhasnagar',     zone:'Central Line',  district:'Thane',          pincode:'421001', landmarks:['Ulhasnagar Market','Ulhasnagar Station'],               nearby:['Kalyan','Dombivli','Ambernath'] },
  { slug:'ambernath',     name:'Ambernath',      zone:'Central Line',  district:'Thane',          pincode:'421501', landmarks:['Shiv Temple Ambernath','Ambernath Station'],           nearby:['Ulhasnagar','Badlapur'] },
  { slug:'badlapur',      name:'Badlapur',       zone:'Central Line',  district:'Thane',          pincode:'421503', landmarks:['Badlapur Station','Barvi Dam'],                       nearby:['Ambernath','Ulhasnagar'] },

  /* ── Pune & Maharashtra (Extended) ───────────────────────── */
  { slug:'pune',             name:'Pune',             zone:'Maharashtra', district:'Pune',      pincode:'411001', landmarks:['Shaniwar Wada','Aga Khan Palace','Pune Station','Magarpatta City'], nearby:['Lonavala','Hadapsar','Kothrud'] },
  { slug:'hadapsar',         name:'Hadapsar',         zone:'Maharashtra', district:'Pune',      pincode:'411028', landmarks:['Magarpatta City','Amanora Mall','Serum Institute'],           nearby:['Pune','Kothrud','Loni Kalbhor'] },
  { slug:'pimpri-chinchwad', name:'Pimpri Chinchwad', zone:'Maharashtra', district:'Pune',      pincode:'411018', landmarks:['Auto Cluster','Bird Valley Park','Pavana River'],              nearby:['Pune','Hinjewadi','Chakan'] },
  { slug:'lonavala',         name:'Lonavala',         zone:'Maharashtra', district:'Pune',      pincode:'410401', landmarks:['Tiger Point','Bhushi Dam','Lonavala Station'],               nearby:['Khandala','Pune','Karjat'] },
  { slug:'nasik',            name:'Nasik',            zone:'Maharashtra', district:'Nasik',     pincode:'422001', landmarks:['Kalaram Temple','Trimbakeshwar','Sula Vineyards','Panchavati'],       nearby:['Igatpuri','Deolali'] },
  { slug:'nagpur',           name:'Nagpur',           zone:'Maharashtra', district:'Nagpur',    pincode:'440001', landmarks:['Deekshabhoomi','Zero Mile Marker','Futala Lake'],                 nearby:['Wardha','Kamptee'] },
  { slug:'aurangabad',       name:'Aurangabad',       zone:'Maharashtra', district:'Aurangabad',pincode:'431001', landmarks:['Bibi Ka Maqbara','Panchakki','Prozone Mall'],                    nearby:['Paithan','Waluj'] },

  /* ── Jharkhand & West Bengal (Extended) ──────────────────── */
  { slug:'ranchi',    name:'Ranchi',    zone:'Jharkhand', district:'Ranchi',         pincode:'834001', landmarks:['Pahari Mandir','Rock Garden','Jagannath Temple','Ranchi Lake'],  nearby:['Hatia','Namkum'] },
  { slug:'namkum',    name:'Namkum',    zone:'Jharkhand', district:'Ranchi',         pincode:'834010', landmarks:['Namkum Railway Station','RK Mission'],                       nearby:['Ranchi','Hatia','Tatisilwai'] },
  { slug:'bariatu',   name:'Bariatu',   zone:'Jharkhand', district:'Ranchi',         pincode:'834009', landmarks:['RIMS Ranchi','Bariatu Hill'],                                nearby:['Ranchi','Kokar','Kanke'] },
  { slug:'jamshedpur',name:'Jamshedpur',zone:'Jharkhand', district:'East Singhbhum', pincode:'831001', landmarks:['Jubilee Park','Tata Steel','Dimna Lake','Bistupur'],         nearby:['Adityapur','Mango'] },
  { slug:'sakchi',    name:'Sakchi',    zone:'Jharkhand', district:'East Singhbhum', pincode:'831001', landmarks:['Sakchi Market','Tata Steel Gate'],                          nearby:['Bistupur','Mango','Jamshedpur'] },
  { slug:'dhanbad',   name:'Dhanbad',   zone:'Jharkhand', district:'Dhanbad',         pincode:'826001', landmarks:['ISM Dhanbad','Coal Mines','Bank More'],                        nearby:['Jharia','Sindri'] },
  { slug:'asansol',   name:'Asansol',   zone:'West Bengal', district:'Paschim Bardhaman',pincode:'713301', landmarks:['Ghagar Buri Chandi Temple','Maithon Dam'],                   nearby:['Durgapur','Raniganj'] },
  { slug:'kolkata',   name:'Kolkata',   zone:'West Bengal', district:'Kolkata', pincode:'700001', landmarks:['Victoria Memorial','Howrah Bridge','Park Street','Salt Lake Sector V'], nearby:['Howrah','Salt Lake'] },

  /* ── Others ────────────────────────────────────────────── */
  { slug:'bangalore', name:'Bangalore', zone:'Karnataka', district:'Bengaluru', pincode:'560001', landmarks:['Lalbagh','Cubbon Park','Bangalore Palace','MG Road','Indiranagar'],   nearby:['Whitefield','Koramangala'] },
  { slug:'mysore',    name:'Mysore',    zone:'Karnataka', district:'Mysuru',    pincode:'570001', landmarks:['Mysore Palace','Chamundi Hills','Brindavan Gardens'],                nearby:['Mandya','Hunsur'] },
];

export function getLocation(slug: string): LocationData | undefined {
  return locations.find(l => l.slug === slug);
}

export function getStaticLocationPaths() {
  return locations.map(l => ({ params: { location: l.slug } }));
}
