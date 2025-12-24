"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return null;
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <div className="mt-12 flex justify-center gap-4 md:gap-8">
      {timeUnits.map((unit, index) => (
        <div key={index} className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-5 min-w-[70px] md:min-w-[90px] border border-white/20">
            <span className="font-serif text-3xl md:text-5xl font-light text-white">
              {unit.value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs md:text-sm tracking-wider text-white/70 mt-2 block uppercase">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
