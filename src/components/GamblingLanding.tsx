import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const GamblingLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-600 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 text-white">
        <Icon name="ArrowLeft" size={24} />
        <h1 className="text-xl font-bold">Браузер</h1>
        <Icon name="MoreHorizontal" size={24} />
      </div>

      {/* Subscribe Button */}
      <div className="px-4 mb-6">
        <Button
          variant="outline"
          className="bg-white/20 border-white/30 text-white hover:bg-white/30"
        >
          <Icon name="Bell" size={16} className="mr-2" />
          Subscribe
        </Button>
      </div>

      {/* Main Airplane Section */}
      <div className="relative mb-8 px-4">
        <div className="relative z-10 text-center">
          <div className="mb-6">
            <img
              src="https://cdn.poehali.dev/files/0db93dfb-b66b-4775-8019-2725a03ead84.jpg"
              alt="Airplane"
              className="w-48 h-32 mx-auto object-contain animate-bounce"
            />
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-6 mb-4 shadow-2xl">
              <div className="flex items-center justify-center mb-2">
                <Icon name="Star" size={20} className="text-yellow-300 mr-1" />
                <Icon name="Star" size={20} className="text-yellow-300 mr-1" />
                <Icon name="Star" size={20} className="text-yellow-300" />
              </div>
              <h2 className="text-4xl font-bold text-yellow-300 mb-2">
                PERMAINAN
              </h2>
              <h3 className="text-2xl font-bold text-cyan-300">DARI BAWAH</h3>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-transparent rounded-lg"></div>
      </div>

      {/* Username */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white">avia_indonesia</h3>
      </div>

      {/* Main Action Buttons */}
      <div className="px-4 space-y-4 mb-8">
        <Button className="w-full bg-white text-black hover:bg-gray-100 text-lg font-semibold py-6 rounded-full">
          👑 MAIN DI SINI 👑
        </Button>

        <Button className="w-full bg-white text-black hover:bg-gray-100 text-lg font-semibold py-6 rounded-full">
          🎁 Bonus Tambahan
          <Icon name="ChevronDown" size={20} className="ml-2" />
        </Button>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Clover" size={20} className="text-white" />
            <span className="text-white font-medium">Beacons</span>
          </div>
          <span className="text-white font-medium">Try for free!</span>
        </div>
      </div>
    </div>
  );
};

export default GamblingLanding;
