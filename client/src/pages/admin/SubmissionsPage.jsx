import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import QualifyingSubmissions from '../../components/admin/submissions/QualifyingSubmissions';
import ContactSubmissions from '../../components/admin/submissions/ContactSubmissions';
import LaptopNodeWaitlist from '../../components/admin/submissions/LaptopNodeWaitlist';
import MobileNodeWaitlist from '../../components/admin/submissions/MobileNodeWaitlist';

const SubmissionsPage = () => {
  const [activeTab, setActiveTab] = useState('qualifying');

  const tabs = [
    { id: 'qualifying', label: 'Qualifying Applications', icon: '📋' },
    { id: 'contact', label: 'Contact Forms', icon: '✉️' },
    { id: 'laptop-node', label: 'Laptop Crypto Node', icon: '💻' },
    { id: 'mobile-node', label: 'Mobile Node (nodeFÔN)', icon: '📱' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Form Submissions</h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">View and manage all user submissions</p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 -mx-4 sm:-mx-6 px-4 sm:px-6">
          <nav className="-mb-px flex space-x-4 sm:space-x-8 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  whitespace-nowrap py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm flex items-center gap-1 sm:gap-2 flex-shrink-0
                  ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                <span className="text-lg sm:text-xl">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 'qualifying' && <QualifyingSubmissions />}
          {activeTab === 'contact' && <ContactSubmissions />}
          {activeTab === 'laptop-node' && <LaptopNodeWaitlist />}
          {activeTab === 'mobile-node' && <MobileNodeWaitlist />}
        </div>
      </div>
    </AdminLayout>
  );
};

export default SubmissionsPage;
