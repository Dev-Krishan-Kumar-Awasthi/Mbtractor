import { FileText, FileCheck, Map, Smartphone, User, Landmark } from 'lucide-react';

export default function Documents() {
  const documents = [
    { title: "Aadhar Card", desc: "For identity and address verification", icon: <User className="h-6 w-6" /> },
    { title: "PAN Card", desc: "Mandatory for all financial transactions", icon: <FileText className="h-6 w-6" /> },
    { title: "Land / Khasra Papers", desc: "Required specifically for Tractor loans", icon: <Map className="h-6 w-6" /> },
    { title: "Bank Statements", desc: "Last 6 months of active bank statements", icon: <Landmark className="h-6 w-6" /> },
    { title: "Recent Photographs", desc: "2 Passport-sized photographs", icon: <Smartphone className="h-6 w-6" /> },
  ];

  return (
    <div className="w-full pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-forest-green-dark mb-4">Required Documents</h1>
          <p className="text-xl text-gray-600">Be prepared before you apply. A simple checklist to ensure a smooth and fast approval process.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-saffron-gold p-6 md:p-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-forest-green-dark">Borrower's Checklist</h2>
              <p className="text-forest-green font-medium">Bring original plus one photocopy of each</p>
            </div>
            <FileCheck className="h-16 w-16 text-forest-green-dark opacity-50 hidden sm:block" />
          </div>
          
          <div className="p-6 md:p-10">
            <ul className="space-y-6">
              {documents.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-green-50 transition-colors group">
                  <div className="bg-gray-100 text-forest-green p-3 rounded-lg group-hover:bg-forest-green group-hover:text-white transition-colors">
                    {doc.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{doc.title}</h3>
                    <p className="text-gray-600 mt-1">{doc.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 flex gap-4 items-start">
              <div className="text-blue-600 text-xl font-bold">ℹ️</div>
              <div>
                <h4 className="font-bold text-blue-900 mb-1">Additional Note</h4>
                <p className="text-blue-800 text-sm">
                  Depending on the loan amount and vehicle type, a Co-Applicant (Guarantor) might be required. They will need to provide the same set of documents.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
