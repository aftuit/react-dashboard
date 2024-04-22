import WarnIcon from "../assets/icons/warn.svg?react";

function KnobCard({ title, has = false, children }) {
  return (
    <div className="p-8 bg-white flex flex-col gap-8 border border-gray">
      <h2 className="font-semibold text-xl">{title}</h2>
      <div className="h-60">{children}</div>

      {has ? (
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <WarnIcon />
            Assessment Incomplete
          </div>
          <button className="text-indigo font-semibold py-1.5 px-6 border border-gray">Continue Assessment</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default KnobCard;
