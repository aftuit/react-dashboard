import Header from "../components/Header";
import KnobCard from "../components/KnobCard";
import Ranking from "../components/Ranking";
import Chart from "react-apexcharts";
import { reportCards, radialSemibar, semiDonut, optionsProgress2 } from "../util/data";

function Dashboard() {

  return (
    <div className="w-full">
      <Header />
      <div className="container mx-auto p-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <KnobCard title="Risk Assessment" has={true}>
            <Chart options={radialSemibar.options} series={radialSemibar.series} type="radialBar" height={340} />
          </KnobCard>
          <KnobCard title="Compliance Assessment">
            <Chart options={semiDonut.options} series={semiDonut.series} type="donut" height={270} />
          </KnobCard>
        </div>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          {reportCards.map(card => (
            <div className="border border-gray bg-white p-8" key={card.variant}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white-stone">{card.title}</div>
                  <h2 className="font-semibold text-[32px]">{card.value}</h2>
                </div>
                <div className={`${card.variant} p-3 rounded-full`}>
                  <card.icon />
                </div>
              </div>
              {card.text ? (
                <div className="text-white-stone text-sm font-medium">{card.text}</div>
              ) : (
                <div className="mt-4">
                  <Chart options={optionsProgress2} series={optionsProgress2.series} type="bar" height={8} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Ranking />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
