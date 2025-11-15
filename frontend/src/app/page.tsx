'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, MapPin, Users, Zap, Bookmark } from 'lucide-react';
import CitySelector from '@/components/CitySelector';

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<string>('');

  const cities = [
    'Ангарск',
    'Балаково',
    'Волгодонск',
    'Курчатов',
    'Обнинск',
    'Саров',
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] bg-gradient-to-br from-[#003366] to-[#004d99] text-white overflow-hidden"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#ff6b35]/10 rounded-full blur-3xl -ml-36 -mb-36" />

        <div className="relative z-10 px-6 md:px-12 py-20 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Добрые дела Росатома
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Все инициативы вашего города в одном месте
            </p>

            <p className="text-lg text-white/80 mb-10 max-w-3xl leading-relaxed">
              Единый портал для жителей, волонтёров и НКО, где собрана вся
              информация о социальных, экологических, культурных, образовательных
              и спортивных инициативах в городах присутствия Росатома.
            </p>

            {/* City Selector */}
            <div className="mb-10">
              <CitySelector
                cities={cities}
                selectedCity={selectedCity}
                onCityChange={setSelectedCity}
              />
            </div>

            <p className="text-white/70 mb-8 text-sm">
              Станьте частью добрых дел в вашем городе!
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003366]">
            Здесь вы сможете:
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Исследуйте все возможности нашего портала
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <Link href="/organizations">
              <div className="group p-8 border-2 border-[#e0e0e0] rounded-lg hover:border-[#003366] hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#003366]/10 rounded-lg group-hover:bg-[#003366] transition-colors">
                    <MapPin className="w-6 h-6 text-[#003366] group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#003366] mb-2">
                      Карта и организации
                    </h3>
                    <p className="text-gray-600">
                      Найдите организации по городу и направлению деятельности
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Feature 2 */}
            <Link href="/calendar">
              <div className="group p-8 border-2 border-[#e0e0e0] rounded-lg hover:border-[#003366] hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#003366]/10 rounded-lg group-hover:bg-[#003366] transition-colors">
                    <Zap className="w-6 h-6 text-[#003366] group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#003366] mb-2">
                      Календарь событий
                    </h3>
                    <p className="text-gray-600">
                      Отметьте интересные события, чтобы ничего не пропустить
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Feature 3 */}
            <Link href="/knowledge-base">
              <div className="group p-8 border-2 border-[#e0e0e0] rounded-lg hover:border-[#003366] hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#003366]/10 rounded-lg group-hover:bg-[#003366] transition-colors">
                    <Bookmark className="w-6 h-6 text-[#003366] group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#003366] mb-2">
                      База знаний
                    </h3>
                    <p className="text-gray-600">
                      Просматривайте видео и материалы для скачивания
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Feature 4 */}
            <Link href="/news">
              <div className="group p-8 border-2 border-[#e0e0e0] rounded-lg hover:border-[#003366] hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#003366]/10 rounded-lg group-hover:bg-[#003366] transition-colors">
                    <Users className="w-6 h-6 text-[#003366] group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#003366] mb-2">
                      Новости и инициативы
                    </h3>
                    <p className="text-gray-600">
                      Будьте в курсе последних инициатив и грантов
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-20 bg-gradient-to-r from-[#003366] to-[#004d99] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Регистрируйтесь и присоединяйтесь к сообществу добрых дел
          </p>
          <div className="flex gap-4 flex-col sm:flex-row justify-center">
            <Link href="/auth/register">
              <button className="px-8 py-4 bg-white text-[#003366] font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                Зарегистрироваться
                <ChevronRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/auth/login">
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Уже есть аккаунт
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
