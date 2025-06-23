import React from 'react';
import { BookOpen, TrendingUp } from 'lucide-react';
import { trainingDays } from '../data/trainingData';
import DayCard from '../components/DayCard';

const HomePage: React.FC = () => {
  const completedDays = trainingDays.filter(day => day.status === 'completed').length;
  const totalDays = trainingDays.length;

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-slate-700">
        <div className="flex items-center justify-center mb-4">
          <BookOpen className="w-12 h-12 text-blue-400 mr-3" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Training Chronicle
          </h1>
        </div>
        <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
          A comprehensive daily log of our learning journey at Coforge. 
          Capturing insights, wisdom, and growth from each training session.
        </p>
        
        {/* Progress Stats */}
        <div className="flex items-center justify-center space-x-8 text-sm">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-slate-300">
              <span className="font-semibold text-green-400">{completedDays}</span> of {totalDays} days completed
            </span>
          </div>
        </div>
      </div>

      {/* Training Days Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Training Sessions</h2>
          <div className="text-sm text-slate-400">
            Click any day to view detailed summary
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingDays.map((day) => (
            <DayCard key={day.id} day={day} />
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Learning Progress</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{completedDays}</div>
            <div className="text-sm text-slate-400">Sessions Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">
              {trainingDays.reduce((acc, day) => acc + (day.highlights?.length || 0), 0)}
            </div>
            <div className="text-sm text-slate-400">Key Insights</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              {Math.round((completedDays / totalDays) * 100)}%
            </div>
            <div className="text-sm text-slate-400">Progress</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;