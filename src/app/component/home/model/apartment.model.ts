export interface IApartment {
    Latitude: number;
    Longitude: number;
    Label?: string;
    Address: string;
    Unit: string;
    City: string;
    State: string;
    Zip: number;
    Rent: number;
    Type: string;
    Bedrooms: number;
    Bathrooms: number;
    Rooms: number;
    SqFt: number;
    Amenities: string;
    Neighborhood: string;
    Availability: string;
    BuildingAmenities: string;
    Description: string;
    FeaturedImage: string;
    AdditionalImages: string;
    FloorPlan: string;
    iconUrl?:string;
}

export class ApartmentModelData {
    public apartmentData: IApartment[] = [
        {
            "Latitude": 40.77397639999999,
            "Longitude": -73.95819310000002,
            "Label": "1",
            "Address": "179 E 78th Street",
            "Unit": "1B",
            "City": "New York",
            "State": "NY",
            "Zip": 10075,
            "Rent": 3200,
            "Type": "Co-op",
            "Bedrooms": 1,
            "Bathrooms": 1,
            "Rooms": 4,
            "SqFt": 780,
            "Amenities": "Outdoor Space, Dishwasher, Jacuzzi Tub, Hardwood Floors, Loft",
            "Neighborhood": "Upper East Side",
            "Availability": "November 1st, 2017",
            "BuildingAmenities": "Washer/Dryer, Elevator",
            "Description": "Welcomed by a gracious oval-shaped marble foyer, through to a grand living room with magnificent Central Park views, this elegant and sophisticated home spans a total of 2134 ft² with three luxurious bedrooms.\n" +
            "\n" +
            "Elegantly appointed and designed this residence features Murano glass chandeliers, bespoke furnishings, en-suite bathrooms clad in Turkish and Italian marble with rain showers and deep soaking tubs, fully equipped butler's kitchen, curated artwork, and technology by Bose, with toiletries by Etro.\n" +
            "\n" +
            "Residents have access to a full suite of bespoke services including personalized and dedicated concierge service, twice-daily maid service, fitness center, and business center.\n" +
            "\n" +
            "Other features include access to The Pierre’s vibrant new French inspired restaurant, Perrine, a chauffeur-driven Jaguar XJL (based on availability) , and The Rotunda, an iconic room re-imagined by renowned architect and AD 100 designer Daniel Romualdez with table side champagne & cocktails.",
            "FeaturedImage": "http://104.239.169.23/assets/img/Stock%20Images%20_%20Floorpans/1/Featured Image.jpeg",
            "AdditionalImages": "",
            "FloorPlan": ""

        },
        {
            "Latitude": 40.7785075,
            "Longitude": -73.95385469999997,
            "Label": "2",
            "Address": "200 East 86th Street",
            "Unit": "12C",
            "City": "New York",
            "State": "NY",
            "Zip": 10028,
            "Rent": 1500,
            "Type": "Rental",
            "Bedrooms": 0,
            "Bathrooms": 1,
            "Rooms": 3,
            "SqFt": 400,
            "Amenities": "Dishwasher, Alcove Studio, Hardwood Floors",
            "Neighborhood": "Upper East Side",
            "Availability": "Available",
            "BuildingAmenities": "Washer/Dryer, Roof Deck, Doorman, Elevator",
            "Description": "Welcomed by a gracious oval-shaped marble foyer, through to a grand living room with magnificent Central Park views, this elegant and sophisticated home spans a total of 2134 ft² with three luxurious bedrooms.\n" +
            "\n" +
            "Elegantly appointed and designed this residence features Murano glass chandeliers, bespoke furnishings, en-suite bathrooms clad in Turkish and Italian marble with rain showers and deep soaking tubs, fully equipped butler's kitchen, curated artwork, and technology by Bose, with toiletries by Etro.\n" +
            "\n" +
            "Residents have access to a full suite of bespoke services including personalized and dedicated concierge service, twice-daily maid service, fitness center, and business center.\n" +
            "\n" +
            "Other features include access to The Pierre’s vibrant new French inspired restaurant, Perrine, a chauffeur-driven Jaguar XJL (based on availability) , and The Rotunda, an iconic room re-imagined by renowned architect and AD 100 designer Daniel Romualdez with table side champagne & cocktails.",
            "FeaturedImage": "http://104.239.169.23/assets/img/Stock%20Images%20_%20Floorpans/2/Featured Image.jpeg",
            "AdditionalImages": "",
            "FloorPlan": ""

        },
        {
            "Latitude": 40.7339478,
            "Longitude": -74.00032499999998,
            "Label": "3",
            "Address": "12 Christopher Street",
            "Unit": "3D",
            "City": "New York",
            "State": "NY",
            "Zip": 10014,
            "Rent": 5500,
            "Type": "Condo",
            "Bedrooms": 3,
            "Bathrooms": 2,
            "Rooms": 7,
            "SqFt": 1350,
            "Amenities": "Washer/Dryer, Dishwasher, Hardwood Floors, Balcony",
            "Neighborhood": "West Village",
            "Availability": "Available",
            "BuildingAmenities": "Doorman, Elevator",
            "Description": "Welcomed by a gracious oval-shaped marble foyer, through to a grand living room with magnificent Central Park views, this elegant and sophisticated home spans a total of 2134 ft² with three luxurious bedrooms.\n" +
            "\n" +
            "Elegantly appointed and designed this residence features Murano glass chandeliers, bespoke furnishings, en-suite bathrooms clad in Turkish and Italian marble with rain showers and deep soaking tubs, fully equipped butler's kitchen, curated artwork, and technology by Bose, with toiletries by Etro.\n" +
            "\n" +
            "Residents have access to a full suite of bespoke services including personalized and dedicated concierge service, twice-daily maid service, fitness center, and business center.\n" +
            "\n" +
            "Other features include access to The Pierre’s vibrant new French inspired restaurant, Perrine, a chauffeur-driven Jaguar XJL (based on availability) , and The Rotunda, an iconic room re-imagined by renowned architect and AD 100 designer Daniel Romualdez with table side champagne & cocktails.",
            "FeaturedImage": "http://104.239.169.23/assets/img/Stock%20Images%20_%20Floorpans/3/Featured Image.jpeg",
            "AdditionalImages": "",
            "FloorPlan": ""

        },
        {
            "Latitude": 40.73043089999999,
            "Longitude": -74.00279069999999,
            "Label": "4",
            "Address": "25 Bleecker Street",
            "Unit": "14F",
            "City": "New York",
            "State": "NY",
            "Zip": 10012,
            "Rent": 2300,
            "Type": "Rental",
            "Bedrooms": 1,
            "Bathrooms": 1,
            "Rooms": 3,
            "SqFt": 550,
            "Amenities": "Dishwasher",
            "Neighborhood": "East Village",
            "Availability": "November 1st, 2017",
            "BuildingAmenities": "Washer/Dryer, Elevator",
            "Description": "Welcomed by a gracious oval-shaped marble foyer, through to a grand living room with magnificent Central Park views, this elegant and sophisticated home spans a total of 2134 ft² with three luxurious bedrooms.\n" +
            "\n" +
            "Elegantly appointed and designed this residence features Murano glass chandeliers, bespoke furnishings, en-suite bathrooms clad in Turkish and Italian marble with rain showers and deep soaking tubs, fully equipped butler's kitchen, curated artwork, and technology by Bose, with toiletries by Etro.\n" +
            "\n" +
            "Residents have access to a full suite of bespoke services including personalized and dedicated concierge service, twice-daily maid service, fitness center, and business center.\n" +
            "\n" +
            "Other features include access to The Pierre’s vibrant new French inspired restaurant, Perrine, a chauffeur-driven Jaguar XJL (based on availability) , and The Rotunda, an iconic room re-imagined by renowned architect and AD 100 designer Daniel Romualdez with table side champagne & cocktails.",
            "FeaturedImage": "http://104.239.169.23/assets/img/Stock%20Images%20_%20Floorpans/4/Featured Image.jpeg",
            "AdditionalImages": "",
            "FloorPlan": ""

        },
        {
            "Latitude": 40.7042823,
            "Longitude": -74.00630430000001,
            "Label": "5",
            "Address": "150 Wall Street",
            "Unit": "32C",
            "City": "New York",
            "State": "NY",
            "Zip": 10005,
            "Rent": 3500,
            "Type": "Condo",
            "Bedrooms": 2,
            "Bathrooms": 2,
            "Rooms": 5,
            "SqFt": 750,
            "Amenities": "Hardwood Floors, Dishwasher",
            "Neighborhood": "FiDi",
            "Availability": "November 1st, 2017",
            "BuildingAmenities": "Washer/Dryer, Elevator",
            "Description": "Welcomed by a gracious oval-shaped marble foyer, through to a grand living room with magnificent Central Park views, this elegant and sophisticated home spans a total of 2134 ft² with three luxurious bedrooms.\n" +
            "\n" +
            "Elegantly appointed and designed this residence features Murano glass chandeliers, bespoke furnishings, en-suite bathrooms clad in Turkish and Italian marble with rain showers and deep soaking tubs, fully equipped butler's kitchen, curated artwork, and technology by Bose, with toiletries by Etro.\n" +
            "\n" +
            "Residents have access to a full suite of bespoke services including personalized and dedicated concierge service, twice-daily maid service, fitness center, and business center.\n" +
            "\n" +
            "Other features include access to The Pierre’s vibrant new French inspired restaurant, Perrine, a chauffeur-driven Jaguar XJL (based on availability) , and The Rotunda, an iconic room re-imagined by renowned architect and AD 100 designer Daniel Romualdez with table side champagne & cocktails.",
            "FeaturedImage": "http://104.239.169.23/assets/img/Stock%20Images%20_%20Floorpans/5/Featured Image.jpeg",
            "AdditionalImages": "",
            "FloorPlan": ""

        },
        {
            "Latitude": 40.71268500000001,
            "Longitude": -73.96613300000001,
            "Label": "6",
            "Address": "390 Wythe Avenue",
            "Unit": "1C",
            "City": "Brooklyln",
            "State": "NY",
            "Zip": 11249,
            "Rent": 4150,
            "Type": "Co-Op",
            "Bedrooms": 2,
            "Bathrooms": 2.5,
            "Rooms": 5,
            "SqFt": 800,
            "Amenities": "Washer/Dryer, Dishwasher, Hardwood Floorsy",
            "Neighborhood": "Williamsburg",
            "Availability": "November 1st, 2017",
            "BuildingAmenities": "Doorman, Elevator",
            "Description": "Welcomed by a gracious oval-shaped marble foyer, through to a grand living room with magnificent Central Park views, this elegant and sophisticated home spans a total of 2134 ft² with three luxurious bedrooms.\n" +
            "\n" +
            "Elegantly appointed and designed this residence features Murano glass chandeliers, bespoke furnishings, en-suite bathrooms clad in Turkish and Italian marble with rain showers and deep soaking tubs, fully equipped butler's kitchen, curated artwork, and technology by Bose, with toiletries by Etro.\n" +
            "\n" +
            "Residents have access to a full suite of bespoke services including personalized and dedicated concierge service, twice-daily maid service, fitness center, and business center.\n" +
            "\n" +
            "Other features include access to The Pierre’s vibrant new French inspired restaurant, Perrine, a chauffeur-driven Jaguar XJL (based on availability) , and The Rotunda, an iconic room re-imagined by renowned architect and AD 100 designer Daniel Romualdez with table side champagne & cocktails.",
            "FeaturedImage": "http://104.239.169.23/assets/img/Stock%20Images%20_%20Floorpans/6/Featured Image.jpeg",
            "AdditionalImages": "",
            "FloorPlan": ""

        },
        {
            "Latitude": 40.798595,
            "Longitude": -73.93403599999999,
            "Label": "7",
            "Address": "350 East 120th Street",
            "Unit": "2B",
            "City": "Brooklyln",
            "State": "NY",
            "Zip": 10035,
            "Rent": 6000,
            "Type": "Condo",
            "Bedrooms": 4,
            "Bathrooms": 4,
            "Rooms": 9,
            "SqFt": 1600,
            "Amenities": "Outdoor Space, Dishwasher, Jacuzzi Tub, Hardwood Floors, Loft",
            "Neighborhood": "Harlem",
            "Availability": "Available",
            "BuildingAmenities": "Washer/Dryer, Roof Deck, Doorman, Elevator",
            "Description": "Welcomed by a gracious oval-shaped marble foyer, through to a grand living room with magnificent Central Park views, this elegant and sophisticated home spans a total of 2134 ft² with three luxurious bedrooms.\n" +
            "\n" +
            "Elegantly appointed and designed this residence features Murano glass chandeliers, bespoke furnishings, en-suite bathrooms clad in Turkish and Italian marble with rain showers and deep soaking tubs, fully equipped butler's kitchen, curated artwork, and technology by Bose, with toiletries by Etro.\n" +
            "\n" +
            "Residents have access to a full suite of bespoke services including personalized and dedicated concierge service, twice-daily maid service, fitness center, and business center.\n" +
            "\n" +
            "Other features include access to The Pierre’s vibrant new French inspired restaurant, Perrine, a chauffeur-driven Jaguar XJL (based on availability) , and The Rotunda, an iconic room re-imagined by renowned architect and AD 100 designer Daniel Romualdez with table side champagne & cocktails.",
            "FeaturedImage": "http://104.239.169.23/assets/img/Stock%20Images%20_%20Floorpans/7/Featured Image.jpeg",
            "AdditionalImages": "",
            "FloorPlan": ""

        },
        {
            "Latitude": 40.702711,
            "Longitude": -73.98579589999997,
            "Label": "8",
            "Address": "200 Water Street",
            "Unit": "4D",
            "City": "Brooklyln",
            "State": "NY",
            "Zip": 10038,
            "Rent": 2000,
            "Type": "Rental",
            "Bedrooms": 1,
            "Bathrooms": 1,
            "Rooms": 3,
            "SqFt": 600,
            "Amenities": "Hardwood Floors, Dishwasher",
            "Neighborhood": "Dumbo",
            "Availability": "Available",
            "BuildingAmenities": "Washer/Dryer, Roof Deck, Doorman, Elevator",
            "Description": "Welcomed by a gracious oval-shaped marble foyer, through to a grand living room with magnificent Central Park views, this elegant and sophisticated home spans a total of 2134 ft² with three luxurious bedrooms.\n" +
            "\n" +
            "Elegantly appointed and designed this residence features Murano glass chandeliers, bespoke furnishings, en-suite bathrooms clad in Turkish and Italian marble with rain showers and deep soaking tubs, fully equipped butler's kitchen, curated artwork, and technology by Bose, with toiletries by Etro.\n" +
            "\n" +
            "Residents have access to a full suite of bespoke services including personalized and dedicated concierge service, twice-daily maid service, fitness center, and business center.\n" +
            "\n" +
            "Other features include access to The Pierre’s vibrant new French inspired restaurant, Perrine, a chauffeur-driven Jaguar XJL (based on availability) , and The Rotunda, an iconic room re-imagined by renowned architect and AD 100 designer Daniel Romualdez with table side champagne & cocktails.",
            "FeaturedImage": "http://104.239.169.23/assets/img/Stock%20Images%20_%20Floorpans/8/Featured Image.jpeg",
            "AdditionalImages": "",
            "FloorPlan": ""

        },
        {
            "Latitude": 40.7823626,
            "Longitude": -73.97578490000001,
            "Label": "9",
            "Address": "107 West 79th Street",
            "Unit": "12C",
            "City": "New York ",
            "State": "NY",
            "Zip": 10024,
            "Rent": 1850,
            "Type": "Rental",
            "Bedrooms": 1,
            "Bathrooms": 1,
            "Rooms": 3,
            "SqFt": 450,
            "Amenities": "Dishwasher",
            "Neighborhood": "Upper West Side",
            "Availability": "Available",
            "BuildingAmenities": "Washer/Dryer, Roof Deck, Doorman, Elevator",
            "Description": "Welcomed by a gracious oval-shaped marble foyer, through to a grand living room with magnificent Central Park views, this elegant and sophisticated home spans a total of 2134 ft² with three luxurious bedrooms.\n" +
            "\n" +
            "Elegantly appointed and designed this residence features Murano glass chandeliers, bespoke furnishings, en-suite bathrooms clad in Turkish and Italian marble with rain showers and deep soaking tubs, fully equipped butler's kitchen, curated artwork, and technology by Bose, with toiletries by Etro.\n" +
            "\n" +
            "Residents have access to a full suite of bespoke services including personalized and dedicated concierge service, twice-daily maid service, fitness center, and business center.\n" +
            "\n" +
            "Other features include access to The Pierre’s vibrant new French inspired restaurant, Perrine, a chauffeur-driven Jaguar XJL (based on availability) , and The Rotunda, an iconic room re-imagined by renowned architect and AD 100 designer Daniel Romualdez with table side champagne & cocktails.",
            "FeaturedImage": "http://104.239.169.23/assets/img/Stock%20Images%20_%20Floorpans/9/Featured Image.jpeg",
            "AdditionalImages": "",
            "FloorPlan": ""

        },
        {
            "Latitude": 40.7373199,
            "Longitude": -73.9853918,
            "Label": "10",
            "Address": "35 Gramercy Park S",
            "Unit": "10D",
            "City": "New York ",
            "State": "NY",
            "Zip": 10003,
            "Rent": 2750,
            "Type": "Condo",
            "Bedrooms": 2,
            "Bathrooms": 1,
            "Rooms": 6,
            "SqFt": 850,
            "Amenities": "Dishwasher, Hardwood Floors",
            "Neighborhood": "Gramercy Park",
            "Availability": "Available",
            "BuildingAmenities": "Doorman, Elevator, Washer / Dryer",
            "Description": "Welcomed by a gracious oval-shaped marble foyer, through to a grand living room with magnificent Central Park views, this elegant and sophisticated home spans a total of 2134 ft² with three luxurious bedrooms.\n" +
            "\n" +
            "Elegantly appointed and designed this residence features Murano glass chandeliers, bespoke furnishings, en-suite bathrooms clad in Turkish and Italian marble with rain showers and deep soaking tubs, fully equipped butler's kitchen, curated artwork, and technology by Bose, with toiletries by Etro.\n" +
            "\n" +
            "Residents have access to a full suite of bespoke services including personalized and dedicated concierge service, twice-daily maid service, fitness center, and business center.\n" +
            "\n" +
            "Other features include access to The Pierre’s vibrant new French inspired restaurant, Perrine, a chauffeur-driven Jaguar XJL (based on availability) , and The Rotunda, an iconic room re-imagined by renowned architect and AD 100 designer Daniel Romualdez with table side champagne & cocktails.",
            "FeaturedImage": "http://104.239.169.23/assets/img/Stock%20Images%20_%20Floorpans/10/Featured Image.jpeg",
            "AdditionalImages": "",
            "FloorPlan": ""

        }
    ];
}
