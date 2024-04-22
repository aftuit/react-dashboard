import AcmeIcon from "../assets/icons/acme.svg?react";
import { acmeReports } from "../util/data";
import Chart from "react-apexcharts";
import { optionsProgress1 } from "../util/data";
function Ranking() {
  return (
    <div className="p-8 bg-white border border-gray">
      <h2 className="text-xl font-semibold">Peer Ranking</h2>
      <div className="mt-8">
        <div className="flex items-center gap-3 text-xl font-semibold">
          <AcmeIcon />
          Acme Org.
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4 mt-4">
          {acmeReports.map(report => (
            <div className="text-start" key={report.label}>
              <div className="text-white-stone font-medium">{report.label}</div>
              <div className="text-lg font-semibold">{report.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8 h-px w-full bg-gray"></div>
      <div>
        <h2 className="text-xl font-semibold m-0">Your rank is in the 94th percentile of Safe Margins policyholders</h2>
        <div className="text-black">Discovered vulnerebalities will not impact your coverage.</div>
      </div>
      <div className="mt-8 pb-40 relative">
        <Chart options={optionsProgress1} series={optionsProgress1.series} type="bar" height="120" />
        <div className="result-1 z-10 hover:z-20 absolute px-4 py-3 bg-black text-center border border-gray left-[60%]">
          <h2 className="text-white font-semibold">Peer Average</h2>
          <div className="text-white-light">67th percentile</div>
        </div>
        <div className="result-2 z-10 hover:z-20 absolute px-4 py-3 bg-black text-center border border-gray left-[75%]">
          <h2 className="text-white font-semibold">You</h2>
          <div className="text-white-light">94th percentile</div>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
