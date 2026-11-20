import React, { useState } from 'react';

export default function bookOrderApp() {
  // 1. Declare 3 State Variables
  const [customerName, setCustomerName] = useState("");
  const [copies, setCopies] = useState(1);
  const [isHardback, setIsHardback] = useState(false);

  // 2. Calculate Derived Data (Total Price)
  const basePrice = 7.50;
  const totalPrice = (basePrice * copies).toFixed(2);

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-[#faf7ff] rounded-2xl border border-slate-200 shadow-xl font-sans">
      {/* App Header */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="text-3xl">📖</span>
        <div>
          <h1 className="text-lg font-bold text-slate-900">Order On the Ceiling for a Friend</h1>
          <p className="text-xs text-slate-500">The perfect gift for a bibliophile!</p>
        </div>
      </div>

      {/* Control 1: Text Input for Customer Name */}
      <div className="mb-4">
        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
          Customer Name:
        </label>
        <input
          type="text"
          placeholder="e.g. Akotowaa"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
        />
      </div>

      {/* Control 2: Number State (Copies Counter) */}
      <div className="mb-4 p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
        <span className="text-xs font-bold text-slate-700">Number of Copies:</span>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
               console.log("Customer requsted one less copy");
              setCopies(copies - 1);
            }}
            disabled={copies <= 1}
            className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 disabled:opacity-40 font-bold text-sm text-slate-700 flex items-center justify-center transition"
          >
            -
          </button>
          <span className="font-bold text-sm text-slate-900 w-4 text-center">{copies}</span>
          <button
            onClick={() => {
              console.log("Customer added an extra copy");
              setCopies(copies + 1);
              }}
            className="w-8 h-8 rounded-full bg-[#551A8B] hover:bg-[#6d2cb0] font-bold text-sm text-white flex items-center justify-center transition"
          >
            +
          </button>
        </div>
      </div>

      {/* Control 3: Boolean Toggle (Hardback) */}
      <div className="mb-6">
        <button
          onClick={() => setIsHardback(!isHardback)}
          className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold transition flex items-center justify-between ${
            isHardback
              ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
              : "bg-slate-200 text-slate-700"
          }`}
        >
          <span>{isHardback ? "📝 Paperback Selected" : "📕 Hardback Selected"}</span>
          <span className="text-[10px] uppercase font-bold bg-white px-2 py-0.5 rounded shadow-sm">
            {isHardback ? "Paperback Selected" : "Switch to Paperback"}
          </span>
        </button>
      </div>

     {/* Real-Time Order Preview */}
        <div className="p-4 bg-[#551A8B] text-white rounded-xl space-y-2 border border-[#6d2cb0]">
        <div className="text-[10px] font-bold text-purple-200 uppercase tracking-widest border-b border-[#6d2cb0] pb-1">
        Live Order Ticket (State Preview)
        </div>
        <div className="text-sm font-bold text-white">
        To be signed to:
        <span className="text-purple-200">
          {" "}{customerName || "___"}
        </span>
      </div>
      <div className="text-xs text-purple-100 flex justify-between">
        <span>
          {copies}x Copies ({isHardback ? "Paperback" : "Hardback"})
        </span>
        <span className="font-mono text-yellow-200 font-bold">
          ${totalPrice}
        </span>
        </div>
      </div>
    </div>
  );
}