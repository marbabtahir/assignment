import Appointments from "./components/Appointments";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductAndMember from "./components/ProductAndMember";
import RecentAppointments from "./components/RecentAppointments";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Appointments />
      <ProductAndMember />
      <RecentAppointments />
    </>
  );
}

export default App;
