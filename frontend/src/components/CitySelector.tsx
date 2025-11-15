'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface CitySelectorProps {
  cities: string[];
  selectedCity: string;
  onCityChange: (city: string) => void;
}

export default function CitySelector({
  cities,
  selectedCity,
  onCityChange,
}: CitySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-white/20 border-2 border-white rounded-lg text-white font-medium flex items-center justify-between hover:bg-white/30 transition-all"
      >
        <span>
          {selectedCity ? `Город: ${selectedCity}` : 'Выберите свой город'}
        </span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl z-50 overflow-hidden">
          <div className="max-h-64 overflow-y-auto">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => {
                  onCityChange(city);
                  setIsOpen(false);
                }}
                className={`w-full px-6 py-3 text-left font-medium transition-colors ${
                  selectedCity === city
                    ? 'bg-[#003366] text-white'
                    : 'text-[#003366] hover:bg-gray-100'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
