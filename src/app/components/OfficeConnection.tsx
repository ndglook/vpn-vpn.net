import { Building2, Router, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function OfficeConnection() {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-100 to-indigo-100 dark:bg-gradient-to-br dark:from-blue-950 dark:to-indigo-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-3">Подключение офиса или квартиры</h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            К VPN-сервису можно подключить не только отдельных пользователей, но и целый офис, квартиру или локальную сеть
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                <Router className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>MikroTik роутер</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Лучший вариант — нормальный роутер MikroTik. Аккуратная настройка туннеля, маршрутизации и безопасности.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Другие роутеры</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Подключение через другой роутер, мини-ПК или домашний сервер. Главное — возможность поднять VPN-туннель.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                <Cpu className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Применение</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Доступ офиса к корпоративным ресурсам, объединение локаций или маршрутизация части трафика.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
