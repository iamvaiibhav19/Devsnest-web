import React from "react";
import Box from "./Box";
import Boxx from "./Boxx";

function Container({ active, recovered, deaths, confirmed, search }) {
  return (
    <div className="container1">
      <Boxx class="boxx" heading={search === "Total" ? "India" : search} />
      <Box class="box-1" heading="Active" values={active} />
      <Box class="box-2" heading="Recovered" values={recovered} />
      <Box class="box-3" heading="Deaths" values={deaths} />
      <Box class="box-4" heading="Confirmed" values={confirmed} />
    </div>
  );
}

export default Container;

// <Box class="box-4" heading="Delta Confirmed" values={deltaConfirmed} />
// <Box class="box-3" heading="Delta Recovered" values={deltaDeaths} />
// <Box class="box-2" heading="Delta Deaths" values={deltaRecovered} />
// <Box class="box-1" heading="Last Updated" values={dated} />
