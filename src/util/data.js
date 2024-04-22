import CheckIcon from "../assets/icons/vector.svg?react";
import ActivityIcon from "../assets/icons/activity.svg?react";
import CalendarIcon from "../assets/icons/calendar-check.svg?react";

// Components data

export const reportCards = [
  {
    title: "Recommended Actions",
    value: "4/8",
    icon: CheckIcon,
    variant: "bg-emerald-100",
    text: null,
  },
  {
    title: "Time to Next Scan",
    value: "18 days",
    text: "Last Scanned: 10/01/2024",
    icon: ActivityIcon,
    variant: "bg-blue-100",
  },
  {
    title: "Time to Renewal",
    value: "165 days",
    text: "Renewal Date: 05/04/2024",
    icon: CalendarIcon,
    variant: "bg-violet-100",
  },
];

export const acmeReports = [
  {
    label: "Domain",
    value: "acme.com",
  },
  {
    label: "Last Scan",
    value: "Nov 5, 2023",
  },
  {
    label: "Revenue",
    value: "$1.5M",
  },
  {
    label: "Industry",
    value: "Healthcare",
  },
  {
    label: "Employees",
    value: "150",
  },
  {
    label: "Leaked Credentials",
    value: "0",
  },
];

// Charts data

export const radialBar = {
  chart: {
    offsetY: -20,
    offsetX: -60,
  },
  series: [80],
  colors: ["#8159DD"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "40%",
        background: "transparent",
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          position: "center",
          color: "#fff",
          fontSize: "32px",
          fontWeight: "600",
          show: true,
          formatter: function (val) {
            return Number(val / 100).toFixed(1);
          },
        },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#E086FF"],
      stops: [0, 100],
    },
  },
  tooltip: {
    show: true,
    theme: "dark",
  },
};

export const areaChart = {
  series: [
    {
      name: "Rating",
      data: [13.2, 14, 13.5, 14.5, 14, 14, 13.5, 13.8, 14, 14],
    },
  ],
  chart: {
    offsetY: -20,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    show: true,
    curve: "straight",
    colors: ["#A36AEA"],
    width: 1,
    dashArray: 0,
  },
  fill: {
    type: "gradient",
    gradient: {
      colorStops: [
        {
          offset: 0,
          color: "#A36AEA",
          opacity: 0.8,
        },
        {
          offset: 100,
          color: "#000",
          opacity: 0,
        },
      ],
    },
  },
  tooltip: {
    theme: "dark",
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  options: {
    chart: {
      type: "area",
    },
  },
  xaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
};

export const radialSemibar = {
  series: [65],
  options: {
    chart: {
      height: 350,
      type: "radialBar",
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -120,
        endAngle: 120,
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -10,
            fontSize: "38px",
            fontWeight: "600",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      colors: ["#8159DD"],
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        gradientToColors: ["#E086FF"],
        stops: [0, 90, 100],
      },
    },
  },
};

export const semiDonut = {
  series: [25, 25, 33, 33],
  options: {
    legend: false,
    height: 270,
    chart: {
      type: "donut",
      offsetY: 35,
    },
    plotOptions: {
      pie: {
        startAngle: -120,
        endAngle: 120,
        dataLabels: {
          name: {
            show: false,
          },
          value: {},
        },
      },
    },
  },
};

export const rankingChart = {
  series: [
    {
      data: [200],
    },
  ],
  chart: {
    stacked: true,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "20%",
      colors: {
        backgroundBarColors: ["#40475D"],
      },
    },
  },
  options: {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        borderRadiusApplication: "end",
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  },
};

export const optionsProgress1 = {
  chart: {
    height: 120,
    type: "bar",
    stacked: true,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "55%",
    },
  },
  stroke: {
    width: 0,
  },
  series: [
    {
      data: [100],
    },
  ],
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: "LOWEST RISK",
    style: {
      fontSize: "16px",
      color: "#18B368",
      fontWeight: "700",
    },
  },
  subtitle: {
    floating: true,
    align: "right",
    offsetY: 0,
    text: "HIGHEST RISK",
    style: {
      fontSize: "16px",
      color: "#CC0000",
      fontWeight: "700",
    },
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    categories: ["Process 1"],
  },
  yaxis: {
    max: 100,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        {
          offset: 0,
          color: "#9CDB92",
          opacity: 1,
        },
        {
          offset: 33,
          color: "#FFFA10",
          opacity: 1,
        },
        {
          offset: 66,
          color: "#F9C135",
          opacity: 1,
        },
        {
          offset: 100,
          color: "#ED150C",
          opacity: 1,
        },
      ],
    },
  },
};

export const optionsProgress2 = {
  chart: {
    height: 8,
    type: "bar",
    stacked: true,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "100%",
      borderRadius: 4,
      borderRadiusApplication: "around",
      colors: {
        backgroundBarColors: ["#F6F7F9"],
        backgroundBarRadius: 4,
      },
    },
  },
  colors: ["#6739D2"],
  stroke: {
    width: 0,
  },
  series: [
    {
      data: [45],
    },
  ],
  title: {
    style: {
      display: "none",
    },
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    categories: ["Process 2"],
  },
  yaxis: {
    max: 100,
  },
};
