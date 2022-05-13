import { usePluginWidget } from 'iot885-plugin-core';
import React from 'react';
import ReactDOM from 'react-dom';
import packageJson from '../package.json';

type Meta = {
  value: string;
};

const App = () => {
  const { history, meta } = usePluginWidget<Meta>({ name: packageJson.name });
  if (!history) return null;
  return (
    <div style={{ overflow: 'scroll' }}>
      {meta.value}
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {history.times.map((time, idx) => (
            <tr key={idx}>
              <td>{time}</td>
              <td>{history.values[idx]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
