import React from 'react';
import { useTable } from 'react-table';
import { useDispatch } from 'react-redux';

import { Content } from './Table.styles';
import DeleteIcon from '../../images/delete.svg';

import { deleteStock } from '../../actions/stocks';

const Table = ({ stocks }) => {
    const dispatch = useDispatch()

    const columns = React.useMemo(
        () => [
          {
            Header: 'ASSET',
            Footer: 'Total',
            accessor: 'asset',
            width: 300,
            textAlign: "left",
          },
          {
            Header: 'PRICE',
            accessor: 'price',
            width: 150,
            textAlign: "right",
            Cell: row => <div style={{ textAlign: "right" }}>{row.value}</div>
          },
          {
            Header: 'VALUE',
            accessor: 'value',
            Footer: info => {
              const total = React.useMemo(
                () =>
                  info.rows.reduce((sum, row) => parseFloat(row.values.value.slice(1)) + sum, 0),
                [info.rows]
              )

              return <div style={{ textAlign: "right" }}>{'$' + total.toFixed(2)}</div>
            },
            width: 150,
            textAlign: "right",
            Cell: row => <div style={{ textAlign: "right" }}>{row.value}</div>
          },
          {
            Header: '% CHANGE',
            accessor: 'change',
            Footer: info => {
              const totalChange = React.useMemo(
                () => {
                  let totalValue = info.rows.reduce((sum, row) => parseFloat(row.values.value.slice(1)) + sum, 0);
                  let totalCost = 0;
                  for (let i = 0; i < stocks.length; i++) {
                    totalCost += (parseFloat(stocks[i].cost) * parseFloat(stocks[i].shares));
                  }
                  return (totalValue - totalCost)/totalCost * 100;
                },
                [info.rows]
              )
              
              return <div id="total-change" style={totalChange.toFixed(2).startsWith('-') ? { textAlign: "right", color: 'red' } : { textAlign: "right", color: '#32c75a' }}>{totalChange.toFixed(2) + '%'}</div>
            },
            width: 150,
            textAlign: "right",
            Cell: s => (
              <div className={s.value.startsWith('-') ? "RedColor" : "GreenColor"} style={{ textAlign: "right" }}>
                {s.value} 
              </div>
            ),
          },
          {
            accessor: '_id',
            width: 40,
            Cell: s => (
              <button className='delete-button' onClick={() => dispatch(deleteStock(s.value))}>
                <img className='delete-icon' src={DeleteIcon} alt='delete-icon' />
              </button>
            )
          }
        ],
        [stocks]
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: stocks })

    return (
        <Content>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps({style: { width: column.width, textAlign: column.textAlign }})}>{column.render('Header')}</th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                        </tr>
                    )
                    })}
                </tbody>
                <tfoot>
                  {footerGroups.map(group => (
                    <tr {...group.getFooterGroupProps()}>
                      {group.headers.map(column => (
                        <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                      ))}
                    </tr>
                  ))}
                </tfoot>
            </table>  
        </Content>
         
    )
}

export default Table;