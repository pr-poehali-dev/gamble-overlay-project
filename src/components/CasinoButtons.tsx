import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CasinoButtons = () => {
  return (
    <div className="px-4 space-y-4 mb-8">
      <Button
        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
        onClick={() => window.open("https://1wcjlr.com/?p=h40e", "_blank")}
      >
        ✈️ AVIAMASTER GAME
      </Button>

      <Button
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
        onClick={() => window.open("https://t.me/+v_-CZBwlYqg1OWZi", "_blank")}
      >
        <img
          src="https://cdn.poehali.dev/files/54500896-a708-4d6d-bfb2-30184efd401f.png"
          alt="Telegram"
          className="w-6 h-6 mr-3"
        />
        📱 TELEGRAM + БОНУС
      </Button>

      <Button
        className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
        onClick={() =>
          window.open(
            "https://1wcjlr.com/casino/list?open=register&p=sbpl",
            "_blank",
          )
        }
      >
        🏆 LIVE kasino
      </Button>

      <div className="mt-6 text-center">
        <p className="text-white/80 text-sm mb-4">Играйте ответственно | 18+</p>
        <div className="flex justify-center space-x-4">
          <Icon name="Shield" size={16} className="text-white/60" />
          <Icon name="Lock" size={16} className="text-white/60" />
          <Icon name="Star" size={16} className="text-white/60" />
        </div>
      </div>
    </div>
  );
};

export default CasinoButtons;
