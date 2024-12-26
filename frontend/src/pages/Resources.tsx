import React from 'react';
import { FileText, Download, Link as LinkIcon } from 'lucide-react';

const resources = [
  {
    title: 'MaizeGuard Pitch',
    type: 'PDF',
    description: 'Pitch deck for MaizeGuard AI project.',
    link: 'https://docs.google.com/presentation/d/1vIHqeSKOLjOPW-61NZWAPKFpsB606b2CGVBIPh18GWk/edit?usp=sharing'
  },
  {
    title: 'Maize Disease Management Guide',
    type: 'PDF',
    description: 'Comprehensive guide for identifying and managing common maize diseases.',
    link: 'https://www.taylorfrancis.com/chapters/edit/10.1201/b19891-7/diseases-management-maize-singh-mamta-singh-dinesh-singh'
  },
  {
    title: 'Best Practices for Maize Cultivation',
    type: 'PDF',
    description: 'Guidelines for optimal maize growing conditions and maintenance.',
    link: 'https://www.wageningenacademic.com/doi/abs/10.3920/WMJ2021.2685'
  },
  {
    title: 'Research Papers on Maize Diseases',
    type: 'Link',
    description: 'Collection of academic papers on maize diseases and their management.',
    link: 'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Research+Papers+on+Maize+Diseases&btnG='
  }
];

export function Resources() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Resources & Downloads
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start space-x-4">
                {resource.type === 'PDF' ? (
                  <FileText className="h-8 w-8 text-green-500 flex-shrink-0" />
                ) : (
                  <LinkIcon className="h-8 w-8 text-green-500 flex-shrink-0" />
                )}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {resource.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download {resource.type}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}