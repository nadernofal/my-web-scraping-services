import React from 'react';
import './CmdWinow.css'; 
import { useEffect, useState } from 'react';

const CmdWindow= () => {
    const [logs, setLogs] = useState([]);
    const [isComplete, setIsComplete] = useState(false);
  
    useEffect(() => {
      const fakeLogs = [
        "Connecting to server...",
        "Fetching data...",
        "Processing data...",
        "Generating report...",
        "Connection successful!",
        "Closing connection..."
      ];
  
      let logIndex = 0;
  
      const logInterval = setInterval(() => {
        if (logIndex < fakeLogs.length) {
          setLogs((prevLogs) => [...prevLogs, fakeLogs[logIndex]]);
          logIndex++;
        } else {
          clearInterval(logInterval);
          setIsComplete(true); // Mark as complete when logs finish
        }
      }, 100); // Print a new log every second
  
      return () => clearInterval(logInterval); // Cleanup on component unmount
    }, [isComplete]);
  
    // This useEffect handles clearing logs and restarting the process
    useEffect(() => {
      if (isComplete) {
        setTimeout(() => {
          setLogs([]);         // Clear the logs
          setIsComplete(false); // Reset the completion flag
        }, 2000);               // Wait 2 seconds before restarting
      }
    }, [isComplete]);
  
    return (
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-body">
        <pre>
          Microsoft Windows [Version 10.0.22631.4249]<br />
          (c) Microsoft Corporation. All rights reserved.<br /><br />
          C:\Users\mn320&gt;
        </pre>
            {logs.map((log, index) => (
            <div key={index}>{log}</div>
          ))}
        </div>
      </div>
    );
  }
  

export default CmdWindow;
