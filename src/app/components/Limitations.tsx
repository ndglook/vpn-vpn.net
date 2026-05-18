import { AlertCircle, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Limitations() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-3">Ограничения и рекомендации</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="border-2 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="mb-2">Технический лимит</h3>
                  <p className="text-muted-foreground">До 200 одновременных VPN-туннелей</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="mb-2">Рекомендуемая нагрузка</h3>
                  <p className="text-muted-foreground">До 50 активных пользователей на один сервис</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
          Небольшой приватный сервис проще обслуживать, он стабильнее работает и выглядит естественнее, чем массовый публичный VPN
        </p>
      </div>
    </section>
  );
}
