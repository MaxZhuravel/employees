import './app-info.css';

const AppInfo = ({number, increaseNumber}) => {
  return (
    <div className="app-info">
      <h1>Облік співробітників в компанії N</h1>
      <h2>Загальне число співробітників: {number}</h2>
      <h2>Премію отримає: {increaseNumber}</h2>
    </div>
  );
};

export default AppInfo;