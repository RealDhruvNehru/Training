import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { TrainingDay } from '../data/trainingData';

interface DayCardProps {
  day: TrainingDay;
}

const DayCard: React.FC<DayCardProps> = ({ day }) => {
  const statusConfig = {
    completed: {
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/20'
    },
    'in-progress': {
      icon: Clock,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/20'
    },
    upcoming: {
      icon: Clock,
      color: 'text-slate-400',
      bgColor: 'bg-slate-400/10',
      borderColor: 'border-slate-400/20'
    }
  };

  const config = statusConfig[day.status];
  const StatusIcon = config.icon;

  return (
    <Link to={`/${day.id}`} className="block group">
      <div className={`
        bg-slate-800 rounded-xl p-6 border ${config.borderColor}
        transition-all duration-300 hover:bg-slate-700 hover:border-blue-400/30
        hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1
      `}>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`
              w-12 h-12 rounded-lg ${config.bgColor} 
              flex items-center justify-center text-xl font-bold
            `}>
              {day.day}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                Day {day.day}
              </h3>
              <div className="flex items-center space-x-1 text-sm text-slate-400">
                <Calendar className="w-3 h-3" />
                <span>{new Date(day.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <StatusIcon className={`w-5 h-5 ${config.color}`} />
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
          </div>
        </div>

        {/* Trainer Info */}
        <div className="flex items-center space-x-2 mb-3 text-sm text-slate-300">
          <User className="w-4 h-4" />
          <span>{day.trainer}</span>
          {day.experience !== 'TBD' && (
            <>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{day.experience}</span>
            </>
          )}
        </div>

        {/* Preview */}
        <div className="text-sm text-slate-400 line-clamp-2">
          {day.status === 'completed' ? (
            day.highlights[0]
          ) : (
            'Session details will be added soon...'
          )}
        </div>

        {/* Status Badge */}
        <div className="mt-4 flex justify-between items-center">
          <span className={`
            px-2 py-1 rounded-full text-xs font-medium capitalize
            ${config.bgColor} ${config.color}
          `}>
            {day.status.replace('-', ' ')}
          </span>
          
          {day.status === 'completed' && (
            <span className="text-xs text-slate-500">
              {day.highlights.length} key insights
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default DayCard;