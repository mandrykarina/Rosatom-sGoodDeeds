import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Добрые дела Росатома</h3>
            <p className="text-white/70 text-sm">
              Единая платформа для жителей, волонтёров и НКО в городах
              присутствия Росатома.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  Новости
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="hover:text-white transition-colors">
                  Календарь
                </Link>
              </li>
              <li>
                <Link href="/organizations" className="hover:text-white transition-colors">
                  Организации
                </Link>
              </li>
            </ul>
          </div>

          {/* For Organizations */}
          <div>
            <h4 className="font-semibold mb-4">Для организаций</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/auth/register" className="hover:text-white transition-colors">
                  Регистрация НКО
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className="hover:text-white transition-colors">
                  Вход в систему
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <p className="text-sm text-white/70 mb-2">
              Есть вопросы? Свяжитесь с нами
            </p>
            <p className="text-sm text-white/70">
              Email: info@dobrye-dela.ru
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>&copy; 2025 Добрые дела Росатома. Все права защищены.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
