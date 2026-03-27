import { useEffect, useState } from "react";

export const useOpenStatus = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      // Paraguay time (UTC-4)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const py = new Date(utc + -4 * 3600000);
      const day = py.getDay(); // 0=Sun, 6=Sat
      const hour = py.getHours();
      const minute = py.getMinutes();
      const timeInMinutes = hour * 60 + minute;

      // L-V 07:00 a 14:00
      const isWeekday = day >= 1 && day <= 5;
      const inHours = timeInMinutes >= 420 && timeInMinutes < 840; // 7*60=420, 14*60=840
      setIsOpen(isWeekday && inHours);
    };

    check();
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, []);

  return isOpen;
};
