import "../../styles.css";

import churchIcon from "../../../public/icons/church.svg";
import partyIcon from "../../../public/icons/party.svg";
import bedIcon from "../../../public/icons/bed.svg";
import clockIcon from "../../../public/icons/clock.svg";
import pinIcon from "../../../public/icons/pin.svg";

const LocationsSection = () => {
    const locations = [
    {
    place: "Kościół p.w. św. Antoniego Padewskiego w Parowej",
    time: "14:30",
    mapsUrl: "https://www.google.pl/maps/dir/51.06265,16.9797404/Ko%C5%9Bci%C3%B3%C5%82+pw+%C5%9Bw.+Antoniego+Padewskiego,+59-724+Parowa/@51.2242625,15.4696643,9z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x4708b7fe7d73670b:0xdda4090dd392cb57!2m2!1d15.2782644!2d51.362867!3e0?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D",
    icon: churchIcon,
    },
    {
    place: "Zamek Kliczków",
    time: "16:00",
    mapsUrl: "https://www.google.pl/maps/dir/51.06265,16.9797404/Zamek+Kliczk%C3%B3w,+Kliczk%C3%B3w/@51.1760694,15.5462574,9z/data=!3m2!4b1!5s0x4708ca7c280e8e5f:0xfb9ce643161711e4!4m10!4m9!1m1!4e1!1m5!1m1!1s0x4708ca78d4d186cf:0xd2243f616f284edc!2m2!1d15.4336624!2d51.3364584!3e0?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D",
    icon: partyIcon,
    },
    {
    place: "Folwark Książęcy",
    mapsUrl: "https://www.google.pl/maps/dir/51.06265,16.9797404/Folwark+Ksi%C4%85%C5%BC%C4%99cy,+Kliczk%C3%B3w/@51.1753277,15.546586,9z/data=!3m2!4b1!5s0x4708ca7c280e8e5f:0xfb9ce643161711e4!4m10!4m9!1m1!4e1!1m5!1m1!1s0x4708ca7e80aa6ccb:0xbf3feeab4f387462!2m2!1d15.43516!2d51.3337344!3e0?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D",
    icon: bedIcon,
    },
];

    return (
    <section id='details' className="py-16 px-4 md:px-0 max-w-6xl mx-auto">
    <h2 className="text-5xl mb-8">Lokalizacje</h2>
    <div className="grid md:grid-cols-3 gap-8 px-4">
        {locations.map((location, index) => (
        <div key={index} className='relative'>
            <div
                className="bg-slate-50 rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1 text-sm flex flex-col max-w-72 md:w-52 h-full"
            >
                <div className="flex gap-3 mb-4 flex-grow md:justify-center md:text-center">
                    <h3 className="text-gray-700 mt-4 font-bold">{location.place}</h3>
                </div>

                <div className="space-y-3 mb-6">
                    <p className="text-gray-600">{location.address}</p>
                    {location.time && (
                        <div className="flex gap-2 text-gray-500 md:justify-center">
                            <img className='w-4 h-4' src={clockIcon.src} alt="ikona zegara" />
                            <span>{location.time}</span>
                        </div>
                    )}
                </div>

                <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="items-center buttonSecondary gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full  flex justify-center max-w-40 mx-auto"
                >
                    <img className="w-4 h-4" src={pinIcon.src} alt="ikona pinezki" />
                    <span>Pokaż trasę</span>
                </a>
            </div>
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-50 rounded-full flex items-center shadow-md justify-center">
                    <img className="w-6 h-6" src={location.icon.src} alt={location.icon} />
                </div></div>
        ))}
    </div>
    <h2 className="text-5xl text-right my-10">Do zobaczenia!</h2>
    </section>
);
};

export default LocationsSection;