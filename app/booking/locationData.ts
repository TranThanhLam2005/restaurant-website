export interface Restaurant {
  name: string;
  value: string;
  address: string;
  phone: string;
}

export interface City {
  name: string;
  value: string;
  restaurants: Restaurant[];
}

export interface USState {
  name: string;
  value: string;
  cities: City[];
}

export const US_STATES_CITIES: USState[] = [
  {
    name: "California",
    value: "california",
    cities: [
      {
        name: "Los Angeles",
        value: "los-angeles",
        restaurants: [
          {
            name: "Sunset Grill LA",
            value: "sunset-grill-la",
            address: "1234 Sunset Blvd, Los Angeles, CA 90028",
            phone: "(323) 555-0101",
          },
          {
            name: "The Venice Table",
            value: "venice-table",
            address: "567 Venice Beach Blvd, Los Angeles, CA 90291",
            phone: "(310) 555-0102",
          },
          {
            name: "Downtown Bistro",
            value: "downtown-bistro-la",
            address: "890 Grand Ave, Los Angeles, CA 90012",
            phone: "(213) 555-0103",
          },
        ],
      },
      {
        name: "San Francisco",
        value: "san-francisco",
        restaurants: [
          {
            name: "Golden Gate Kitchen",
            value: "golden-gate-kitchen",
            address: "789 Market Street, San Francisco, CA 94102",
            phone: "(415) 555-0201",
          },
          {
            name: "Fisherman's Feast",
            value: "fishermans-feast",
            address: "456 Jefferson Street, San Francisco, CA 94133",
            phone: "(415) 555-0202",
          },
          {
            name: "Bay View Restaurant",
            value: "bay-view-restaurant",
            address: "321 Embarcadero, San Francisco, CA 94105",
            phone: "(415) 555-0203",
          },
          {
            name: "Mission District Eatery",
            value: "mission-district-eatery",
            address: "234 Valencia Street, San Francisco, CA 94103",
            phone: "(415) 555-0204",
          },
        ],
      },
      {
        name: "San Diego",
        value: "san-diego",
        restaurants: [
          {
            name: "Gaslamp Grill",
            value: "gaslamp-grill",
            address: "678 Fifth Avenue, San Diego, CA 92101",
            phone: "(619) 555-0301",
          },
          {
            name: "Pacific Beach Bistro",
            value: "pacific-beach-bistro",
            address: "890 Garnet Ave, San Diego, CA 92109",
            phone: "(858) 555-0302",
          },
        ],
      },
      {
        name: "San Jose",
        value: "san-jose",
        restaurants: [
          {
            name: "Silicon Valley Kitchen",
            value: "silicon-valley-kitchen",
            address: "123 Santa Clara Street, San Jose, CA 95113",
            phone: "(408) 555-0401",
          },
          {
            name: "San Jose Fine Dining",
            value: "sj-fine-dining",
            address: "456 First Street, San Jose, CA 95113",
            phone: "(408) 555-0402",
          },
          {
            name: "Tech Plaza Restaurant",
            value: "tech-plaza-restaurant",
            address: "789 The Alameda, San Jose, CA 95126",
            phone: "(408) 555-0403",
          },
        ],
      },
      {
        name: "Sacramento",
        value: "sacramento",
        restaurants: [
          {
            name: "Capitol Cuisine",
            value: "capitol-cuisine",
            address: "1010 K Street, Sacramento, CA 95814",
            phone: "(916) 555-0501",
          },
          {
            name: "Midtown Tavern",
            value: "midtown-tavern-sac",
            address: "2020 J Street, Sacramento, CA 95811",
            phone: "(916) 555-0502",
          },
        ],
      },
    ],
  },
  {
    name: "Texas",
    value: "texas",
    cities: [
      {
        name: "Houston",
        value: "houston",
        restaurants: [
          {
            name: "Space City Steakhouse",
            value: "space-city-steakhouse",
            address: "1234 Main Street, Houston, TX 77002",
            phone: "(713) 555-1001",
          },
          {
            name: "Galleria Dining",
            value: "galleria-dining",
            address: "5678 Westheimer Road, Houston, TX 77056",
            phone: "(713) 555-1002",
          },
          {
            name: "Heights Kitchen",
            value: "heights-kitchen",
            address: "910 Heights Blvd, Houston, TX 77007",
            phone: "(713) 555-1003",
          },
          {
            name: "Downtown Houston Grill",
            value: "downtown-houston-grill",
            address: "2345 Travis Street, Houston, TX 77002",
            phone: "(713) 555-1004",
          },
        ],
      },
      {
        name: "Dallas",
        value: "dallas",
        restaurants: [
          {
            name: "Deep Ellum Eats",
            value: "deep-ellum-eats",
            address: "3456 Elm Street, Dallas, TX 75226",
            phone: "(214) 555-2001",
          },
          {
            name: "Uptown Dallas Bistro",
            value: "uptown-dallas-bistro",
            address: "4567 McKinney Avenue, Dallas, TX 75204",
            phone: "(214) 555-2002",
          },
          {
            name: "Trinity Groves Kitchen",
            value: "trinity-groves-kitchen",
            address: "5678 Singleton Blvd, Dallas, TX 75212",
            phone: "(214) 555-2003",
          },
        ],
      },
      {
        name: "Austin",
        value: "austin",
        restaurants: [
          {
            name: "Sixth Street Tavern",
            value: "sixth-street-tavern",
            address: "789 East 6th Street, Austin, TX 78701",
            phone: "(512) 555-3001",
          },
          {
            name: "South Congress Cafe",
            value: "south-congress-cafe",
            address: "1234 South Congress Ave, Austin, TX 78704",
            phone: "(512) 555-3002",
          },
        ],
      },
      {
        name: "San Antonio",
        value: "san-antonio",
        restaurants: [
          {
            name: "Riverwalk Restaurant",
            value: "riverwalk-restaurant",
            address: "567 River Walk, San Antonio, TX 78205",
            phone: "(210) 555-4001",
          },
          {
            name: "Alamo Plaza Grill",
            value: "alamo-plaza-grill",
            address: "890 Alamo Plaza, San Antonio, TX 78205",
            phone: "(210) 555-4002",
          },
          {
            name: "Pearl District Kitchen",
            value: "pearl-district-kitchen",
            address: "1234 Pearl Parkway, San Antonio, TX 78215",
            phone: "(210) 555-4003",
          },
        ],
      },
      {
        name: "Fort Worth",
        value: "fort-worth",
        restaurants: [
          {
            name: "Stockyards Steakhouse",
            value: "stockyards-steakhouse",
            address: "123 East Exchange Ave, Fort Worth, TX 76164",
            phone: "(817) 555-5001",
          },
          {
            name: "Sundance Square Dining",
            value: "sundance-square-dining",
            address: "456 Main Street, Fort Worth, TX 76102",
            phone: "(817) 555-5002",
          },
        ],
      },
    ],
  },
  {
    name: "Florida",
    value: "florida",
    cities: [
      {
        name: "Miami",
        value: "miami",
        restaurants: [
          {
            name: "South Beach Grill",
            value: "south-beach-grill",
            address: "1234 Ocean Drive, Miami Beach, FL 33139",
            phone: "(305) 555-6001",
          },
          {
            name: "Brickell Bistro",
            value: "brickell-bistro",
            address: "5678 Brickell Avenue, Miami, FL 33131",
            phone: "(305) 555-6002",
          },
          {
            name: "Wynwood Kitchen",
            value: "wynwood-kitchen",
            address: "910 NW 2nd Avenue, Miami, FL 33136",
            phone: "(305) 555-6003",
          },
          {
            name: "Little Havana Cafe",
            value: "little-havana-cafe",
            address: "1234 SW 8th Street, Miami, FL 33135",
            phone: "(305) 555-6004",
          },
        ],
      },
      {
        name: "Orlando",
        value: "orlando",
        restaurants: [
          {
            name: "Theme Park Tavern",
            value: "theme-park-tavern",
            address: "2345 International Drive, Orlando, FL 32819",
            phone: "(407) 555-7001",
          },
          {
            name: "Downtown Orlando Kitchen",
            value: "downtown-orlando-kitchen",
            address: "3456 Church Street, Orlando, FL 32801",
            phone: "(407) 555-7002",
          },
        ],
      },
      {
        name: "Tampa",
        value: "tampa",
        restaurants: [
          {
            name: "Ybor City Dining",
            value: "ybor-city-dining",
            address: "1234 7th Avenue, Tampa, FL 33605",
            phone: "(813) 555-8001",
          },
          {
            name: "Bayshore Restaurant",
            value: "bayshore-restaurant",
            address: "5678 Bayshore Blvd, Tampa, FL 33611",
            phone: "(813) 555-8002",
          },
          {
            name: "Hyde Park Bistro",
            value: "hyde-park-bistro",
            address: "910 South Howard Ave, Tampa, FL 33606",
            phone: "(813) 555-8003",
          },
        ],
      },
      {
        name: "Jacksonville",
        value: "jacksonville",
        restaurants: [
          {
            name: "Riverside Grill",
            value: "riverside-grill-jax",
            address: "2345 Park Street, Jacksonville, FL 32204",
            phone: "(904) 555-9001",
          },
          {
            name: "Beach Boulevard Bistro",
            value: "beach-blvd-bistro",
            address: "3456 Beach Blvd, Jacksonville, FL 32207",
            phone: "(904) 555-9002",
          },
        ],
      },
      {
        name: "Fort Lauderdale",
        value: "fort-lauderdale",
        restaurants: [
          {
            name: "Las Olas Kitchen",
            value: "las-olas-kitchen",
            address: "789 East Las Olas Blvd, Fort Lauderdale, FL 33301",
            phone: "(954) 555-1101",
          },
          {
            name: "Beach Front Dining",
            value: "beach-front-dining-ftl",
            address: "1234 Seabreeze Blvd, Fort Lauderdale, FL 33316",
            phone: "(954) 555-1102",
          },
        ],
      },
    ],
  },
  {
    name: "New York",
    value: "new-york",
    cities: [
      {
        name: "New York City",
        value: "new-york-city",
        restaurants: [
          {
            name: "Manhattan Prime",
            value: "manhattan-prime",
            address: "567 5th Avenue, New York, NY 10017",
            phone: "(212) 555-1201",
          },
          {
            name: "Brooklyn Heights Bistro",
            value: "brooklyn-heights-bistro",
            address: "890 Montague Street, Brooklyn, NY 11201",
            phone: "(718) 555-1202",
          },
          {
            name: "Times Square Kitchen",
            value: "times-square-kitchen",
            address: "1234 Broadway, New York, NY 10036",
            phone: "(212) 555-1203",
          },
          {
            name: "SoHo Dining",
            value: "soho-dining",
            address: "5678 Spring Street, New York, NY 10012",
            phone: "(212) 555-1204",
          },
        ],
      },
      {
        name: "Buffalo",
        value: "buffalo",
        restaurants: [
          {
            name: "Buffalo Wings & Co",
            value: "buffalo-wings-co",
            address: "234 Main Street, Buffalo, NY 14202",
            phone: "(716) 555-1301",
          },
          {
            name: "Elmwood Avenue Eatery",
            value: "elmwood-ave-eatery",
            address: "567 Elmwood Avenue, Buffalo, NY 14222",
            phone: "(716) 555-1302",
          },
        ],
      },
      {
        name: "Rochester",
        value: "rochester",
        restaurants: [
          {
            name: "Park Avenue Bistro",
            value: "park-ave-bistro-roc",
            address: "890 Park Avenue, Rochester, NY 14607",
            phone: "(585) 555-1401",
          },
          {
            name: "East Avenue Dining",
            value: "east-ave-dining",
            address: "1234 East Avenue, Rochester, NY 14607",
            phone: "(585) 555-1402",
          },
          {
            name: "Downtown Rochester Grill",
            value: "downtown-roc-grill",
            address: "567 Main Street E, Rochester, NY 14604",
            phone: "(585) 555-1403",
          },
        ],
      },
      {
        name: "Albany",
        value: "albany",
        restaurants: [
          {
            name: "Capitol District Kitchen",
            value: "capitol-district-kitchen",
            address: "345 State Street, Albany, NY 12207",
            phone: "(518) 555-1501",
          },
          {
            name: "Lark Street Bistro",
            value: "lark-street-bistro",
            address: "678 Lark Street, Albany, NY 12210",
            phone: "(518) 555-1502",
          },
        ],
      },
      {
        name: "Syracuse",
        value: "syracuse",
        restaurants: [
          {
            name: "Armory Square Dining",
            value: "armory-square-dining",
            address: "123 Walton Street, Syracuse, NY 13202",
            phone: "(315) 555-1601",
          },
          {
            name: "University Hill Restaurant",
            value: "university-hill-restaurant",
            address: "456 Marshall Street, Syracuse, NY 13210",
            phone: "(315) 555-1602",
          },
        ],
      },
    ],
  },
  {
    name: "Washington",
    value: "washington",
    cities: [
      {
        name: "Seattle",
        value: "seattle",
        restaurants: [
          {
            name: "Pike Place Kitchen",
            value: "pike-place-kitchen",
            address: "1234 Pike Street, Seattle, WA 98101",
            phone: "(206) 555-1701",
          },
          {
            name: "Capitol Hill Bistro",
            value: "capitol-hill-bistro-sea",
            address: "5678 Broadway E, Seattle, WA 98102",
            phone: "(206) 555-1702",
          },
          {
            name: "Waterfront Dining",
            value: "waterfront-dining-sea",
            address: "910 Alaskan Way, Seattle, WA 98104",
            phone: "(206) 555-1703",
          },
        ],
      },
      {
        name: "Spokane",
        value: "spokane",
        restaurants: [
          {
            name: "Downtown Spokane Grill",
            value: "downtown-spokane-grill",
            address: "234 West Riverside Ave, Spokane, WA 99201",
            phone: "(509) 555-1801",
          },
          {
            name: "South Hill Restaurant",
            value: "south-hill-restaurant",
            address: "567 South Grand Blvd, Spokane, WA 99203",
            phone: "(509) 555-1802",
          },
        ],
      },
      {
        name: "Tacoma",
        value: "tacoma",
        restaurants: [
          {
            name: "Ruston Way Waterfront",
            value: "ruston-way-waterfront",
            address: "890 Ruston Way, Tacoma, WA 98402",
            phone: "(253) 555-1901",
          },
          {
            name: "Sixth Avenue Bistro",
            value: "sixth-ave-bistro-tac",
            address: "1234 Sixth Avenue, Tacoma, WA 98405",
            phone: "(253) 555-1902",
          },
          {
            name: "Point Defiance Kitchen",
            value: "point-defiance-kitchen",
            address: "5678 Pearl Street, Tacoma, WA 98407",
            phone: "(253) 555-1903",
          },
        ],
      },
      {
        name: "Vancouver",
        value: "vancouver",
        restaurants: [
          {
            name: "Waterfront Vancouver",
            value: "waterfront-vancouver-wa",
            address: "345 Columbia Street, Vancouver, WA 98660",
            phone: "(360) 555-2001",
          },
          {
            name: "Main Street Eatery",
            value: "main-street-eatery-van",
            address: "678 Main Street, Vancouver, WA 98660",
            phone: "(360) 555-2002",
          },
        ],
      },
      {
        name: "Bellevue",
        value: "bellevue",
        restaurants: [
          {
            name: "Bellevue Square Dining",
            value: "bellevue-square-dining",
            address: "1234 Bellevue Way NE, Bellevue, WA 98004",
            phone: "(425) 555-2101",
          },
          {
            name: "Downtown Bellevue Bistro",
            value: "downtown-bellevue-bistro",
            address: "5678 NE 8th Street, Bellevue, WA 98004",
            phone: "(425) 555-2102",
          },
          {
            name: "Lake Bellevue Kitchen",
            value: "lake-bellevue-kitchen",
            address: "910 Bellevue Way SE, Bellevue, WA 98004",
            phone: "(425) 555-2103",
          },
        ],
      },
    ],
  },
  {
    name: "Illinois",
    value: "illinois",
    cities: [
      {
        name: "Chicago",
        value: "chicago",
        restaurants: [
          {
            name: "Magnificent Mile Grill",
            value: "magnificent-mile-grill",
            address: "789 N Michigan Avenue, Chicago, IL 60611",
            phone: "(312) 555-2201",
          },
          {
            name: "River North Kitchen",
            value: "river-north-kitchen",
            address: "1234 W Hubbard Street, Chicago, IL 60642",
            phone: "(312) 555-2202",
          },
          {
            name: "Loop Dining",
            value: "loop-dining",
            address: "5678 S State Street, Chicago, IL 60605",
            phone: "(312) 555-2203",
          },
          {
            name: "Wrigleyville Tavern",
            value: "wrigleyville-tavern",
            address: "910 W Addison Street, Chicago, IL 60613",
            phone: "(773) 555-2204",
          },
        ],
      },
      {
        name: "Aurora",
        value: "aurora",
        restaurants: [
          {
            name: "Downtown Aurora Bistro",
            value: "downtown-aurora-bistro",
            address: "234 Galena Blvd, Aurora, IL 60506",
            phone: "(630) 555-2301",
          },
          {
            name: "Fox Valley Kitchen",
            value: "fox-valley-kitchen",
            address: "567 Main Street, Aurora, IL 60505",
            phone: "(630) 555-2302",
          },
        ],
      },
      {
        name: "Naperville",
        value: "naperville",
        restaurants: [
          {
            name: "Naperville Riverwalk Dining",
            value: "naperville-riverwalk-dining",
            address: "890 Jackson Avenue, Naperville, IL 60540",
            phone: "(630) 555-2401",
          },
          {
            name: "Downtown Naperville Grill",
            value: "downtown-naperville-grill",
            address: "1234 S Washington Street, Naperville, IL 60540",
            phone: "(630) 555-2402",
          },
        ],
      },
      {
        name: "Joliet",
        value: "joliet",
        restaurants: [
          {
            name: "Joliet Historic District",
            value: "joliet-historic-district",
            address: "345 N Chicago Street, Joliet, IL 60432",
            phone: "(815) 555-2501",
          },
          {
            name: "Rialto Square Kitchen",
            value: "rialto-square-kitchen",
            address: "678 N Chicago Street, Joliet, IL 60432",
            phone: "(815) 555-2502",
          },
          {
            name: "Joliet Waterfront Bistro",
            value: "joliet-waterfront-bistro",
            address: "910 Ruby Street, Joliet, IL 60435",
            phone: "(815) 555-2503",
          },
        ],
      },
      {
        name: "Rockford",
        value: "rockford",
        restaurants: [
          {
            name: "Downtown Rockford Grill",
            value: "downtown-rockford-grill",
            address: "123 N Main Street, Rockford, IL 61101",
            phone: "(815) 555-2601",
          },
          {
            name: "East State Street Dining",
            value: "east-state-street-dining",
            address: "456 E State Street, Rockford, IL 61104",
            phone: "(815) 555-2602",
          },
        ],
      },
    ],
  },
  {
    name: "Pennsylvania",
    value: "pennsylvania",
    cities: [
      {
        name: "Philadelphia",
        value: "philadelphia",
        restaurants: [
          {
            name: "Independence Hall Kitchen",
            value: "independence-hall-kitchen",
            address: "234 Market Street, Philadelphia, PA 19106",
            phone: "(215) 555-2701",
          },
          {
            name: "Rittenhouse Square Dining",
            value: "rittenhouse-square-dining",
            address: "567 Walnut Street, Philadelphia, PA 19102",
            phone: "(215) 555-2702",
          },
          {
            name: "South Street Bistro",
            value: "south-street-bistro",
            address: "890 South Street, Philadelphia, PA 19147",
            phone: "(215) 555-2703",
          },
        ],
      },
      {
        name: "Pittsburgh",
        value: "pittsburgh",
        restaurants: [
          {
            name: "Strip District Kitchen",
            value: "strip-district-kitchen",
            address: "1234 Penn Avenue, Pittsburgh, PA 15222",
            phone: "(412) 555-2801",
          },
          {
            name: "Downtown Pittsburgh Grill",
            value: "downtown-pittsburgh-grill",
            address: "5678 Liberty Avenue, Pittsburgh, PA 15222",
            phone: "(412) 555-2802",
          },
          {
            name: "Station Square Dining",
            value: "station-square-dining",
            address: "910 Station Square Drive, Pittsburgh, PA 15219",
            phone: "(412) 555-2803",
          },
          {
            name: "Southside Works Restaurant",
            value: "southside-works-restaurant",
            address: "2345 E Carson Street, Pittsburgh, PA 15203",
            phone: "(412) 555-2804",
          },
        ],
      },
      {
        name: "Allentown",
        value: "allentown",
        restaurants: [
          {
            name: "Hamilton Street Bistro",
            value: "hamilton-street-bistro",
            address: "678 Hamilton Street, Allentown, PA 18101",
            phone: "(610) 555-2901",
          },
          {
            name: "Lehigh Valley Kitchen",
            value: "lehigh-valley-kitchen",
            address: "901 Linden Street, Allentown, PA 18101",
            phone: "(610) 555-2902",
          },
        ],
      },
      {
        name: "Erie",
        value: "erie",
        restaurants: [
          {
            name: "Bayfront Dining",
            value: "bayfront-dining-erie",
            address: "123 State Street, Erie, PA 16507",
            phone: "(814) 555-3001",
          },
          {
            name: "Downtown Erie Grill",
            value: "downtown-erie-grill",
            address: "456 Peach Street, Erie, PA 16501",
            phone: "(814) 555-3002",
          },
        ],
      },
      {
        name: "Reading",
        value: "reading",
        restaurants: [
          {
            name: "Penn Square Kitchen",
            value: "penn-square-kitchen",
            address: "789 Penn Street, Reading, PA 19602",
            phone: "(610) 555-3101",
          },
          {
            name: "Reading Terminal Market",
            value: "reading-terminal-market",
            address: "234 Court Street, Reading, PA 19601",
            phone: "(610) 555-3102",
          },
          {
            name: "West Reading Bistro",
            value: "west-reading-bistro",
            address: "567 Penn Avenue, Reading, PA 19611",
            phone: "(610) 555-3103",
          },
        ],
      },
    ],
  },
  {
    name: "Arizona",
    value: "arizona",
    cities: [
      {
        name: "Phoenix",
        value: "phoenix",
        restaurants: [
          {
            name: "Desert Sky Restaurant",
            value: "desert-sky-restaurant",
            address: "1234 N Central Avenue, Phoenix, AZ 85004",
            phone: "(602) 555-3201",
          },
          {
            name: "Scottsdale Road Kitchen",
            value: "scottsdale-road-kitchen",
            address: "5678 N Scottsdale Road, Phoenix, AZ 85250",
            phone: "(480) 555-3202",
          },
          {
            name: "Downtown Phoenix Grill",
            value: "downtown-phoenix-grill",
            address: "910 E Washington Street, Phoenix, AZ 85004",
            phone: "(602) 555-3203",
          },
        ],
      },
      {
        name: "Tucson",
        value: "tucson",
        restaurants: [
          {
            name: "Fourth Avenue Bistro",
            value: "fourth-avenue-bistro",
            address: "234 N 4th Avenue, Tucson, AZ 85705",
            phone: "(520) 555-3301",
          },
          {
            name: "University District Dining",
            value: "university-district-dining",
            address: "567 E University Blvd, Tucson, AZ 85705",
            phone: "(520) 555-3302",
          },
          {
            name: "Downtown Tucson Kitchen",
            value: "downtown-tucson-kitchen",
            address: "890 E Congress Street, Tucson, AZ 85701",
            phone: "(520) 555-3303",
          },
        ],
      },
      {
        name: "Mesa",
        value: "mesa",
        restaurants: [
          {
            name: "Mesa Riverview Restaurant",
            value: "mesa-riverview-restaurant",
            address: "1234 N Dobson Road, Mesa, AZ 85201",
            phone: "(480) 555-3401",
          },
          {
            name: "Downtown Mesa Grill",
            value: "downtown-mesa-grill",
            address: "5678 W Main Street, Mesa, AZ 85201",
            phone: "(480) 555-3402",
          },
        ],
      },
      {
        name: "Chandler",
        value: "chandler",
        restaurants: [
          {
            name: "Chandler Fashion Center Dining",
            value: "chandler-fashion-dining",
            address: "910 W Chandler Blvd, Chandler, AZ 85226",
            phone: "(480) 555-3501",
          },
          {
            name: "Downtown Chandler Bistro",
            value: "downtown-chandler-bistro",
            address: "234 N Arizona Avenue, Chandler, AZ 85225",
            phone: "(480) 555-3502",
          },
        ],
      },
      {
        name: "Scottsdale",
        value: "scottsdale",
        restaurants: [
          {
            name: "Old Town Scottsdale Kitchen",
            value: "old-town-scottsdale-kitchen",
            address: "567 N Scottsdale Road, Scottsdale, AZ 85257",
            phone: "(480) 555-3601",
          },
          {
            name: "Fashion Square Restaurant",
            value: "fashion-square-restaurant",
            address: "890 E Camelback Road, Scottsdale, AZ 85251",
            phone: "(480) 555-3602",
          },
          {
            name: "Waterfront Scottsdale",
            value: "waterfront-scottsdale",
            address: "1234 N Scottsdale Road, Scottsdale, AZ 85251",
            phone: "(480) 555-3603",
          },
          {
            name: "Kierland Commons Bistro",
            value: "kierland-commons-bistro",
            address: "5678 N Scottsdale Road, Scottsdale, AZ 85254",
            phone: "(480) 555-3604",
          },
        ],
      },
    ],
  },
];

export function getCitiesForState(stateValue: string): City[] {
  const state = US_STATES_CITIES.find((s) => s.value === stateValue);
  return state?.cities || [];
}

export function getStateName(stateValue: string): string {
  const state = US_STATES_CITIES.find((s) => s.value === stateValue);
  return state?.name || "";
}

export function getCityName(stateValue: string, cityValue: string): string {
  const cities = getCitiesForState(stateValue);
  const city = cities.find((c) => c.value === cityValue);
  return city?.name || "";
}

export function getRestaurantsForCity(
  stateValue: string,
  cityValue: string
): Restaurant[] {
  const state = US_STATES_CITIES.find((s) => s.value === stateValue);
  if (!state) return [];

  const city = state.cities.find((c) => c.value === cityValue);
  return city?.restaurants || [];
}

export function getRestaurantDetails(
  stateValue: string,
  cityValue: string,
  restaurantValue: string
): Restaurant | undefined {
  const restaurants = getRestaurantsForCity(stateValue, cityValue);
  return restaurants.find((r) => r.value === restaurantValue);
}
