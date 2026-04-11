import { CheckCircle2, Baby, Users, User } from 'lucide-react';

const audiences = [
  {
    title: "Παιδιά & Έφηβοι",
    icon: Baby,
    items: [
      "Μαθησιακές δυσκολίες",
      "ΔΕΠΥ",
      "Άγχος",
      "Συναισθηματικές δυσκολίες",
      "Δυσκολίες συμπεριφοράς",
      "Δυσκολίες σχολικής προσαρμογής",
    ],
  },
  {
    title: "Γονείς",
    icon: Users,
    items: [
      "Συμβουλευτική γονέων",
      "Καθοδήγηση στη διαχείριση συμπεριφοράς",
      "Ενίσχυση της σχέσης γονέα–παιδιού",
      "Υποστήριξη σε αναπτυξιακά ζητήματα",
    ],
  },
  {
    title: "Ενήλικες",
    icon: User,
    items: [
      "Άγχος",
      "Συναισθηματικές δυσκολίες",
      "Υποστηρικτική συμβουλευτική",
    ],
  },
];

const TargetAudienceSection = () => {
  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Σε ποιους απευθυνόμαστε
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audiences.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cta/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-cta/20 flex items-center justify-center">
                    <Icon className="text-cta" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{group.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="text-cta shrink-0 mt-0.5" size={15} />
                      <span className="text-foreground/70 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
