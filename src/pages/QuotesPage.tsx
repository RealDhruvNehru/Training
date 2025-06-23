import React, { useState, useEffect } from 'react';
import { Quote as QuoteIcon, Calendar, User } from 'lucide-react';
import { quotes } from '../data/trainingData';

const QuotesPage: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Auto-rotate quotes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <div className="flex items-center justify-center mb-4">
          <QuoteIcon className="w-10 h-10 text-purple-400 mr-3" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Wisdom Collection
          </h1>
        </div>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Memorable quotes and insights from our training sessions
        </p>
      </div>

      {/* Featured Quote - Rotating */}
      <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20">
        <div className="text-center">
          <QuoteIcon className="w-12 h-12 text-purple-400 mx-auto mb-6 opacity-50" />
          <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
            "{quotes[currentQuoteIndex].text}"
          </blockquote>
          <div className="flex items-center justify-center space-x-4 text-slate-300">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{quotes[currentQuoteIndex].author}</span>
            </div>
            <span className="text-slate-500">•</span>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>Day {quotes[currentQuoteIndex].day}</span>
            </div>
          </div>
        </div>

        {/* Quote Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuoteIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentQuoteIndex 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* All Quotes Grid */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">All Quotes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`
                bg-slate-800 rounded-xl p-6 border transition-all duration-300
                hover:bg-slate-700 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10
                ${index === currentQuoteIndex ? 'border-purple-400/50' : 'border-slate-700'}
              `}
            >
              <QuoteIcon className="w-6 h-6 text-purple-400 mb-4 opacity-60" />
              <blockquote className="text-lg text-white mb-4 font-medium leading-relaxed">
                "{quote.text}"
              </blockquote>
              <div className="flex items-center justify-between text-sm text-slate-400">
                <div className="flex items-center space-x-1">
                  <User className="w-3 h-3" />
                  <span>{quote.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>Day {quote.day}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Stats */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Collection Stats</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{quotes.length}</div>
            <div className="text-sm text-slate-400">Total Quotes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400">
              {new Set(quotes.map(q => q.author)).size}
            </div>
            <div className="text-sm text-slate-400">Contributors</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotesPage;