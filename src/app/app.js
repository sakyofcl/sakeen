import { HomePage } from "../module/home/home.page";
import { SectorListing } from "../module/sector/pages/sector.listing";

export const App = () => {
  return (
    <div className="App">
        <HomePage>
            <SectorListing/>
        </HomePage>
    </div>
  );
}

