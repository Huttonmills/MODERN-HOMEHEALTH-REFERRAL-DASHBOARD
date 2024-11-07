import React from 'react';
import { MetricCard } from './MetricCard';
import { ReferralTable } from './ReferralTable';

const mockReferrals = [
  {
    id: '1',
    facility: 'Central Hospital',
    patientId: 'P-1234',
    date: '2024-03-15',
    status: 'pending' as const,
    action: 'Review Required',
  },
  {
    id: '2',
    facility: 'West Medical Center',
    patientId: 'P-5678',
    date: '2024-03-14',
    status: 'accepted' as const,
    action: 'None',
  },
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Referral Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard title="Total Referrals" value={245} />
          <MetricCard title="Pending Review" value={12} />
          <MetricCard title="Accepted" value={198} />
          <MetricCard title="Conversion Rate" value="80.8%" />
        </div>

        <ReferralTable referrals={mockReferrals} />
      </div>
    </div>
  );
}