import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PromoSection = () => {
  return (
    <div className="px-4 mb-8">
      <Card className="bg-gradient-to-r from-blue-100 to-white p-6 rounded-3xl shadow-lg">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">500</span>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              500% bonus pada setoran pertama Anda dengan kode promo
            </h3>

            <div className="bg-blue-600 text-white px-4 py-2 rounded-full inline-flex items-center space-x-2">
              <span className="text-sm font-medium">DENGAN KODE PROMOSI:</span>
              <span className="font-bold">WINMAX00</span>
            </div>
          </div>
        </div>

        <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-full">
          <Icon name="Gift" size={20} className="mr-2" />
          DAPATKAN BONUS
        </Button>
      </Card>
    </div>
  );
};

export default PromoSection;
