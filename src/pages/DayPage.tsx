import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Calendar, User, Award, Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trainingDays } from '../data/trainingData';
import html2pdf from 'html2pdf.js';

const DayPage: React.FC = () => {
  const { dayId } = useParams<{ dayId: string }>();
  const day = trainingDays.find(d => d.id === dayId);

  if (!day) {
    return <Navigate to="/" replace />;
  }

  const handleExportPDF = () => {
    const element = document.getElementById('day-content');
    if (!element) return;

    const opt = {
      margin: 1,
      filename: `coforge-training-day-${day.day}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Back Navigation */}
      <Link 
        to="/" 
        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to all days</span>
      </Link>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Day {day.day}</h1>
            <div className="flex items-center space-x-4 text-slate-300">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(day.date)}</span>
              </div>
              {day.status === 'completed' && (
                <span className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm font-medium">
                  Completed
                </span>
              )}
            </div>
          </div>
          
          {/* PDF Export Button - Floating Style */}
          {day.status === 'completed' && (
            <button
              onClick={handleExportPDF}
              className="group bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/25"
              title="Export as PDF"
            >
              <Download className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Trainer Info */}
        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{day.trainer}</h3>
              <p className="text-slate-300">{day.experience}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="day-content" className="bg-white text-gray-800 rounded-xl p-8 print:shadow-none">
        {/* PDF Header */}
        <div className="mb-8 text-center border-b pb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Coforge Training Chronicle</h1>
          <h2 className="text-2xl font-semibold text-blue-600">Day {day.day} Summary</h2>
          <p className="text-gray-600 mt-2">{formatDate(day.date)}</p>
        </div>

        {/* Trainer Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Award className="w-5 h-5 mr-2 text-blue-600" />
            Trainer Information
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <p><strong>Name:</strong> {day.trainer}</p>
            <p><strong>Experience:</strong> {day.experience}</p>
          </div>
        </div>

        {/* Key Highlights */}
        {day.status === 'completed' ? (
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Key Highlights & Insights</h3>
            <div className="space-y-3">
              {day.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <p className="text-yellow-800">This session is {day.status}. Content will be added after completion.</p>
          </div>
        )}

        {/* Key Quotes */}
        {day.keyQuotes && day.keyQuotes.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Memorable Quotes</h3>
            <div className="grid gap-4">
              {day.keyQuotes.map((quote, index) => (
                <blockquote key={index} className="bg-blue-50 border-l-4 border-blue-600 p-4 italic text-gray-700">
                  "{quote}"
                </blockquote>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 pt-6 border-t text-center text-gray-500 text-sm">
          <p>Generated from Coforge Training Chronicle</p>
          <p>© 2025 - Building excellence through continuous learning</p>
        </div>
      </div>

      {/* Action Buttons */}
      {day.status === 'completed' && (
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleExportPDF}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export as PDF</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default DayPage;