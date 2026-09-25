import HobbyCard from "../components/HobbyCard";
import PageContainer from "../components/PageContainer";
import { hobbies } from "../data/hobies";

function Hobies() {
  return (
    <PageContainer
      title="My Hobies"
      description="My hobies, things i do in my free time, things im interested in and feel releafed doing it or just fields i want to get my hands in"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((hoby) => (
          <HobbyCard key={hoby.id} hoby={hoby} />
        ))}
      </div>
    </PageContainer>
  );
}

export default Hobies;
