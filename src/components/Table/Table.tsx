import React from 'react';
import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faTrash, } from '@fortawesome/free-solid-svg-icons';
interface TableProps {
  data: any[];
  columns: string[]; 
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <div className="table-container">
      <div className="table-header">
        {columns.map((column) => ((column === 'Actions') ?
          <div>
            <FontAwesomeIcon className="icons-header" icon={faArchive} />
            <FontAwesomeIcon className="icons-header"  icon={faTrash} />
          </div>
          : <div key={column}>{column}</div>
        ))}</div>
        
      <div className="table-body">
        {data.map((row, index) => (
          <div key={index} className="table-row">
            {columns.map((column) => (
              <div key={column}>{row[column]}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
