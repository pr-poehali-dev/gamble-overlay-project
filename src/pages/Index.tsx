import React from "react";
import GamblingLanding from "@/components/GamblingLanding";
import PromoSection from "@/components/PromoSection";
import CasinoButtons from "@/components/CasinoButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-600 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 text-white">
        <div className="w-6 h-6 flex items-center justify-center">
          <span className="text-lg">←</span>
        </div>
        <h1 className="text-xl font-bold">Браузер</h1>
        <div className="w-6 h-6 flex items-center justify-center">
          <span className="text-lg">⋯</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Airplane and Main Title */}
        <div className="text-center mb-6 px-4">
          <div className="mb-4">
            <img
              src="https://cdn.poehali.dev/files/0db93dfb-b66b-4775-8019-2725a03ead84.jpg"
              alt="Airplane Casino"
              className="w-48 h-32 mx-auto object-contain animate-pulse"
            />
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-6 mb-4 shadow-2xl">
              <div className="flex items-center justify-center mb-2">
                <span className="text-yellow-300 mr-1">⭐</span>
                <span className="text-yellow-300 mr-1">⭐</span>
                <span className="text-yellow-300">⭐</span>
              </div>
              <h2 className="text-3xl font-bold text-yellow-300 mb-2">
                PERMAINAN
              </h2>
              <h3 className="text-xl font-bold text-cyan-300">DARI BAWAH</h3>
            </div>
          </div>
        </div>

        {/* Username */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white">avia_indonesia</h3>
        </div>

        {/* Casino Buttons */}
        <CasinoButtons />

        {/* Promo Section */}
        <PromoSection />

        {/* Game Preview */}
        <div className="px-4 mb-8">
          <div className="bg-gray-900 rounded-3xl p-4 shadow-xl">
            <img
              src="https://cdn.poehali.dev/files/567bb896-4d5c-4a8f-97d9-d617e95d4bd3.jpg"
              alt="Game Preview"
              className="w-full h-48 object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="px-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-white">🍀</span>
              <span className="text-white font-medium">Beacons</span>
            </div>
            <span className="text-white font-medium">Try for free!</span>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-300/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-orange-300/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default Index;
