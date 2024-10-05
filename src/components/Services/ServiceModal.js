import React, { useState } from 'react';
import './ServiceModal.css';

function ServiceModal({ service, onClose }) {
  const [outputFormat, setOutputFormat] = useState(service.options.outputFormats[0]);
  const [recordCount, setRecordCount] = useState(100);
  const [keywords, setKeywords] = useState('');
  const [contentType, setContentType] = useState(service.options.contentTypes[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceDetails = {
      serviceName: service.title,
      outputFormat,
      recordCount: service.options.maxRecords ? recordCount : undefined,
      keywords: service.options.keywordsRequired ? keywords : undefined,
      contentType
    };
    console.log(serviceDetails);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <form onSubmit={handleSubmit}>

          {/* Render output format if available */}
          {service.options.outputFormats && (
            <>
              <label>Output Format</label>
              <select value={outputFormat} onChange={(e) => setOutputFormat(e.target.value)}>
                {service.options.outputFormats.map(format => (
                  <option key={format} value={format}>{format}</option>
                ))}
              </select>
            </>
          )}

          {/* Render number of records if enabled */}
          {service.options.maxRecords && (
            <>
              <label>Number of Records</label>
              <input
                type="number"
                value={recordCount}
                onChange={(e) => setRecordCount(e.target.value)}
                min="1"
              />
            </>
          )}

          {/* Render keywords input if required */}
          {service.options.keywordsRequired && (
            <>
              <label>Keywords</label>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="Enter keywords to search"
              />
            </>
          )}

          {/* Render content type if available */}
          {service.options.contentTypes && (
            <>
              <label>Content Type</label>
              <select value={contentType} onChange={(e) => setContentType(e.target.value)}>
                {service.options.contentTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </>
          )}

          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default ServiceModal;
