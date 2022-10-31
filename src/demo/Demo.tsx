import { useState } from 'react';

import { Section } from '../layout/Section';

const Demo = () => {
  const [commute, setCommute] = useState<number>(35);
  const [dailyEmails, setDailyEmails] = useState<number>(
    Math.floor(35 * 0.8 * 2)
  );
  const [weeklyTime, setWeeklyTime] = useState<number>(35 * 5 * 2);

  const updateEmails = (commuteMins: number) => {
    const emails = Math.floor(commuteMins * 0.8 * 2);
    setDailyEmails(emails);
  };

  const decrease = () => {
    const newValue = commute - 5;
    if (newValue > 5) {
      setCommute(newValue);
      updateEmails(newValue);
      setWeeklyTime(newValue * 5 * 2);
    }
  };

  const increase = () => {
    const newValue = commute + 5;
    if (newValue < 125) {
      setCommute(newValue);
      updateEmails(newValue);
      setWeeklyTime(newValue * 5 * 2);
    }
  };

  return (
    <Section>
      <div className="flex flex-row items-center justify-evenly">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl">How long is your commute?</h1>
          <div className="flex flex-row items-center px-4 py-2 bg-gray-400 border-gray-400 border-2 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#222149"
              className="w-14 h-14"
              onClick={() => {
                decrease();
              }}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                clipRule="evenodd"
              />
            </svg>

            <div className="px-4">
              <h2 className="px-24 text-gray-800 text-3xl">{commute} mins</h2>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#222149"
              className="w-14 h-14"
              onClick={() => {
                increase();
              }}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center px-4 py-2 bg-gray-400 rounded-xl">
          <h1 className="text-3xl text-gray-800">With Pluto you could</h1>
          <h1 className="text-xl text-gray-800">
            write {dailyEmails} emails a day
          </h1>
          <h1 className="text-xl text-gray-800">
            save {Math.floor(weeklyTime / 60)} hours a week
          </h1>
        </div>
      </div>
    </Section>
  );
};

export default Demo;
