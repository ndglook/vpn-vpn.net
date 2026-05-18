import { Briefcase, Users2, Shield, Home, Network } from "lucide-react";
import { Badge } from "./ui/badge";

const audiences = [
  {
    icon: Briefcase,
    text: "Для компаний с удаленными сотрудниками"
  },
  {
    icon: Users2,
    text: "Для небольших команд"
  },
  {
    icon: Shield,
    text: "Для доступа к корпоративным ресурсам"
  },
  {
    icon: Home,
    text: "Для подключения офиса, квартиры или удаленной площадки к общей сети"
  },
  {
    icon: Network,
    text: "Для тех, кому нужен свой VPN, а не публичный сервис"
  }
];

export function TargetAudience() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-3">Для кого это</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Решение подходит для разных сценариев использования
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="p-4 justify-start gap-3 text-base h-auto hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all cursor-default"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <audience.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-foreground">{audience.text}</span>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
