import Bed from "../../assets/images/bed.jpg";
import Covid from "../../assets/images/covid-status.jpg";
import Oxygen from "../../assets/images/oxygen.jpg";
import Vaccine from "../../assets/images/vaccine.jpg";
const DatabasePortal = [
  {
    id: 1,
    portalName: "Covid Statistics",
    portalImage: Covid,
    portalDescription:
      "Here you can see confirmed, recovered, death and active cases in your states",
  },
  {
    id: 2,
    portalName: "Bed Availability",
    portalImage: Bed,
    portalDescription:
      "You can check for bed availability and also register for bed",
  },

  {
    id: 3,
    portalName: "Book your Vaccination slot",
    portalImage: Vaccine,
    portalDescription: "You can book a vaccination slot",
  },
];
export default DatabasePortal;
