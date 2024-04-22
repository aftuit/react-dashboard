import React from "react";
import SearchIcon from "../assets/icons/search.svg?react";
import Chart from "react-apexcharts";
import { radialBar, areaChart } from "../util/data";
function Header() {
  return (
    <div className="px-8 pt-6 pb-8 bg-black">
      {/* Search bar */}
      <div className="search-bar px-4 py-2 flex items-center gap-2">
        <SearchIcon />
        <input type="text" className="bg-transparent outline-none text-slate-300" placeholder="Search here.." />
      </div>

      {/* Statistics Cards*/}
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-5 mt-8 text-white">
        <div className="p-4 bg-dark flex gap-2 max-h-[168px]">
          <div>
            <h2 className="font-semibold">Safe Margins Index</h2>
            <div className="text-sm text-white-light line-clamp-4 mt-auto">
              You score currently meets the threshold 0.7 is required for renewal eligibility.
            </div>
          </div>
          <div className="w-[120px]">
            <Chart options={radialBar} series={radialBar.series} type="radialBar" width="250" />
          </div>
        </div>
        <div className="p-4 bg-dark max-h-[168px]">
          <div className="text-white-light font-semibold">Industry</div>
          <h2 className="font-semibold text-[32px]">Healthcare</h2>
          <p className="mt-8 text-white-light">40 industries in total</p>
        </div>
        <div className="p-4 bg-dark max-h-[168px]">
          <div className="text-white-light font-semibold">Cost of Data Breach</div>
          <h2 className="font-semibold text-[32px]">$3.5M</h2>
          <Chart options={areaChart} series={areaChart.series} type="area" height={100} />
        </div>
        <div className="p-4 bg-dark max-h-[168px]">
          <div className="text-white-light font-semibold">Cost Per Record</div>
          <h2 className="font-semibold text-[32px]">$150</h2>
          <Chart options={areaChart} series={areaChart.series} type="area" height={100} />
        </div>
      </div>
    </div>
  );
}

export default Header;
