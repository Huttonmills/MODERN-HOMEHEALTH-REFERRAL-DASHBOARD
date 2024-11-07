import React from 'react';
import { Badge } from './Badge';

interface Referral {
  id: string;
  facility: string;
  patientId: string;
  date: string;
  status: 'pending' | 'accepted' | 'declined';
  action: string;
}

interface ReferralTableProps {
  referrals: Referral[];
}

export function ReferralTable({ referrals }: ReferralTableProps) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Facility
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Patient ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {referrals.map((referral) => (
            <tr key={referral.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {referral.facility}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {referral.patientId}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {referral.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Badge status={referral.status} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {referral.action}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}